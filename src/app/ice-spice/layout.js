export const metadata = {
  title: 'Ice Spice AI',
  description: 'Make Ice Spice say anything you want! Enter your text with our free Ice Spice AI voice generator. Generate authentic rap voice instantly with advanced AI technology.',
  keywords: 'ice spice ai, ice spice ai voice, voice spice, ice spice voice ai, voicespice, ice spice voice, ice spice voice changer, ai ice spice voice',
  openGraph: {
    title: 'Ice Spice AI',
    description: 'Make Ice Spice say your words! Generate authentic Ice Spice AI voice content instantly.',
    url: 'https://aicelebrityvoice.org/ice-spice',
    siteName: 'AI Celebrity Voice Generator',
    images: [
      {
        url: '/avatars/ice-spice.jpg',
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

export default function IceSpiceVoiceLayout({ children }) {
  return children
}