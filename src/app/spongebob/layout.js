export const metadata = {
    title: 'SpongeBob AI Voice',
    description: 'Make SpongeBob say your words! Enter any text and generate authentic SpongeBob AI voice instantly with our free voice generator.',
    keywords: 'spongebob ai voice, spongebob voice ai, ai spongebob voice, spongebob ai voice generator, spongebob ai voice text to speech, ai voice generator spongebob',
    openGraph: {
        title: 'SpongeBob AI Voice - Free SpongeBob Voice Generator',
        description: 'Create authentic SpongeBob AI voice content with our advanced SpongeBob voice generator technology.',
        url: 'https://your-domain.com/spongebob',
        siteName: 'AI Celebrity Voice Generator',
        images: [
            {
                url: '/avatars/spongebob.jpg',
                width: 1200,
                height: 630,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function SpongeBobVoiceLayout({ children }) {
    return children
}