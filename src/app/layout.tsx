import './globals.css'
import { JetBrains_Mono } from 'next/font/google'
import Header from "@/components/Header"
import PageTransition from "@/components/PageTransition"
import StairTransition from "@/components/StairTransition"

const JetBrainsMono = JetBrains_Mono({ 
  subsets: ['latin'], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono'
})

export const metadata = {
  title: 'Ny Lanja',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={JetBrainsMono.variable}> { /* `${JetBrainsMono.variable} pb-10` */}
        <Header />
        <StairTransition/>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  )
}
