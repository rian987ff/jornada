"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Sparkles, Brain, Heart, Eye, Zap, Dna } from "lucide-react"

// Componente de Rede Neural Minimalista
function MinimalistNeuralNetwork() {
  return (
    <>
      {/* Versão Mobile */}
      <div className="absolute inset-0 overflow-hidden opacity-40 md:hidden">
        <svg className="w-full h-full" viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Gradientes para os nós */}
            <radialGradient id="nodeGradientMobile" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#f59e0b" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#d97706" stopOpacity="0.1" />
            </radialGradient>

            {/* Gradiente para as conexões */}
            <linearGradient id="connectionGradientMobile" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#d97706" stopOpacity="0.6" />
            </linearGradient>

            {/* Filtro de brilho */}
            <filter id="glowMobile" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Nós principais - disposição simétrica */}
          <circle cx="200" cy="100" r="3" fill="url(#nodeGradientMobile)" filter="url(#glowMobile)">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite" />
          </circle>

          <circle cx="120" cy="180" r="2.5" fill="url(#nodeGradientMobile)" filter="url(#glowMobile)">
            <animate attributeName="opacity" values="0.4;0.9;0.4" dur="3.5s" repeatCount="indefinite" begin="0.5s" />
          </circle>

          <circle cx="280" cy="180" r="2.5" fill="url(#nodeGradientMobile)" filter="url(#glowMobile)">
            <animate attributeName="opacity" values="0.4;0.9;0.4" dur="3.5s" repeatCount="indefinite" begin="1s" />
          </circle>

          <circle cx="80" cy="280" r="2" fill="url(#nodeGradientMobile)" filter="url(#glowMobile)">
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="4.5s" repeatCount="indefinite" begin="1.5s" />
          </circle>

          <circle cx="200" cy="300" r="3" fill="url(#nodeGradientMobile)" filter="url(#glowMobile)">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" begin="2s" />
          </circle>

          <circle cx="320" cy="280" r="2" fill="url(#nodeGradientMobile)" filter="url(#glowMobile)">
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="4.5s" repeatCount="indefinite" begin="2.5s" />
          </circle>

          <circle cx="150" cy="420" r="2.5" fill="url(#nodeGradientMobile)" filter="url(#glowMobile)">
            <animate attributeName="opacity" values="0.4;0.9;0.4" dur="3.8s" repeatCount="indefinite" begin="3s" />
          </circle>

          <circle cx="250" cy="420" r="2.5" fill="url(#nodeGradientMobile)" filter="url(#glowMobile)">
            <animate attributeName="opacity" values="0.4;0.9;0.4" dur="3.8s" repeatCount="indefinite" begin="0.8s" />
          </circle>

          <circle cx="200" cy="520" r="2" fill="url(#nodeGradientMobile)" filter="url(#glowMobile)">
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="4.2s" repeatCount="indefinite" begin="1.2s" />
          </circle>

          {/* Conexões curvas e fluidas */}
          <path
            d="M200,100 Q160,140 120,180"
            stroke="url(#connectionGradientMobile)"
            strokeWidth="1"
            fill="none"
            opacity="0.5"
          >
            <animate attributeName="opacity" values="0.2;0.7;0.2" dur="5s" repeatCount="indefinite" />
          </path>

          <path
            d="M200,100 Q240,140 280,180"
            stroke="url(#connectionGradientMobile)"
            strokeWidth="1"
            fill="none"
            opacity="0.5"
          >
            <animate attributeName="opacity" values="0.2;0.7;0.2" dur="5s" repeatCount="indefinite" begin="1s" />
          </path>

          <path
            d="M120,180 Q100,230 80,280"
            stroke="url(#connectionGradientMobile)"
            strokeWidth="1"
            fill="none"
            opacity="0.5"
          >
            <animate attributeName="opacity" values="0.2;0.7;0.2" dur="4.5s" repeatCount="indefinite" begin="0.5s" />
          </path>

          <path
            d="M120,180 Q160,240 200,300"
            stroke="url(#connectionGradientMobile)"
            strokeWidth="1"
            fill="none"
            opacity="0.5"
          >
            <animate attributeName="opacity" values="0.2;0.7;0.2" dur="4s" repeatCount="indefinite" begin="1.5s" />
          </path>

          <path
            d="M280,180 Q300,230 320,280"
            stroke="url(#connectionGradientMobile)"
            strokeWidth="1"
            fill="none"
            opacity="0.5"
          >
            <animate attributeName="opacity" values="0.2;0.7;0.2" dur="4.5s" repeatCount="indefinite" begin="2s" />
          </path>

          <path
            d="M280,180 Q240,240 200,300"
            stroke="url(#connectionGradientMobile)"
            strokeWidth="1"
            fill="none"
            opacity="0.5"
          >
            <animate attributeName="opacity" values="0.2;0.7;0.2" dur="4s" repeatCount="indefinite" begin="2.5s" />
          </path>

          <path
            d="M200,300 Q175,360 150,420"
            stroke="url(#connectionGradientMobile)"
            strokeWidth="1"
            fill="none"
            opacity="0.5"
          >
            <animate attributeName="opacity" values="0.2;0.7;0.2" dur="3.5s" repeatCount="indefinite" begin="1s" />
          </path>

          <path
            d="M200,300 Q225,360 250,420"
            stroke="url(#connectionGradientMobile)"
            strokeWidth="1"
            fill="none"
            opacity="0.5"
          >
            <animate attributeName="opacity" values="0.2;0.7;0.2" dur="3.5s" repeatCount="indefinite" begin="1.8s" />
          </path>

          <path
            d="M150,420 Q175,470 200,520"
            stroke="url(#connectionGradientMobile)"
            strokeWidth="1"
            fill="none"
            opacity="0.5"
          >
            <animate attributeName="opacity" values="0.2;0.7;0.2" dur="4.2s" repeatCount="indefinite" begin="0.3s" />
          </path>

          <path
            d="M250,420 Q225,470 200,520"
            stroke="url(#connectionGradientMobile)"
            strokeWidth="1"
            fill="none"
            opacity="0.5"
          >
            <animate attributeName="opacity" values="0.2;0.7;0.2" dur="4.2s" repeatCount="indefinite" begin="2.3s" />
          </path>

          {/* Impulsos de energia fluindo */}
          <circle r="1.5" fill="#fbbf24" opacity="0.8">
            <animateMotion dur="8s" repeatCount="indefinite">
              <path d="M200,100 Q160,140 120,180 Q100,230 80,280" />
            </animateMotion>
            <animate attributeName="opacity" values="0;0.8;0" dur="8s" repeatCount="indefinite" />
          </circle>

          <circle r="1.5" fill="#f59e0b" opacity="0.8">
            <animateMotion dur="7s" repeatCount="indefinite" begin="2s">
              <path d="M200,100 Q240,140 280,180 Q240,240 200,300 Q175,360 150,420 Q175,470 200,520" />
            </animateMotion>
            <animate attributeName="opacity" values="0;0.8;0" dur="7s" repeatCount="indefinite" begin="2s" />
          </circle>

          {/* Ondas de expansão sutis */}
          <circle cx="200" cy="300" r="0" fill="none" stroke="#fbbf24" strokeWidth="0.5" opacity="0.3">
            <animate attributeName="r" values="0;60;120" dur="12s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0.1;0" dur="12s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      {/* Versão Desktop */}
      <div className="absolute inset-0 overflow-hidden opacity-35 hidden md:block">
        <svg className="w-full h-full" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Gradientes para os nós */}
            <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#d97706" stopOpacity="0.1" />
            </radialGradient>

            {/* Gradiente para as conexões */}
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#d97706" stopOpacity="0.7" />
            </linearGradient>

            {/* Filtro de brilho */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Constelação central */}
          <circle cx="600" cy="200" r="4" fill="url(#nodeGradient)" filter="url(#glow)">
            <animate attributeName="opacity" values="0.7;1;0.7" dur="5s" repeatCount="indefinite" />
          </circle>

          {/* Nós secundários - padrão simétrico */}
          <circle cx="400" cy="150" r="3" fill="url(#nodeGradient)" filter="url(#glow)">
            <animate attributeName="opacity" values="0.5;0.9;0.5" dur="4.5s" repeatCount="indefinite" begin="0.5s" />
          </circle>

          <circle cx="800" cy="150" r="3" fill="url(#nodeGradient)" filter="url(#glow)">
            <animate attributeName="opacity" values="0.5;0.9;0.5" dur="4.5s" repeatCount="indefinite" begin="1s" />
          </circle>

          <circle cx="300" cy="300" r="2.5" fill="url(#nodeGradient)" filter="url(#glow)">
            <animate attributeName="opacity" values="0.4;0.8;0.4" dur="6s" repeatCount="indefinite" begin="1.5s" />
          </circle>

          <circle cx="600" cy="400" r="4" fill="url(#nodeGradient)" filter="url(#glow)">
            <animate attributeName="opacity" values="0.7;1;0.7" dur="4s" repeatCount="indefinite" begin="2s" />
          </circle>

          <circle cx="900" cy="300" r="2.5" fill="url(#nodeGradient)" filter="url(#glow)">
            <animate attributeName="opacity" values="0.4;0.8;0.4" dur="6s" repeatCount="indefinite" begin="2.5s" />
          </circle>

          <circle cx="200" cy="500" r="3" fill="url(#nodeGradient)" filter="url(#glow)">
            <animate attributeName="opacity" values="0.5;0.9;0.5" dur="5.5s" repeatCount="indefinite" begin="3s" />
          </circle>

          <circle cx="500" cy="600" r="2.5" fill="url(#nodeGradient)" filter="url(#glow)">
            <animate attributeName="opacity" values="0.4;0.8;0.4" dur="4.8s" repeatCount="indefinite" begin="0.8s" />
          </circle>

          <circle cx="700" cy="600" r="2.5" fill="url(#nodeGradient)" filter="url(#glow)">
            <animate attributeName="opacity" values="0.4;0.8;0.4" dur="4.8s" repeatCount="indefinite" begin="1.3s" />
          </circle>

          <circle cx="1000" cy="500" r="3" fill="url(#nodeGradient)" filter="url(#glow)">
            <animate attributeName="opacity" values="0.5;0.9;0.5" dur="5.5s" repeatCount="indefinite" begin="1.8s" />
          </circle>

          {/* Conexões fluidas e orgânicas */}
          <path
            d="M600,200 Q500,175 400,150"
            stroke="url(#connectionGradient)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          >
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="6s" repeatCount="indefinite" />
          </path>

          <path
            d="M600,200 Q700,175 800,150"
            stroke="url(#connectionGradient)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          >
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="6s" repeatCount="indefinite" begin="1s" />
          </path>

          <path
            d="M400,150 Q350,225 300,300"
            stroke="url(#connectionGradient)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          >
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="5.5s" repeatCount="indefinite" begin="0.5s" />
          </path>

          <path
            d="M600,200 Q600,300 600,400"
            stroke="url(#connectionGradient)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          >
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="5s" repeatCount="indefinite" begin="1.5s" />
          </path>

          <path
            d="M800,150 Q850,225 900,300"
            stroke="url(#connectionGradient)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          >
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="5.5s" repeatCount="indefinite" begin="2s" />
          </path>

          <path
            d="M300,300 Q250,400 200,500"
            stroke="url(#connectionGradient)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          >
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="6.5s" repeatCount="indefinite" begin="2.5s" />
          </path>

          <path
            d="M600,400 Q550,500 500,600"
            stroke="url(#connectionGradient)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          >
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="5.8s" repeatCount="indefinite" begin="1s" />
          </path>

          <path
            d="M600,400 Q650,500 700,600"
            stroke="url(#connectionGradient)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          >
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="5.8s" repeatCount="indefinite" begin="1.8s" />
          </path>

          <path
            d="M900,300 Q950,400 1000,500"
            stroke="url(#connectionGradient)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          >
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="6.5s" repeatCount="indefinite" begin="0.3s" />
          </path>

          {/* Conexões transversais para criar rede */}
          <path
            d="M400,150 Q500,275 600,400"
            stroke="url(#connectionGradient)"
            strokeWidth="1"
            fill="none"
            opacity="0.4"
          >
            <animate attributeName="opacity" values="0.2;0.6;0.2" dur="8s" repeatCount="indefinite" begin="3s" />
          </path>

          <path
            d="M800,150 Q700,275 600,400"
            stroke="url(#connectionGradient)"
            strokeWidth="1"
            fill="none"
            opacity="0.4"
          >
            <animate attributeName="opacity" values="0.2;0.6;0.2" dur="8s" repeatCount="indefinite" begin="3.5s" />
          </path>

          <path
            d="M300,300 Q450,450 600,400"
            stroke="url(#connectionGradient)"
            strokeWidth="1"
            fill="none"
            opacity="0.4"
          >
            <animate attributeName="opacity" values="0.2;0.6;0.2" dur="7.5s" repeatCount="indefinite" begin="2.8s" />
          </path>

          <path
            d="M900,300 Q750,450 600,400"
            stroke="url(#connectionGradient)"
            strokeWidth="1"
            fill="none"
            opacity="0.4"
          >
            <animate attributeName="opacity" values="0.2;0.6;0.2" dur="7.5s" repeatCount="indefinite" begin="4s" />
          </path>

          {/* Impulsos de energia - constelações digitais */}
          <circle r="2" fill="#fbbf24" opacity="0.9">
            <animateMotion dur="12s" repeatCount="indefinite">
              <path d="M600,200 Q500,175 400,150 Q350,225 300,300 Q250,400 200,500" />
            </animateMotion>
            <animate attributeName="opacity" values="0;0.9;0" dur="12s" repeatCount="indefinite" />
          </circle>

          <circle r="2" fill="#f59e0b" opacity="0.9">
            <animateMotion dur="10s" repeatCount="indefinite" begin="3s">
              <path d="M600,200 Q700,175 800,150 Q850,225 900,300 Q950,400 1000,500" />
            </animateMotion>
            <animate attributeName="opacity" values="0;0.9;0" dur="10s" repeatCount="indefinite" begin="3s" />
          </circle>

          <circle r="2" fill="#d97706" opacity="0.9">
            <animateMotion dur="14s" repeatCount="indefinite" begin="6s">
              <path d="M600,200 Q600,300 600,400 Q550,500 500,600" />
            </animateMotion>
            <animate attributeName="opacity" values="0;0.9;0" dur="14s" repeatCount="indefinite" begin="6s" />
          </circle>

          {/* Ondas de expansão - como respiração cósmica */}
          <circle cx="600" cy="300" r="0" fill="none" stroke="#fbbf24" strokeWidth="1" opacity="0.3">
            <animate attributeName="r" values="0;150;300" dur="20s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0.1;0" dur="20s" repeatCount="indefinite" />
          </circle>

          <circle cx="400" cy="400" r="0" fill="none" stroke="#f59e0b" strokeWidth="0.8" opacity="0.3">
            <animate attributeName="r" values="0;100;200" dur="16s" repeatCount="indefinite" begin="5s" />
            <animate attributeName="opacity" values="0.4;0.1;0" dur="16s" repeatCount="indefinite" begin="5s" />
          </circle>

          <circle cx="800" cy="400" r="0" fill="none" stroke="#d97706" strokeWidth="0.8" opacity="0.3">
            <animate attributeName="r" values="0;120;240" dur="18s" repeatCount="indefinite" begin="10s" />
            <animate attributeName="opacity" values="0.4;0.1;0" dur="18s" repeatCount="indefinite" begin="10s" />
          </circle>
        </svg>
      </div>
    </>
  )
}

// Componente de Espiral
function SpiralIcon({ className = "w-16 h-16" }: { className?: string }) {
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

export default function JornadaMantrasLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-warm-50 to-sand-100">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-br from-warm-50 via-sand-50 to-amber-50 min-h-screen flex items-center">
        <MinimalistNeuralNetwork />

        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-earth-900 mb-4 sm:mb-6 leading-tight px-2">
              Jornada de <span className="text-amber-700">Autoconhecimento</span>
              <p>Mantras de ativação</p>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-earth-700 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              Transforme sua vida com palavras que libertam, curam e ativam. 
            </p>

            <div className="mb-8 sm:mb-12 px-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                onClick={() => {
                  const section = document.getElementById('como-funciona');
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Quero começar minha jornada
              </Button>
            </div>

            <div className="flex justify-center"></div>
          </div>
        </div>
      </header>

      {/* Sobre a Jornada */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-4 sm:space-y-6 order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-earth-900 mb-4 sm:mb-6">
                Uma jornada de <span className="text-amber-700">transformação interior</span>
              </h2>

              <p className="text-base sm:text-lg text-earth-700 leading-relaxed">
                Através da repetição consciente de mantras canalizados, você criará novas redes neuronais que substituem
                padrões limitantes por frequências de expansão e clareza.
              </p>

              <p className="text-base sm:text-lg text-earth-700 leading-relaxed">
                Esta não é apenas uma prática espiritual, mas uma tecnologia vibracional de ativação das programações originais baseada na repetição das palavras e na neuroplasticidade do cérebro.
              </p>

              <div className="flex items-center space-x-3 text-amber-700">
                <SpiralIcon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <span className="font-medium text-sm sm:text-base">
                  Prática sem dogmas religiosos.
                </span>
              </div>
            </div>

            <div className="flex justify-center order-1 md:order-2">
              <div className="relative">
                <div className="w-60 h-60 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                  <div className="w-44 h-44 sm:w-60 sm:h-60 rounded-full bg-gradient-to-br from-amber-200 to-orange-200 flex items-center justify-center">
                    <div className="w-28 h-28 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-amber-300 to-orange-300 flex items-center justify-center">
                      <Dna className="w-12 h-12 sm:w-16 sm:h-16 text-amber-800" />
                    </div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-amber-400 animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-orange-400 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que você vai ativar */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-sand-50 to-warm-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-earth-900 mb-4 sm:mb-6">
              O que você vai <span className="text-amber-700">ativar</span>
            </h2>
            <p className="text-base sm:text-lg text-earth-700 max-w-2xl mx-auto px-4">
              Cada mantra foi canalizado para despertar aspectos específicos da sua consciência
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Liberação de padrões inconscientes",
                description: "Dissolva crenças limitantes que operam no piloto automático",
              },
              {
                icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Reconexão com sua vibração original",
                description: "Retorne à sua essência autêntica, livre de condicionamentos",
              },
              {
                icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Criação de redes neuronais conscientes",
                description: "Forme novos caminhos mentais alinhados com seus objetivos",
              },
              {
                icon: <Eye className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Clareza interna e expansão de percepção",
                description: "Desenvolva uma visão mais ampla de si mesmo e da realidade",
              },
              {
                icon: <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Potencial criativo mais ativo",
                description: "Desperte sua capacidade de criar e manifestar conscientemente",
              },
              {
                icon: <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Autonomia emocional e energética",
                description: "Torne-se o regente da sua própria experiência interna",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center mx-auto mb-4 sm:mb-6 text-amber-700">
                    {item.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-earth-900 mb-3 sm:mb-4">{item.title}</h3>
                  <p className="text-sm sm:text-base text-earth-700 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-earth-900 mb-4 sm:mb-6">
              Como <span className="text-amber-700">funciona</span>
            </h2>
            <p className="text-base sm:text-lg text-earth-700 max-w-2xl mx-auto px-4">
              Um processo completo de 6 semanas para reprogramação profunda e energética.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 sm:space-y-8">
              {[
                {
                  step: "1",
                  title: "Ritual de Abertura",
                  description: "Preparação energética e mental para receber as novas frequências",
                },
                {
                  step: "2",
                  title: "Mantras Canalizados",
                  description: "Frases vibracionais para liberar padrões e ativar potenciais",
                },
                {
                  step: "3",
                  title: "Meditações de Ativação",
                  description: "Práticas guiadas para integrar os mantras no seu sistema",
                },
                {
                  step: "4",
                  title: "Encontros com Asha",
                  description: "Acompanhamento ao vivo para aprofundamento e orientação",
                },
                {
                  step: "5",
                  title: "Práticas de liberação",
                  description: "Exercícios para soltar padrões ancestrais e bloqueios emocionais",
                },
                {
                  step: "6",
                  title: "Para aprofundar sua experiência",
                  description: "Como integrar as práticas no dia a dia e nas relações",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 sm:space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold text-base sm:text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-earth-900 mb-2">{item.title}</h3>
                    <p className="text-sm sm:text-base text-earth-700 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-sand-50 to-warm-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-earth-900 mb-4 sm:mb-6">
              Transformações <span className="text-amber-700">reais</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                nome: "Juliana Camacho",
                inicial: "J",
                depoimento: "Recomendo com a alegria de quem pode sentir em sua própria existência a diferença que essa poderosa ferramenta faz em nossas vidas."
              },
              {
                nome: "Catiana Squinalli",
                inicial: "C",
                depoimento: "A jornada dos mantras me trouxe clareza e paz interior. Senti mudanças profundas já nas primeiras semanas."
              },
              {
                nome: "Ana Paula Souza",
                inicial: "A",
                depoimento: "Nunca imaginei que palavras pudessem transformar tanto. Hoje me sinto mais leve, confiante e conectada comigo mesma."
              }
            ].map((item, idx) => (
              <Card key={idx} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-amber-200 to-orange-200 flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                      <span className="text-amber-800 font-bold text-sm sm:text-base">{item.inicial}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-earth-900 text-sm sm:text-base">{item.nome}</p>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-earth-700 italic leading-relaxed">
                    "{item.depoimento}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investimento */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-earth-900 mb-6 sm:mb-8">
              Seu <span className="text-amber-700">investimento</span> na transformação
            </h2>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl border border-amber-100">
              <div className="mb-6 sm:mb-8">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-amber-700 mb-2">R$ 360</div>
                <p className="text-earth-600 text-sm sm:text-base">A jornada é sua, para sempre.</p>
              </div>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-left max-w-md mx-auto">
                {[
                  "6 Encontros semanais com Asha",
                  "9 meditações guiadas de ativação",
                  "12 Mantras canalizados ",
                  "Rituais de abertura e encerramento",
                  "Práticas de ativação e liberação",
                  "Grupo para trocas, apoio e integração",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 flex-shrink-0" />
                    <span className="text-earth-700 text-sm sm:text-base">{benefit}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/5547997554304?text=Oi%2C+Asha.+Estou+pronto(a)+para+iniciar+a+Jornada+dos+Mantras.+Como+confirmo+minha+inscri%C3%A7%C3%A3o%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 sm:px-12 py-3 sm:py-4 text-lg sm:text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                >
                  Quero começar minha jornada
                </Button>
              </a>

              <p className="text-xs sm:text-sm text-earth-600 mt-4">
                Acesso liberado imediatamente após a confirmação da inscrição.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quem é a Expert */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-sand-50 to-warm-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-earth-900 mb-4 sm:mb-6">
                Quem é a <span className="text-amber-700">Asha</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="flex justify-center order-1 md:order-1">
                <div className="relative">
                  <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-2xl">
                    <img
                      src="/foto-LP.webp?height=320&width=320"
                      alt="Expert em Mantras e Transformação Consciente"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center shadow-lg">
                    <SpiralIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6 order-2 md:order-2">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-earth-900 mb-2">Asha - Juliana Alves F. S.M. Salgado</h3>
                  <p className="text-amber-700 font-medium text-sm sm:text-base mb-4">
                    Terapeuta integrativa, Guardiã de medicinas ancestrais e canalizadora da Cosmogenia — filosofia de vida, método terapêutico e caminho iniciático.
                  </p>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-earth-700 leading-relaxed">
                  <p>
                    Há mais de 20 anos dedicada ao estudo da consciência humana e das tecnologias ancestrais de cura através de plantas enteógenas.
                  </p>

                  <p>
                    É Practitioner em PNL, Mestre em Reiki, iniciada em diferentes escolas e tradições como Tao, Deeksha, Tantra Ananda Marga e filosofia Vaishnava. Facilita processos profundos de jejum, como a prática espiritual do “Viver de Luz”.
                  </p>

                  <p>
                    Desenvolveu o método exclusivo de cura vibracional em recolhimento meditativo, pesquisas, viagens e canalizações ao longo de 7 anos.
                  </p>

                  <p>
                    Combina ciência moderna com sabedoria ancestral, criando pontes entre o conhecimento neurocientífico e as práticas espirituais milenares para facilitar mudanças profundas e efetivas.
                  </p>
                </div>

                <div className="flex items-center space-x-4 pt-4">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                    <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                    <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                  </div>
                  <span className="text-earth-600 text-sm italic">
                    "A transformação acontece quando despertamos para quem somos."
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-sand-50 to-warm-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-earth-900 mb-4 sm:mb-6">
              Dúvidas <span className="text-amber-700">frequentes</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg shadow-sm border-0">
                <AccordionTrigger className="px-4 sm:px-6 py-3 sm:py-4 text-left text-earth-900 hover:text-amber-700 text-sm sm:text-base">
                  Preciso saber meditar para participar?
                </AccordionTrigger>
                <AccordionContent className="px-4 sm:px-6 pb-3 sm:pb-4 text-earth-700 text-sm sm:text-base">
                  Não. As práticas são guiadas passo a passo, com instruções simples. Você será conduzida com suavidade, mesmo que nunca tenha meditado antes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg shadow-sm border-0">
                <AccordionTrigger className="px-4 sm:px-6 py-3 sm:py-4 text-left text-earth-900 hover:text-amber-700 text-sm sm:text-base">
                  Essa jornada substitui terapia ou tratamento médico?
                </AccordionTrigger>
                <AccordionContent className="px-4 sm:px-6 pb-3 sm:pb-4 text-earth-700 text-sm sm:text-base">
                  Não. A proposta é complementar, não substitutiva. A Jornada dos Mantras atua em camadas sutis de percepção e vibração, mas não substitui nenhum acompanhamento médico ou terapêutico.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg shadow-sm border-0">
                <AccordionTrigger className="px-4 sm:px-6 py-3 sm:py-4 text-left text-earth-900 hover:text-amber-700 text-sm sm:text-base">
                  Quanto tempo por dia devo dedicar?
                </AccordionTrigger>
                <AccordionContent className="px-4 sm:px-6 pb-3 sm:pb-4 text-earth-700 text-sm sm:text-base">
                  Recomenda-se de 15 a 30 minutos por dia, de forma leve e flexível. O mais importante é a constância e a entrega, não a perfeição.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg shadow-sm border-0">
                <AccordionTrigger className="px-4 sm:px-6 py-3 sm:py-4 text-left text-earth-900 hover:text-amber-700 text-sm sm:text-base">
                  Como recebo o conteúdo?
                </AccordionTrigger>
                <AccordionContent className="px-4 sm:px-6 pb-3 sm:pb-4 text-earth-700 text-sm sm:text-base">
                  Após o fechamento da turma, entraremos em contato com você diretamente pelo WhatsApp. Você será adicionada ao grupo de caminhantes, onde receberá todos os conteúdos da jornada — áudios, meditações, orientações e os convites para os encontros ao vivo.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 bg-earth-900 text-earth-100">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mb-6 sm:mb-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <SpiralIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif text-white mb-2">Mantras de Ativação</h3>
              <p className="text-earth-300 text-sm sm:text-base">Transformação através da vibração consciente</p>
            </div>

            {/* <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-8 mb-6 sm:mb-8 text-xs sm:text-sm">
              <a href="#" className="text-earth-300 hover:text-amber-400 transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-earth-300 hover:text-amber-400 transition-colors">
                Privacidade
              </a>
              <a href="#" className="text-earth-300 hover:text-amber-400 transition-colors">
                Contato
              </a>
            </div> */}

            <div className="text-earth-400 text-xs sm:text-sm">
              <p className="mb-2">Suporte: contato@cosmogenia.org</p>
              <p>&copy; 2024 Cosmogenia Institute. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
