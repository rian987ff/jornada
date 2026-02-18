import type React from "react"
import type { Metadata } from "next"
import { DM_Serif_Display, Inter } from "next/font/google"
import "./globals.css"

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Cosmogenia - Transformação através da vibração consciente",
  description:
    "MEDICINA VIBRACIONAL ✨ OM RAYA",
  keywords: "links, transformação digital, desenvolvimento pessoal, projetos conscientes, mantras, neuroplasticidade",
  openGraph: {
    title: "Cosmogenia - Transformação através da vibração consciente",
    description: "MEDICINA VIBRACIONAL ✨ OM RAYA",
    type: "website",
  },
  generator: 'Altrion Solutions'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${dmSerifDisplay.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
