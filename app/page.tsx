import { Card, CardContent } from "@/components/ui/card"
import {
  Globe,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Sparkles,
  Dna,
  Sprout,
} from "lucide-react"
import Link from "next/link"

// Configurações editáveis - altere aqui suas informações
const PROFILE_CONFIG = {
  // Informações do perfil
  name: "Asha",
  verified: true, // true para mostrar o ícone de verificação
  bio: "Terapeuta integrativa, Guardiã de medicinas ancestrais e canalizadora da Cosmogenia — filosofia de vida, método terapêutico e caminho iniciático.",
  avatar: "/foto-LT.webp", // URL da sua foto de perfil

  // Links ativos - apenas 3 inicialmente
  links: [
    {
      title: "Jornada Mantras de Ativação",
      url: "https://www.cosmogenia.org/mantras",
      icon: "sparkles",
      description: "Mantras, meditações e práticas em 6 semanas de reconexão. Comece sua jornada.",
    },
    {
      title: "Atendimentos Individuais",
      url: "https://wa.me/5547997554304?text=Oi%2C+Asha.+Tenho+interesse+em+um+atendimento+individual+e+gostaria+de+entender+como+funciona.",
      icon: "sprout",
      description: "Acompanhamentos terapêuticos e vivências personalizadas. Esteja em contato.",
    },
    {
      title: "Rosa Cósmica",
      url: "https://forms.gle/29YkDhNF7ytUbePz7",
      icon: "flower",
      description: "Retiro de Primavera para Mulheres de 18 a 21 de setembro de 2025. Saiba mais",
    },
  ],

  // Links ocultos - descomente para ativar
  hiddenLinks: [
    // {
    //   title: "GitHub",
    //   url: "https://github.com/seuusuario",
    //   icon: "github",
    //   description: "Meus projetos de código",
    // },
    // {
    //   title: "Twitter / X",
    //   url: "https://twitter.com/seuusuario",
    //   icon: "twitter",
    //   description: "Pensamentos e atualizações",
    // },
    // {
    //   title: "Instagram",
    //   url: "https://instagram.com/seuusuario",
    //   icon: "instagram",
    //   description: "Fotos e momentos",
    // },
    // {
    //   title: "Email",
    //   url: "mailto:seu@email.com",
    //   icon: "mail",
    //   description: "Entre em contato",
    // },
    // {
    //   title: "WhatsApp",
    //   url: "https://wa.me/5511999999999",
    //   icon: "phone",
    //   description: "Conversa direta",
    // },
  ],
}

// Componente de Espiral (mesmo da Jornada dos Mantras)
function SpiralIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M50,10 Q70,20 60,40 Q40,50 50,30 Q55,35 52,38 Q48,40 50,37"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      >
        <animate attributeName="stroke-dasharray" values="0,200;100,200;200,200" dur="3s" repeatCount="indefinite" />
      </path>
      <path
        d="M50,90 Q30,80 40,60 Q60,50 50,70 Q45,65 48,62 Q52,60 50,63"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      >
        <animate
          attributeName="stroke-dasharray"
          values="0,200;100,200;200,200"
          dur="3s"
          repeatCount="indefinite"
          begin="1.5s"
        />
      </path>
      <circle cx="50" cy="50" r="2" fill="currentColor" opacity="0.8">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}

// Componente para renderizar ícones
function LinkIcon({ iconName, className = "w-5 h-5" }: { iconName: string; className?: string }) {
  const icons = {
    globe: Globe,
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    instagram: Instagram,
    mail: Mail,
    phone: Phone,
    mappin: MapPin,
    external: ExternalLink,
    sparkles: Sparkles,
    dna: Dna,
    spiral: SpiralIcon,
    sprout: Sprout,
  }

  const IconComponent = icons[iconName as keyof typeof icons] || Globe
  return <IconComponent className={className} />
}

// Componente para o ícone de verificação (com cores da Jornada)
function VerifiedIcon() {
  return (
    <div className="inline-flex items-center justify-center w-5 h-5 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full ml-2 shadow-sm">
      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  )
}

// Componente de Rede Neural Minimalista (adaptado da Jornada)
function MinimalistNeuralNetwork() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <svg className="w-full h-full" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#f59e0b" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0.1" />
          </radialGradient>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        <circle cx="200" cy="100" r="3" fill="url(#nodeGradient)">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="120" cy="180" r="2.5" fill="url(#nodeGradient)">
          <animate attributeName="opacity" values="0.4;0.9;0.4" dur="3.5s" repeatCount="indefinite" begin="0.5s" />
        </circle>
        <circle cx="280" cy="180" r="2.5" fill="url(#nodeGradient)">
          <animate attributeName="opacity" values="0.4;0.9;0.4" dur="3.5s" repeatCount="indefinite" begin="1s" />
        </circle>
        <circle cx="200" cy="300" r="3" fill="url(#nodeGradient)">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" begin="2s" />
        </circle>

        <path d="M200,100 Q160,140 120,180" stroke="url(#connectionGradient)" strokeWidth="1" fill="none" opacity="0.5">
          <animate attributeName="opacity" values="0.2;0.7;0.2" dur="5s" repeatCount="indefinite" />
        </path>
        <path d="M200,100 Q240,140 280,180" stroke="url(#connectionGradient)" strokeWidth="1" fill="none" opacity="0.5">
          <animate attributeName="opacity" values="0.2;0.7;0.2" dur="5s" repeatCount="indefinite" begin="1s" />
        </path>
        <path d="M120,180 Q160,240 200,300" stroke="url(#connectionGradient)" strokeWidth="1" fill="none" opacity="0.5">
          <animate attributeName="opacity" values="0.2;0.7;0.2" dur="4s" repeatCount="indefinite" begin="1.5s" />
        </path>
        <path d="M280,180 Q240,240 200,300" stroke="url(#connectionGradient)" strokeWidth="1" fill="none" opacity="0.5">
          <animate attributeName="opacity" values="0.2;0.7;0.2" dur="4s" repeatCount="indefinite" begin="2.5s" />
        </path>

        {/* Impulso de energia */}
        <circle r="1.5" fill="#fbbf24" opacity="0.8">
          <animateMotion dur="8s" repeatCount="indefinite">
            <path d="M200,100 Q160,140 120,180 Q160,240 200,300" />
          </animateMotion>
          <animate attributeName="opacity" values="0;0.8;0" dur="8s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  )
}

export default function LinkTreePage() {
  const isInternalLink = (url: string) => url.startsWith("/")

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-50 via-sand-50 to-amber-50 py-8 px-4 relative overflow-hidden">
      <MinimalistNeuralNetwork />

      <div className="max-w-md mx-auto relative z-10">
        {/* Card Principal */}
        <Card className="bg-white/90 backdrop-blur-sm shadow-2xl border-0 overflow-hidden">
          <CardContent className="p-8">
            {/* Avatar */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 p-1">
                  <img
                    src={PROFILE_CONFIG.avatar || "/placeholder.svg"}
                    alt={PROFILE_CONFIG.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                {/* Indicador de energia */}
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full border-2 border-white flex items-center justify-center shadow-lg">
                  <SpiralIcon className="w-3 h-3 text-white" />
                </div>
              </div>
            </div>

            {/* Nome e Verificação */}
            <div className="text-center mb-4">
              <div className="flex items-center justify-center">
                <h1 className="text-2xl font-serif text-earth-900">{PROFILE_CONFIG.name}</h1>
                {PROFILE_CONFIG.verified && <VerifiedIcon />}
              </div>
            </div>

            {/* Bio */}
            <div className="text-center mb-8">
              <p className="text-earth-700 leading-relaxed">{PROFILE_CONFIG.bio}</p>
            </div>

            {/* Links */}
            <div className="space-y-3">
              {PROFILE_CONFIG.links.map((link, index) => (
                <div key={index}>
                  {isInternalLink(link.url) ? (
                    <Link href={link.url} className="block">
                      <div className="w-full p-4 rounded-xl border border-sand-200 bg-gradient-to-r from-warm-50 to-sand-50 hover:from-amber-50 hover:to-orange-50 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer group">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center mr-4 group-hover:from-amber-700 group-hover:to-orange-700 transition-all duration-300 shadow-md">
                            <LinkIcon iconName={link.icon} className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-earth-900 group-hover:text-amber-800 transition-colors">
                              {link.title}
                            </div>
                            {link.description && <div className="text-sm text-earth-600 mt-1">{link.description}</div>}
                          </div>
                          <ExternalLink className="w-4 h-4 text-earth-400 group-hover:text-amber-600 transition-colors" />
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="block">
                      <div className="w-full p-4 rounded-xl border border-sand-200 bg-gradient-to-r from-warm-50 to-sand-50 hover:from-amber-50 hover:to-orange-50 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer group">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center mr-4 group-hover:from-amber-700 group-hover:to-orange-700 transition-all duration-300 shadow-md">
                            <LinkIcon iconName={link.icon} className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-earth-900 group-hover:text-amber-800 transition-colors">
                              {link.title}
                            </div>
                            {link.description && <div className="text-sm text-earth-600 mt-1">{link.description}</div>}
                          </div>
                          <ExternalLink className="w-4 h-4 text-earth-400 group-hover:text-amber-600 transition-colors" />
                        </div>
                      </div>
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Indicador de mais links (opcional) */}
            <div className="text-center mt-6">
              <div className="flex items-center justify-center space-x-2 text-earth-500">
                <div className="w-2 h-2 rounded-full bg-amber-300 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-orange-300 animate-pulse delay-300"></div>
                <div className="w-2 h-2 rounded-full bg-amber-300 animate-pulse delay-700"></div>
              </div>
              <p className="text-xs text-earth-500 mt-2 italic">Em breve, novos caminhos por aqui.</p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8">
          <div className="flex items-center justify-center mb-2">
            <SpiralIcon className="w-4 h-4 text-amber-600 mr-2" />
            <p className="text-earth-600 text-sm font-medium">Transformação através da vibração consciente</p>
          </div>
          <p className="text-earth-500 text-xs">© 2025 {PROFILE_CONFIG.name}. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  )
}
