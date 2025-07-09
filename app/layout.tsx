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
  title: "Meus Links - Transformação Digital Consciente",
  description:
    "Todos os meus projetos e links importantes em um só lugar. Conectando tecnologia e desenvolvimento pessoal através de experiências transformadoras.",
  keywords: "links, transformação digital, desenvolvimento pessoal, projetos conscientes, mantras, neuroplasticidade",
  openGraph: {
    title: "Meus Links - Transformação Digital Consciente",
    description: "Projetos que conectam tecnologia e consciência",
    type: "website",
  },
    generator: 'v0.dev'
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
