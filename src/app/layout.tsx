import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NightTide - Waitlist',
  description: 'Designed for creators by creators.',
  icons: {
    icon: '/Logo_Gradient.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Virgil:wght@400;700&display=swap"
          rel="preconnect"
        />
        <link
          href="https://excalidraw.com/Virgil.woff2"
          rel="preload"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-virgil">
        {children}
      </body>
    </html>
  )
}
