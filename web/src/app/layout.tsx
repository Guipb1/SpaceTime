import { ReactNode } from 'react'
import './globals.css'
import { Roboto, Nunito } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: '400',
})
const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: '700',
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${nunito.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
