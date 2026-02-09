import { NextRequest, NextResponse } from 'next/server';
import { createMockInterviewAgent } from '@/lib/aiLab/agents';
import { AIMessage, HumanMessage } from '@langchain/core/messages';

export async function POST(req: NextRequest) {
    try {
        const { messages, jd, resumeData, config } = await req.json();

        if (!jd || !resumeData) {
            return NextResponse.json(
                { error: 'Job description and resume data are required' },
                { status: 400 }
            );
        }

        const agent = createMockInterviewAgent(config || {});

        const history = messages.slice(0, -1).map((msg: { role: 'user' | 'ai'; content: string; }) => 
            msg.role === 'user' ? new HumanMessage(msg.content) : new AIMessage(msg.content)
        );
        
        const lastUserMessage = messages.length > 0 ? messages[messages.length - 1].content : "";

        // If history is empty and lastUserMessage is empty (initial start), use a placeholder to trigger the welcome message
        const input = lastUserMessage || "Start the interview.";

        const stream = await agent.stream({
            input,
            chat_history: history,
            resumeData: JSON.stringify(resumeData),
            jd,
        });

        const encoder = new TextEncoder();

        const readableStream = new ReadableStream({
            async start(controller) {
                for await (const chunk of stream) {
                    const content = chunk.content;
                    if (typeof content === 'string') {
                        const data = { type: 'message_chunk', content };
                        controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`));
                    }
                }
                controller.close();
            },
        });

        return new Response(readableStream, {
            headers: {
                'Content-Type': 'text/event-stream',
                'Cache-Control': 'no-cache',
                'Connection': 'keep-alive',
            },
        });

    } catch (error: unknown) {
        console.error("Mock Interview Agent Error:", error);
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
        return NextResponse.json(
            { error: 'An error occurred.', details: errorMessage },
            { status: 500 }
        );
    }
}
