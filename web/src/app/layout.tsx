import { ReactNode } from 'react'
import './globals.css'
import { Roboto, Ubuntu } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: '400',
})
const ubuntu = Ubuntu({
  subsets: ['latin'],
  variable: '--font-ubuntu',
  weight: '700',
})

export const metadata = {
  title: 'NLW Spacetime',
  description:
    'Uma capsula do tempo construida com react, Next.js,TailwindCSS e Typescript',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${ubuntu.variable} font-sans text-gray-100 bg-gray-900`}
      >
        {children}
      </body>
    </html>
  )
}
