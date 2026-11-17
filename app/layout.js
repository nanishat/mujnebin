import { Analytics } from "@vercel/analytics/next"
import { IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google'
import { siteMetadata } from '@/config/site'
import './globals.css'

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-sans',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-mono',
})

export const metadata = siteMetadata

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} scroll-smooth`}
    >
      <body
        className={`${ibmPlexSans.className} overflow-x-hidden bg-chineseWhite leading-8 text-richBlack antialiased dark:bg-richBlack dark:text-chineseWhite`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  )
}
