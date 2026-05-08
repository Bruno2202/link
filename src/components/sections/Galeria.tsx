import { useState } from 'react'
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'

const FOTOS = [
	{ id: 1, evento: 'Encontro Semanal', data: 'Abr 2026', cor: '#CC1D1D', label: 'EN #01' },
	{ id: 2, evento: 'Night of Worship', data: 'Mar 2026', cor: '#1A1A1A', label: 'NW 26' },
	{ id: 3, evento: 'Retiro 2025', data: 'Nov 2025', cor: '#2A2A2A', label: 'RT 25' },
	{ id: 4, evento: 'Encontro Semanal', data: 'Mar 2026', cor: '#0A0A0A', label: 'EN #08' },
	{ id: 5, evento: 'Aniversário Link', data: 'Fev 2026', cor: '#CC1D1D', label: 'AN 26' },
	{ id: 6, evento: 'Culto Jovem', data: 'Jan 2026', cor: '#1A1A1A', label: 'CJ 01' },
	{ id: 7, evento: 'Encontro Especial', data: 'Dez 2025', cor: '#2A2A2A', label: 'EE 25' },
	{ id: 8, evento: 'Night of Worship', data: 'Out 2025', cor: '#CC1D1D', label: 'NW 25' },
]

function PhotoPlaceholder({ foto, onClick }: any) {
	return (
		<button
			onClick={onClick}
			className="relative group overflow-hidden aspect-square bg-gray card-brutalist"
			style={{ backgroundColor: foto.cor }}
		>
			<div className="absolute inset-0 flex flex-col items-center justify-center">
				<Camera size={32} className="text-white/10 mb-2" />
				<span className="font-display text-2xl text-white/20">{foto.label}</span>
			</div>

			<div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-2">
				<span className="font-display text-lg text-white">{foto.evento}</span>
				<span className="font-mono text-xs tracking-widest text-red">{foto.data}</span>
			</div>

			<div className="absolute bottom-0 left-0 right-0 p-3 bg-linear-to-t from-black/60 to-transparent">
				<span className="font-mono text-[10px] tracking-widest text-white/50">{foto.data}</span>
			</div>
		</button>
	)
}

export default function Galeria() {
	const [fotoAtiva, setFotoAtiva] = useState<number | null>(null);

	const navFoto = (dir: any) => {
		const idx = FOTOS.findIndex(f => f.id === fotoAtiva)
		const next = (idx + dir + FOTOS.length) % FOTOS.length
		setFotoAtiva(FOTOS[next].id)
	}

	const fotoObj = FOTOS.find(f => f.id === fotoAtiva)

	return (
		<section id="galeria" className="bg-black py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
			<div className="max-w-7xl mx-auto">
				<SectionTitle
					label='Memórias'
					title='Galeria'
				>
					Cada foto é uma memória. Cada encontro é história.
				</SectionTitle>

				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
					{FOTOS.map((foto) => (
						<PhotoPlaceholder key={foto.id} foto={foto} onClick={() => setFotoAtiva(foto.id)} />
					))}
				</div>

				<div className="mt-12 p-5 sm:p-8 bg-gray border border-gray-mid flex flex-col md:flex-row items-center justify-between gap-6">
					<div>
						<div className="font-display text-xl sm:text-2xl text-white mb-1">TEM FOTOS DO ENCONTRO?</div>
						<p className="font-body text-white/50 text-sm sm:text-base">
							Envie seus registros diretamente para a nossa liderança. Vamos adicionar aqui na galeria.
						</p>
					</div>
					<div className="flex items-center gap-2 font-mono text-xs tracking-widest text-red border border-red px-5 sm:px-6 py-3">
						<Camera size={16} /> ENVIAR FOTOS
					</div>
				</div>
			</div>

			{fotoAtiva && fotoObj && (
				<div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
					<button onClick={() => setFotoAtiva(null)} className="absolute top-4 right-4 text-white/40 hover:text-red z-10">
						<X size={28} />
					</button>
					<button onClick={() => navFoto(-1)} className="absolute left-4 text-white/40 hover:text-red">
						<ChevronLeft size={40} />
					</button>
					<div
						className="w-full max-w-sm sm:max-w-lg aspect-square flex items-center justify-center"
						style={{ backgroundColor: fotoObj.cor }}
					>
						<div className="text-center">
							<Camera size={48} className="text-white/10 mx-auto mb-3" />
							<div className="font-display text-4xl text-white/20">{fotoObj.label}</div>
							<div className="font-body text-white/60 mt-2">{fotoObj.evento}</div>
							<div className="font-mono text-xs text-red mt-1">{fotoObj.data}</div>
						</div>
					</div>
					<button onClick={() => navFoto(1)} className="absolute right-4 text-white/40 hover:text-red">
						<ChevronRight size={40} />
					</button>
				</div>
			)}
		</section>
	)
}
