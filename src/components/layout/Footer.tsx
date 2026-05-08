import { scrollTo } from '../../utils/scroll'
import { SiInstagram, SiSpotify } from 'react-icons/si'

const navItems = [
	{ label: 'Início', section: 'hero' },
	{ label: 'Encontros', section: 'eventos' },
	{ label: 'Check-in', section: 'checkin' },
	{ label: 'Testemunhos', section: 'testemunhos' },
	{ label: 'Playlist', section: 'playlist' },
	{ label: 'Galeria', section: 'galeria' },
]

export default function Footer() {
	return (
		<footer className="bg-gray border-t border-gray-mid py-10 sm:py-12 px-4 sm:px-6 md:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
					<div>
						<img
							src='assets/logos/link_preto.svg'
							className='w-24 sm:w-28 mb-4'
						/>
						<p className="font-body text-white/40 text-sm leading-relaxed max-w-xs">
							1ª Igreja Presbiteriana Independente de Assis.
						</p>
					</div>

					<div>
						<div className="font-mono text-xs tracking-[0.2em] text-red uppercase mb-4">Navegação</div>
						<div className="grid grid-cols-2 gap-2">
							{navItems.map((item, i) => (
								<button
									key={i}
									onClick={() => scrollTo(item.section)}
									className="font-body text-sm text-white/40 hover:text-red transition-colors text-left"
								>
									{item.label}
								</button>
							))}
						</div>
					</div>

					<div>
						<div className="font-mono text-xs tracking-[0.2em] text-red uppercase mb-4">Redes Sociais</div>
						<div className="flex flex-col gap-3">
							<a
								href="https://www.instagram.com/ipi.link/"
								target="_blank"
								className="flex items-center gap-3 font-body text-sm text-white/40 hover:text-red transition-colors"
							>
								<SiInstagram /> Instagram
							</a>
							<a
								href="https://open.spotify.com/playlist/6c1ddqmn1gHdlBn3t5wFCN"
								target="_blank"
								className="flex items-center gap-3 font-body text-sm text-white/40 hover:text-red transition-colors"
							>
								<SiSpotify size={16} /> Playlist no Spotify
							</a>
						</div>
					</div>
				</div>

				<div className="border-t border-gray-mid pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
					<span className="font-mono text-xs tracking-widest text-white/20">
						© 2026 LINK — REDE DE JOVENS — 1ª IPI ASSIS
					</span>
					<span className="font-mono text-xs tracking-widest text-white/20">
						FEITO COM FÉ E CÓDIGO
					</span>
				</div>
			</div>
		</footer>
	)
}
