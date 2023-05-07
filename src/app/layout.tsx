import './globals.css'
import { League_Spartan } from 'next/font/google'

const leagueSpartan = League_Spartan({ subsets: ['latin'] })

export const metadata = {
  title: 'ohenrique',
  description: 'Personal website Henrique Oliveira.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='scroll-smooth' lang="en">
      <body className={leagueSpartan.className}>{children}</body>
    </html>
  )
}
