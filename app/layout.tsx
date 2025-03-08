import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ThemeProvider } from "@/components/theme-provider"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Elysian Innovations",
  description: "Empowering your business with seamless digital experiences",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.className} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="relative overflow-hidden">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

