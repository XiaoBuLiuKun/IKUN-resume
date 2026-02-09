import { NextRequest, NextResponse } from 'next/server';
import { createCareerPathAgent } from '@/lib/aiLab/agents';

export async function POST(req: NextRequest) {
    try {
        const { resumeData, targetRole, config } = await req.json();

        if (!resumeData) {
            return NextResponse.json(
                { error: 'Resume data is required' },
                { status: 400 }
            );
        }

        const agent = createCareerPathAgent(config || {});

        const response = await agent.invoke({
            resumeData: JSON.stringify(resumeData),
            targetRole: targetRole || "Not specified, please infer",
        });

        const content = response.content;
        let jsonContent = content;

        if (typeof content === 'string') {
            // Remove markdown code blocks if present
            jsonContent = content.replace(/```json\n?|\n?```/g, '').trim();
        }

        try {
            const parsedData = JSON.parse(jsonContent as string);
            return NextResponse.json(parsedData);
        } catch (parseError) {
            console.error("JSON Parse Error:", parseError, "Content:", content);
            return NextResponse.json(
                { error: 'Failed to parse AI response', rawContent: content },
                { status: 500 }
            );
        }

    } catch (error: unknown) {
        console.error("Career Path Agent Error:", error);
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
        return NextResponse.json(
            { error: 'An error occurred.', details: errorMessage },
            { status: 500 }
        );
    }
}
