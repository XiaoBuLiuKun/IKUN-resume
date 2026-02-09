import { NextRequest, NextResponse } from 'next/server';
import { createCoverLetterAgent } from '@/lib/aiLab/agents';

export async function POST(req: NextRequest) {
    try {
        const { jd, resumeData, config } = await req.json();

        if (!jd || !resumeData) {
            return NextResponse.json(
                { error: 'Job description and resume data are required' },
                { status: 400 }
            );
        }

        const agent = createCoverLetterAgent(config || {});

        const response = await agent.invoke({
            resumeData: JSON.stringify(resumeData),
            jd,
        });

        const content = response.content;
        let jsonContent = content;

        if (typeof content === 'string') {
            // Remove markdown code blocks if present to extract JSON
            jsonContent = content.replace(/```json\n?|\n?```/g, '').trim();
        }

        try {
            const parsedData = JSON.parse(jsonContent as string);
            return NextResponse.json(parsedData);
        } catch (parseError) {
            console.error("JSON Parse Error:", parseError, "Content:", content);
            // Fallback: return the raw content if it's not valid JSON, wrapped in the expected structure
            return NextResponse.json({ content: content });
        }

    } catch (error: unknown) {
        console.error("Cover Letter Agent Error:", error);
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
        return NextResponse.json(
            { error: 'An error occurred.', details: errorMessage },
            { status: 500 }
        );
    }
}
