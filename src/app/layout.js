import './globals.css'

export const metadata = {
  title: 'AI Celebrity Voice Generator',
  description: 'Transform any text into authentic celebrity voices instantly. Generate voices like Trump, Obama, Stephen Hawking, SpongeBob, and many others with our free AI voice generator.',
  keywords: 'celebrity ai voice generator, ai celebrity voice generator, ai voice generator celebrity, celebrity voice generator, celebrity voice ai, celebrity voice changer, ai voice celebrity, celebrity ai voice, free celebrity ai voice generator, ai celebrity voice, celebrity voice, free ai voice generator celebrity, celebrity ai voices, ai celebrity voices, celebrity voice changers, celebrity voice generator online free',
  openGraph: {
    title: 'AI Celebrity Voice Generator',
    description: 'Transform any text into authentic celebrity voices instantly. Generate voices like Trump, Obama, Stephen Hawking, SpongeBob, and many others with our free AI voice generator.',
    url: 'https://aicelebrityvoice.org',
    siteName: 'AI Celebrity Voice Generator',
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
        <link rel="canonical" href="https://aicelebrityvoice.org" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#667eea" />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SQLW1CZMK8"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SQLW1CZMK8');
            `,
          }}
        />

        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "s3rvxopac5");
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}