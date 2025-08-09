import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

// Load the Inter font from Google Fonts
const inter = Inter({ subsets: ["latin"] })

// Define metadata for the website (SEO)
export const metadata: Metadata = {
  title: "NONGKI - Community Hub",
  description: "The ultimate community for meaningful conversations and epic group gaming.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Font Awesome for icons */}
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`${inter.className} antialiased bg-gray-900 text-gray-100`}>{children}</body>
    </html>
  )
}
