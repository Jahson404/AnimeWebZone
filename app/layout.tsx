import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "𝗕𝗘𝗦𝗧 𝗪𝗜𝗦𝗛𝗘𝗦 𝗙𝗥𝗢𝗠 𝗬𝗢𝗨𝗥 𝗗𝗘𝗩",
  description: "merry Christmas to james tech supporters, trashcore supporters",
  generator: "https://files.catbox.moe/7kivvz.jpg",
  icons: {
    icon: [
      {
        url: "https://files.catbox.moe/7kivvz.jpg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "https://files.catbox.moe/7kivvz.jpg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "https://files.catbox.moe/7kivvz.jpg",
        type: "image/svg+xml",
      },
    ],
    apple: "https://files.catbox.moe/7kivvz.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
