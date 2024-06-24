import type { Metadata } from 'next'
import { Syne, Smooch } from 'next/font/google'
import './globals.css'
import MainNav from './components/UI/MainNav'
import WorksProvider from './WorkContext'
import Footer from './components/UI/Footer'

const syne = Syne({ 
  subsets: ['latin'], 
  weight: ['400','500','600','700','800'],
  variable: '--font-syne' 
})

const smooch = Smooch({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-smooch'
})


export const metadata: Metadata = {
  title: 'Exvitermini - Creative works',
  description: 'A creative agency for Branding, Web development, Marketing, Prototyping, 3D visuals and a lot more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <WorksProvider>
      <body className={`${syne.variable} ${smooch.variable}`}>
        <MainNav />
        {children}
        <Footer />
      </body>
      </WorksProvider>
    </html>
  )
}
