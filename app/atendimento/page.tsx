"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Leaf, Sparkles, Brain, Heart, Zap, Waves, Activity } from "lucide-react"

// Componente de Ondas Vibracionais (Estética de Frequência/Geometria Sagrada - Versão Dark Earth)
function VibrationalWaves() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg className="w-full h-full opacity-40 md:opacity-40" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <radialGradient id="waveGradientDark" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.1" />
                        <stop offset="60%" stopColor="#d97706" stopOpacity="0.05" />
                        <stop offset="100%" stopColor="#78350f" stopOpacity="0" />
                    </radialGradient>
                </defs>

                {/* Fundo Atmosférico */}
                <circle cx="50" cy="50" r="45" fill="url(#waveGradientDark)" opacity="0.6">
                    <animate attributeName="opacity" values="0.4;0.7;0.4" dur="8s" repeatCount="indefinite" />
                </circle>

                {/* Ondas Centrais - Pulsação Lenta Dourada */}
                <circle cx="50" cy="50" r="20" fill="none" stroke="#fbbf24" strokeWidth="0.2" opacity="0.3">
                    <animate attributeName="r" values="18;22;18" dur="12s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
                    <animate attributeName="opacity" values="0.2;0.5;0.2" dur="12s" repeatCount="indefinite" />
                </circle>

                {/* Ondas Expansivas (Linhas Finas Douradas) */}
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <circle key={i} cx="50" cy="50" r={10 * i} fill="none" stroke="#fbbf24" strokeWidth="0.05" opacity="0.2">
                        <animate attributeName="r" values={`${8 * i};${8 * i + 4};${8 * i}`} dur={`${12 + i * 2}s`} repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
                        <animate attributeName="opacity" values="0.1;0.3;0.1" dur={`${12 + i * 2}s`} repeatCount="indefinite" />
                        <animateTransform attributeName="transform" type="rotate" from={`0 50 50`} to={`360 50 50`} dur={`${80 + i * 15}s`} repeatCount="indefinite" />
                    </circle>
                ))}

                {/* Partículas de Luz Dourada - Determinísticas */}
                {[...Array(20)].map((_, i) => (
                    <circle key={`p-${i}`} cx={(i * 13 + 7) % 100} cy={(i * 29 + 3) % 100} r={(i % 3) * 0.1 + 0.1} fill="#fbbf24" opacity="0.8">
                        <animate attributeName="cy" values={`${(i * 29 + 3) % 100};${((i * 29 + 3) % 100 + 15) % 100}`} dur={`${15 + i * 3}s`} repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0;0.9;0" dur={`${4 + (i % 4)}s`} repeatCount="indefinite" />
                    </circle>
                ))}
            </svg>
            <div className="absolute inset-0 bg-gradient-to-b from-earth-900/30 via-transparent to-earth-950/90"></div>
        </div>
    )
}

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
            <circle cx="50" cy="50" r="2" fill="currentColor" opacity="0.8">
                <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
            </circle>
        </svg>
    )
}

export default function AtendimentoPage() {
    const whatsappLink = "https://wa.me/5547997554304?text=Oi%2C+Asha.+Tenho+interesse+em+um+atendimento+individual+e+gostaria+de+entender+como+funciona."

    return (
        <div className="min-h-screen bg-earth-950 font-sans text-warm-50 selection:bg-amber-500/30">
            {/* Header Section - Dark Earth Theme */}
            <header className="relative overflow-hidden bg-earth-900 min-h-[90vh] flex items-center justify-center">
                <VibrationalWaves />

                <div className="container mx-auto px-4 py-12 relative z-10 flex flex-col items-center text-center">
                    <div className="mb-8 inline-block">
                        <span className="py-1.5 px-5 rounded-full bg-earth-800 text-amber-300 text-sm font-medium tracking-widest uppercase border border-earth-700 shadow-md backdrop-blur-sm">
                            Medicina Vibracional ✨ Om Raya
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-warm-50 mb-6 leading-tight max-w-5xl tracking-tight drop-shadow-sm">
                        Atendimento <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 italic pr-2 pb-1 inline-block">Individual</span>
                    </h1>

                    <p className="text-xl sm:text-2xl md:text-3xl text-warm-50 font-light mb-10 max-w-3xl leading-relaxed drop-shadow-sm">
                        Um encontro sagrado para reorganizar o seu campo e restaurar a coerência da alma.
                    </p>

                    {/* Linha removida conforme feedback */}

                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white px-10 py-7 text-lg rounded-full shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] transition-all duration-300 transform hover:scale-105 border border-amber-500/20"
                        onClick={() => {
                            const section = document.getElementById('sobre');
                            if (section) {
                                section.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        Conheça a Medicina Om Raya
                    </Button>
                </div>
            </header>

            {/* Introduction Section - Dark Earth */}
            <section id="sobre" className="py-20 md:py-28 bg-earth-950 relative overflow-hidden text-center">
                <div className="absolute top-0 right-0 w-96 h-96 bg-amber-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="w-16 h-16 text-amber-500/80 mx-auto mb-8 animate-pulse">
                            <SpiralIcon />
                        </div>

                        <p className="text-lg md:text-xl text-warm-50 leading-relaxed mb-8 font-light tracking-wide">
                            O atendimento individual com a frequência <span className="font-semibold text-amber-400">Om Raya</span> é um processo personalizado de alinhamento vibracional.
                        </p>

                        <p className="text-lg md:text-xl text-sand-50 leading-relaxed mb-12 font-light tracking-wide">
                            Através da atuação no campo energético, a frequência auxilia na desprogramação de padrões limitantes, na liberação de registros ancestrais e na ativação dos códigos de origem.
                        </p>

                        <div className="p-10 bg-earth-900/80 rounded-3xl border border-earth-700/50 mt-12 shadow-lg backdrop-blur-md relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-900/10 to-transparent opacity-60"></div>
                            <p className="text-xl md:text-2xl text-amber-50 font-serif italic relative z-10 font-medium">
                                "Cada sessão é única, conduzida de acordo com o momento e a necessidade do seu sistema — físico, emocional, mental e espiritual."
                            </p>
                        </div>

                        <p className="text-lg md:text-xl text-sand-50 leading-relaxed mt-16 font-medium">
                            Não é apenas uma experiência energética. <br />
                            <span className="text-amber-200">É um espaço de reconexão profunda com a sua essência e com o seu propósito.</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits Grid Section - Dark Earth */}
            <section className="py-20 md:py-28 bg-earth-900 relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent opacity-40"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-warm-50 mb-6">
                            Como a <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-300">Om Raya</span> pode auxiliar
                        </h2>
                        <p className="text-lg text-sand-100 max-w-2xl mx-auto font-light leading-relaxed">
                            Atuando em múltiplos níveis do seu ser para trazer integração e harmonia.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Campo Emocional */}
                        <Card className="border border-earth-700/40 shadow-xl bg-earth-800/40 backdrop-blur-md overflow-hidden hover:bg-earth-800/60 transition-all duration-300 group">
                            <div className="h-1 bg-gradient-to-r from-red-400/50 to-pink-400/50 w-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                            <CardContent className="p-8">
                                <div className="flex items-center mb-6">
                                    <div className="p-3 bg-earth-950 rounded-full mr-4 text-red-400 border border-earth-800 shadow-inner group-hover:bg-red-950/30 transition-colors">
                                        <Heart size={24} />
                                    </div>
                                    <h3 className="text-2xl font-serif text-warm-50 group-hover:text-red-200 transition-colors">No campo emocional</h3>
                                </div>
                                <ul className="space-y-4">
                                    {[
                                        "Liberação de padrões repetitivos",
                                        "Redução de ansiedade e sobrecarga interna",
                                        "Maior clareza nas relações",
                                        "Resgate da autoestima e do autovalor"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-red-400/80 mr-3 flex-shrink-0 mt-0.5" />
                                            <span className="text-sand-50 text-lg font-light leading-snug">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Campo Mental */}
                        <Card className="border border-earth-700/40 shadow-xl bg-earth-800/40 backdrop-blur-md overflow-hidden hover:bg-earth-800/60 transition-all duration-300 group">
                            <div className="h-1 bg-gradient-to-r from-blue-400/50 to-indigo-400/50 w-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                            <CardContent className="p-8">
                                <div className="flex items-center mb-6">
                                    <div className="p-3 bg-earth-950 rounded-full mr-4 text-blue-400 border border-earth-800 shadow-inner group-hover:bg-blue-950/30 transition-colors">
                                        <Brain size={24} />
                                    </div>
                                    <h3 className="text-2xl font-serif text-warm-50 group-hover:text-blue-200 transition-colors">No campo mental</h3>
                                </div>
                                <ul className="space-y-4">
                                    {[
                                        "Organização dos pensamentos",
                                        "Aumento da clareza nas decisões",
                                        "Expansão da percepção",
                                        "Redução de conflitos internos"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-blue-400/80 mr-3 flex-shrink-0 mt-0.5" />
                                            <span className="text-sand-50 text-lg font-light leading-snug">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Campo Energético */}
                        <Card className="border border-earth-700/40 shadow-xl bg-earth-800/40 backdrop-blur-md overflow-hidden hover:bg-earth-800/60 transition-all duration-300 group">
                            <div className="h-1 bg-gradient-to-r from-amber-400/50 to-yellow-400/50 w-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                            <CardContent className="p-8">
                                <div className="flex items-center mb-6">
                                    <div className="p-3 bg-earth-950 rounded-full mr-4 text-amber-400 border border-earth-800 shadow-inner group-hover:bg-amber-950/30 transition-colors">
                                        <Zap size={24} />
                                    </div>
                                    <h3 className="text-2xl font-serif text-warm-50 group-hover:text-amber-200 transition-colors">No campo energético</h3>
                                </div>
                                <ul className="space-y-4">
                                    {[
                                        "Reorganização do campo vibracional",
                                        "Integração de fragmentos do ser",
                                        "Ativação de códigos de origem",
                                        "Alinhamento com o propósito"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-amber-500/80 mr-3 flex-shrink-0 mt-0.5" />
                                            <span className="text-sand-50 text-lg font-light leading-snug">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Campo Físico */}
                        <Card className="border border-earth-700/40 shadow-xl bg-earth-800/40 backdrop-blur-md overflow-hidden hover:bg-earth-800/60 transition-all duration-300 group">
                            <div className="h-1 bg-gradient-to-r from-green-400/50 to-emerald-400/50 w-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                            <CardContent className="p-8">
                                <div className="flex items-center mb-6">
                                    <div className="p-3 bg-earth-950 rounded-full mr-4 text-green-400 border border-earth-800 shadow-inner group-hover:bg-green-950/30 transition-colors">
                                        <Activity size={24} />
                                    </div>
                                    <h3 className="text-2xl font-serif text-warm-50 group-hover:text-green-200 transition-colors">No campo físico</h3>
                                </div>
                                <ul className="space-y-4">
                                    {[
                                        "Apoio integrativo aos processos de saúde",
                                        "Sensação de vitalidade e leveza",
                                        "Melhora da conexão corpo-consciência"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-green-500/80 mr-3 flex-shrink-0 mt-0.5" />
                                            <span className="text-sand-50 text-lg font-light leading-snug">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Indication Section - Dark Earth */}
            <section className="py-20 md:py-28 bg-earth-950">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-earth-900/60 rounded-3xl p-8 md:p-16 border border-earth-800 shadow-xl backdrop-blur-md">
                        <h2 className="text-3xl md:text-4xl font-serif text-warm-50 mb-12 text-center">
                            Indicado para quem
                        </h2>

                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                            {[
                                "Sente que está repetindo padrões",
                                "Vive momentos de transição",
                                "Busca autoconhecimento profundo",
                                "Deseja clareza sobre propósito",
                                "Quer alinhar vida prática e consciência"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start group">
                                    <div className="mt-1 mr-4 p-1.5 rounded-full bg-earth-950 text-amber-500 border border-earth-800 group-hover:border-amber-500/50 group-hover:text-amber-400 transition-all shadow-md">
                                        <Leaf size={14} />
                                    </div>
                                    <span className="text-lg text-sand-50 group-hover:text-white transition-colors font-light tracking-wide">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section - Dark Earth */}
            <section className="py-24 md:py-32 bg-earth-900 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-30">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-900/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-900/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse delay-1000"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 max-w-4xl">
                    <Sparkles className="w-16 h-16 text-amber-400 mx-auto mb-8 animate-pulse opacity-90" />

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-warm-50 mb-10 leading-tight">
                        Se você sente que é tempo de reorganizar o campo e lembrar quem você é além das programações, <br className="hidden md:block" />
                        <span className="text-amber-400">o atendimento individual pode ser o próximo passo.</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-sand-50 font-light mb-16 italic">
                        Om Raya. Frequência que restaura, integra e desperta.
                    </p>

                    <div className="bg-earth-800/60 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-earth-700/60 shadow-2xl max-w-2xl mx-auto mb-16 transform hover:scale-[1.01] transition-transform duration-500 relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-10 rounded-3xl pointer-events-none"></div>

                        <h3 className="text-2xl font-serif text-sand-50 mb-6 tracking-wide">Investimento</h3>
                        <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-orange-200 mb-4 drop-shadow-sm">
                            R$ 1.080,00
                        </div>
                        <p className="text-sand-100 text-lg mb-10 font-medium bg-earth-900/50 inline-block px-5 py-2 rounded-full border border-earth-700/50">com 1 retorno</p>

                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white px-10 py-7 text-xl rounded-full shadow-[0_0_20px_rgba(251,191,36,0.2)] hover:shadow-[0_0_30px_rgba(251,191,36,0.4)] transition-all duration-300 w-full border border-amber-500/20"
                            >
                                Agendar minha sessão
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Quem é a Expert - Dark Earth */}
            <section className="py-16 sm:py-20 md:py-28 bg-earth-950 relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent opacity-30"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-warm-50 mb-4 sm:mb-6">
                                Quem é a <span className="text-amber-500">Asha</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-10 sm:gap-16 items-center">
                            <div className="flex justify-center order-1 md:order-1">
                                <div className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                                    <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-2xl border-2 border-earth-800">
                                        <img
                                            src="/foto-LP.webp?height=320&width=320"
                                            alt="Expert em Mantras e Transformação Consciente"
                                            className="w-full h-full object-cover filter brightness-90 hover:brightness-100 transition-all duration-500"
                                        />
                                    </div>
                                    <div className="absolute -bottom-4 -right-4 w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-earth-900 border border-earth-700 flex items-center justify-center shadow-xl">
                                        <SpiralIcon className="w-8 h-8 sm:w-10 sm:h-10 text-amber-500" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6 sm:space-y-8 order-2 md:order-2">
                                <div>
                                    <h3 className="text-2xl sm:text-3xl font-serif text-warm-100 mb-3">Asha - Juliana Alves F. S.M. Salgado</h3>
                                    <p className="text-amber-400 font-medium text-sm sm:text-base mb-4 bg-earth-900/80 px-3 py-1.5 rounded-lg inline-block border border-earth-800">
                                        Terapeuta integrativa, Guardiã de medicinas ancestrais e canalizadora da Cosmogenia
                                    </p>
                                </div>

                                <div className="space-y-5 text-sm sm:text-base text-sand-50 leading-relaxed font-light">
                                    <p>
                                        Há mais de 20 anos dedicada ao estudo da consciência humana e das tecnologias ancestrais de cura através de plantas enteógenas.
                                    </p>
                                    <p>
                                        É Practitioner em PNL, Mestre em Reiki, iniciada em diferentes escolas e tradições como Tao, Deeksha, Tantra Ananda Marga e filosofia Vaishnava.
                                    </p>
                                    <p>
                                        Desenvolveu o método exclusivo de cura vibracional em recolhimento meditativo, pesquisas, viagens e canalizações ao longo de 7 anos.
                                    </p>
                                </div>

                                <div className="flex items-center space-x-4 pt-6 border-t border-earth-800/50">
                                    <span className="text-sand-200 text-sm italic">
                                        "A transformação acontece quando despertamos para quem somos."
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer - Dark Earth */}
            <footer className="py-12 sm:py-16 bg-earth-950 text-earth-300 border-t border-earth-900">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <div className="mb-8">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-earth-800 to-earth-900 flex items-center justify-center mx-auto mb-6 shadow-lg border border-earth-800">
                                <SpiralIcon className="w-8 h-8 text-amber-600/80" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-serif text-sand-100 mb-2">Atendimento Individual</h3>
                            <p className="text-earth-500 text-sm sm:text-base tracking-wide uppercase">Medicina Vibracional Om Raya</p>
                        </div>

                        <div className="text-earth-600 text-xs sm:text-sm border-t border-earth-900 pt-8 mt-8 flex flex-col md:flex-row justify-center items-center gap-4">
                            <p>&copy; {new Date().getFullYear()} Cosmogenia Institute.</p>
                            <span className="hidden md:inline text-earth-800">•</span>
                            <p>Todos os direitos reservados.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
