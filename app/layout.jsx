import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'], weight: ['400', '600', '700'] })

export const metadata = {
  title: 'Recipe Page',
  description: 'A frontend mentor challenge'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon-32x32.png" />
      </head>
      <body className={outfit.className}>{children}</body>
    </html>
  )
}
