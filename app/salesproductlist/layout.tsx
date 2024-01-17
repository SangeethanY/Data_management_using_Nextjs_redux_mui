
import { Typography } from '@mui/material'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'


const inter = Poppins({ weight:'400',subsets:['latin']})

export const metadata: Metadata = {
  title: 'Customer Interface',
  description: 'Add customers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
 
      <div className={inter.className} style={{display:"flex",justifyContent:"center",marginTop:"2rem"}}>{children}</div>
     
    </div>
  )
}
