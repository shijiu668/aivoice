export const metadata = {
    title: 'Morgan Freeman Voice',
    description: 'Make Morgan Freeman say your words! Enter any text and generate authentic Morgan Freeman AI voice instantly with our free voice generator.',
    keywords: 'morgan freeman voice generator, morgan freeman ai voice, arthur morgan voice, morgan freeman voice over, ai morgan freeman voice, morgan freeman text to speech, voice generator morgan freeman, morgan freeman voiceover',
    openGraph: {
        title: 'Morgan Freeman Voice',
        description: 'Make Morgan Freeman say your words! Enter any text and generate authentic Morgan Freeman AI voice instantly with our free voice generator.',
        url: 'https://aicelebrityvoice.org/morgan-freeman',
        siteName: 'AI Celebrity Voice Generator',
        images: [
            {
                url: '/avatars/morgan-freeman.jpg',
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

export default function MorganFreemanVoiceLayout({ children }) {
    return children
}