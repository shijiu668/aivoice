import { NextResponse } from 'next/server';
import Replicate from 'replicate';
import { getCelebrityAudioUrl } from '@/utils/celebrities';

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
});
export async function POST(request) {
    try {
        const { text, celebrityId, language = 'en', cleanup_voice = true } = await request.json();

        if (!text || !celebrityId) {
            return NextResponse.json(
                { error: 'Text and celebrity ID are required' },
                { status: 400 }
            );
        }

        // Get the celebrity's audio file URL
        const audioFile = getCelebrityAudioUrl(celebrityId);
        if (!audioFile) {
            return NextResponse.json(
                { error: 'Celebrity not found' },
                { status: 404 }
            );
        }

        // Convert relative path to absolute URL for the API
        const baseUrl = request.headers.get('host');
        const protocol = request.headers.get('x-forwarded-proto') || 'http';
        const speakerUrl = `${protocol}://${baseUrl}${audioFile}`;

        // Prepare input for the Replicate API
        const input = {
            text: text,
            speaker: speakerUrl,
            language: language,
            cleanup_voice: cleanup_voice
        };

        // Run the voice generation model
        const output = await replicate.run(
            "lucataco/xtts-v2:684bc3855b37866c0c65add2ff39c78f3dea3f4ff103a436465326e0f438d55e",
            { input }
        );

        // Fetch the generated audio
        const audioResponse = await fetch(output);
        if (!audioResponse.ok) {
            throw new Error('Failed to fetch generated audio');
        }

        const audioBuffer = await audioResponse.arrayBuffer();

        // Return the audio file
        return new NextResponse(audioBuffer, {
            status: 200,
            headers: {
                'Content-Type': 'audio/wav',
                'Content-Length': audioBuffer.byteLength.toString(),
                'Cache-Control': 'no-cache',
            },
        });

    } catch (error) {
        console.error('Error generating voice:', error);
        return NextResponse.json(
            { error: 'Failed to generate voice' },
            { status: 500 }
        );
    }
}