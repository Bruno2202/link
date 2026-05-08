import TabBar from "../components/layout/TabBar";
import TopBar from "../components/layout/TopBar";

export function App() {
    return (
        <div className="flex flex-col min-h-screen bg-red">
            <TopBar />

            <div className="relative flex-1 bg-black px-4 pt-6 pb-24">
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "linear-gradient(#F5F5F0 1px, transparent 1px), linear-gradient(90deg, #F5F5F0 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />

                <div className="relative z-10 max-w-xl mx-auto flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <h1 className="font-display text-4xl sm:text-5xl text-white">
                            Boa noite, <span className="text-red">Bruno</span>
                        </h1>
                        <p className="font-body text-base text-white/60">
                            "Deus e o nosso refugio e fortaleza; socorro bem presente na angustia."
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                            <h2 className="font-display text-xl sm:text-5xl md:text-8xl text-white font-medium">
                                Próximo Encontro
                            </h2>
                            <button className="font-mono text-[10px] tracking-[0.3em] text-red uppercase hover:text-white transition-colors">
                                Ver todos
                            </button>
                        </div>

                        <div className="bg-gray border-2 border-gray-mid p-4">
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex flex-col gap-2">
                                    <h3 className="font-display text-lg sm:text-xl text-white">
                                        Encontro Semanal Link
                                    </h3>
                                    <p className="font-body text-xs text-white/60">
                                        1a IPI de Assis
                                    </p>
                                </div>

                                <div className="flex flex-col items-center justify-center bg-black border-2 border-gray-mid px-3 py-2">
                                    <span className="font-mono text-[10px] tracking-widest text-white/40 uppercase">Mai</span>
                                    <span className="font-display text-xl text-white">09</span>
                                </div>
                            </div>

                            <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-4 text-white/50">
                                <span className="font-mono text-[10px] tracking-widest">19:30</span>
                                <span className="font-mono text-[10px] tracking-widest">42 confirmados</span>
                            </div>

                            <div className="mt-4 h-1 w-10 bg-red" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                            <h2 className="font-display text-xl sm:text-5xl md:text-8xl text-white font-medium">
                                Devocional da Semana
                            </h2>
                            <button className="font-mono text-[10px] tracking-[0.3em] text-red uppercase hover:text-white transition-colors">
                                Ver mais
                            </button>
                        </div>

                        <div className="relative bg-gray border-2 border-gray-mid p-5">
                            <div className="absolute left-0 top-0 h-full w-1 bg-red" />
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex flex-col gap-2">
                                    <span className="font-mono text-[10px] tracking-[0.3em] text-red uppercase">
                                        Joao 15:13
                                    </span>
                                    <h3 className="font-display text-lg sm:text-2xl text-white">
                                        "Ninguem tem maior amor do que este: dar a propria vida pelos seus amigos."
                                    </h3>
                                    <p className="font-body text-sm text-white/60">
                                        Jesus nos chama a um amor que vai alem das palavras. Um amor que age, que se sacrifica, que escolhe o outro mesmo quando e...
                                    </p>
                                    <span className="font-mono text-[10px] tracking-widest text-white/40">
                                        Pr. Anderson Lima
                                    </span>
                                </div>
                                <div className="hidden sm:block font-display text-6xl text-white/10 leading-none">
                                    01
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative bg-red border-2 border-red/60 p-4 overflow-hidden">
                        <div className="absolute -right-6 -top-6 w-20 h-20 bg-red/40 blur-md" />
                        <div className="absolute right-4 top-4 opacity-30">
                            <div className="w-10 h-10 bg-red/40 border-2 border-red/60" />
                        </div>

                        <div className="font-mono text-[10px] tracking-[0.3em] text-white/70 uppercase">
                            Seu saldo
                        </div>

                        <div className="font-display text-3xl text-white leading-none mt-1">
                            2840 LUMENS
                        </div>

                        <div className="font-body text-xs text-white/70 mt-2">
                            #3 no ranking mensal • Ver meu perfil →
                        </div>
                    </div>
                </div>
            </div>

            <TabBar />
        </div>
    );
}