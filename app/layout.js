import { Outfit, Ovo } from 'next/font/google'
import { siteMetadata } from '@/config/site'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const ovo = Ovo({
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata = siteMetadata

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} overflow-x-hidden bg-chineseWhite leading-8 text-richBlack antialiased dark:bg-richBlack dark:text-chineseWhite`}
      >
        {children}
      </body>
    </html>
  )
}
