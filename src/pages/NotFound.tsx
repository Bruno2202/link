import { Link } from "react-router";

export function NotFound() {
	return (
		<section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
			<div
				className="absolute inset-0 opacity-[0.04]"
				style={{
					backgroundImage:
						"linear-gradient(#F5F5F0 1px, transparent 1px), linear-gradient(90deg, #F5F5F0 1px, transparent 1px)",
					backgroundSize: "60px 60px",
				}}
			/>
			<div className="absolute top-0 left-0 w-1 h-full bg-red" />

			<div className="relative z-10 text-center px-6">
				<h1 className="font-display text-7xl md:text-9xl text-white tracking-widest animate-fade-up" style={{ animationFillMode: "both" }}>
					404
				</h1>
				<p className="font-body text-white/60 text-lg md:text-2xl mt-6 max-w-xl mx-auto leading-relaxed animate-fade-up" style={{ animationFillMode: "both" }}>
					Página não encontrada. Volte para o início e continue sua jornada.
				</p>

				<div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-fade-up" style={{ animationFillMode: "both" }}>
					<Link
						to="/"
						className="font-body text-lg tracking-widest font-semibold bg-red text-white px-8 py-3 hover:bg-red/80 transition-all duration-200 border-2 border-red uppercase"
					>
						Voltar ao Início
					</Link>
					<Link
						to="/"
						className="font-body text-lg tracking-widest font-semibold bg-transparent text-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-200 border-2 border-white/30 hover:border-white uppercase"
					>
						Ver Encontros
					</Link>
				</div>
			</div>
		</section>
	);
}