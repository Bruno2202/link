import { ChevronDown } from 'lucide-react'
import Button from '../ui/Button'
import { scrollTo } from '../../utils/scroll'

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black noise">
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: 'linear-gradient(#F5F5F0 1px, transparent 1px), linear-gradient(90deg, #F5F5F0 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }}
            />

            <div className="absolute top-0 left-0 w-1 h-full bg-red" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16">
                <div className="flex items-center gap-3 mb-8 animate-fade-up" style={{ animationFillMode: 'both' }}>
                    <div className="w-8 h-px bg-red" />
                    <span className="font-mono text-xs tracking-[0.3em] text-white/50 uppercase">1ª IPI de Assis — Est. 2021</span>
                </div>

                <div className="w-full sm:w-2/3">
                    <img src='/assets/logos/link_branco.svg' />
                </div>

                <p className="font-body text-lg md:text-2xl text-white/60 max-w-xl leading-relaxed mt-8 animate-fade-up animate-delay-200" style={{ animationFillMode: 'both' }}>
                    Jesus é o centro. A Palavra é eterna. <br />
                    <span className="text-white">Mas a forma como comunicamos essa verdade precisa acompanhar o tempo.</span>
                </p>

                <div className="flex flex-wrap gap-4 mt-10 animate-fade-up animate-delay-300" style={{ animationFillMode: 'both' }}>
                    <Button
                        className='hover:-translate-y-0.5'
                        onClick={() => scrollTo('checkin')}
                    >
                        FAZER CHECK-IN
                    </Button>

                    <Button
                        onClick={() => scrollTo('eventos')}
                        variant='outline'
                    >
                        VER ENCONTROS
                    </Button>
                </div>
            </div>

            <button
                onClick={() => scrollTo('eventos')}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce"
            >
                <ChevronDown size={28} className='cursor-pointer text-white/30'/>
            </button>
        </section>
    )
}