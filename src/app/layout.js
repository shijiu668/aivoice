import './globals.css'

export const metadata = {
  title: 'AI Voice Generator - Create Celebrity Voices with AI Technology',
  description: 'Transform text to speech with our advanced AI voice generator. Create realistic celebrity voices, AI voice changer technology, and professional AI voice cloning. Free AI voice generator online.',
  keywords: 'ai voice generator, ai celebrity voice generator, ai voice changer, text to speech, voice cloning, celebrity voice, ai voice synthesis, voice generator online, free voice generator',
  openGraph: {
    title: 'AI Voice Generator - Create Celebrity Voices with AI Technology',
    description: 'Transform text to speech with our advanced AI voice generator. Create realistic celebrity voices and professional voice cloning.',
    url: 'https://your-domain.com',
    siteName: 'AI Voice Generator',
    images: [
      {
        url: '/og-image.jpg',
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
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://your-domain.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#667eea" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}