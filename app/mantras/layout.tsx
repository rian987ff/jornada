import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Jornada dos Mantras - Transformação através da Vibração Consciente",
  description:
    "Reprograme seus pensamentos com mantras canalizados, meditações guiadas e rituais vibracionais. Uma jornada de 21 dias para criar novas redes neuronais e despertar seu potencial interior.",
  keywords: "mantras, meditação, autoconhecimento, transformação pessoal, neuroplasticidade, espiritualidade",
  openGraph: {
    title: "Jornada dos Mantras",
    description: "Reprograme seus pensamentos com palavras que curam, ativam e transformam",
    type: "website",
  },
}

export default function JornadaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
