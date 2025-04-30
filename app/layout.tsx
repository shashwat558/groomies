import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Pawsome Grooming - Chicago's Premier Pet Grooming Service",
  description:
    "Professional pet grooming services in Chicago. We provide full grooming, bathing, nail trimming, and more for your furry friends.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        
          {children}
        
      </body>
    </html>
  )
}
