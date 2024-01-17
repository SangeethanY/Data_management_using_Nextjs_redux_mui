import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Home from './Components/Home'
import { Container } from '@mui/material'




const inter = Poppins({weight:'400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'yskms service',
  description: 'study through our flow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Home>
        
        {children}

        </Home>
        </body>
    </html>
  )
}
