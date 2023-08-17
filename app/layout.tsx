import ToasterProvider from '@/Providers/ToasterProvider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'X',
  description: 'A decent looking site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen w-full mx-auto`}>
        <ToasterProvider />
        {children}
        </body>
    </html>
  )
}
