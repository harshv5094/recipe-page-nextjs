import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
