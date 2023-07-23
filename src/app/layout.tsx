import './globals.css'
import { Montserrat } from 'next/font/google'
import type { ReactNode } from 'react'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-main' })

export const metadata = {
  title: 'Portal ART',
  description: 'Gerencie suas ARTs de forma simples e rápida.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body
        className={`${montserrat.variable} h-screen bg-background font-sans text-foreground`}
      >
        {children}
      </body>
    </html>
  )
}
