import { Music, ExternalLink, Headphones, Play } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import Callout from '../ui/Callout'
import { SiSpotify } from 'react-icons/si'

const MUSICAS_DESTAQUE = [
	{ titulo: 'Nenhum Outro Nome', artista: 'Hillsong em Português', duracao: '5:12' },
	{ titulo: 'Eu Navegarei', artista: 'Fernandinho', duracao: '6:45' },
	{ titulo: 'Deus Proverá', artista: 'Laura Souguellis', duracao: '4:28' },
	{ titulo: 'Creio', artista: 'Gabriela Rocha', duracao: '5:01' },
	{ titulo: 'Jeová', artista: 'Renascer Praise', duracao: '7:33' },
]

export default function Playlist() {
	return (
		<section id="playlist" className="bg-gray py-24 px-4 md:px-8 relative overflow-hidden">
			<div className="absolute -right-8 top-1/2 -translate-y-1/2 font-display text-[15vw] text-white/2 leading-none select-none rotate-12">
				MUSIC
			</div>

			<div className="max-w-7xl mx-auto relative z-10">
				<SectionTitle
					label='Spotify'
					title='Playlist'
				>
					A trilha sonora do Link. As músicas que tocam nos nossos encontros.
				</SectionTitle>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
					<div className="flex flex-col gap-6">
						<div className="relative overflow-hidden rounded-none bg-[#9E0016] border-2 border-gray-mid" style={{ height: 380 }}>
							<iframe
								title="Playlist do Link"
								src="https://open.spotify.com/embed/playlist/6c1ddqmn1gHdlBn3t5wFCN?utm_source=generator&theme=1"
								width="100%"
								height="380"
								frameBorder="0"
								allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
								loading="lazy"
							/>
						</div>

						<a
							href="https://open.spotify.com/playlist/6c1ddqmn1gHdlBn3t5wFCN"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center gap-3 font-display text-xl tracking-widest bg-[#1DB954] text-black px-8 py-4 hover:bg-[#1DB954]/80 transition-colors"
						>
							<SiSpotify size={20} /> SEGUIR NO SPOTIFY 
						</a>
					</div>

					<div>
						<h3 className="font-display text-2xl text-white mb-6 flex items-center gap-3">
							<Headphones size={20} className="text-red" /> MAIS TOCADAS
						</h3>
						<div className="flex flex-col gap-1">
							{MUSICAS_DESTAQUE.map((m, i) => (
								<div
									key={m.titulo}
									className="flex items-center gap-4 p-4 hover:bg-black group transition-colors cursor-pointer"
								>
									<span className="font-display text-2xl text-white/20 w-8 text-center group-hover:hidden">
										{String(i + 1).padStart(2, '0')}
									</span>
									<Play size={16} className="hidden group-hover:block text-red w-8 shrink-0" />
									<div className="flex-1 min-w-0">
										<div className="font-body text-base text-white truncate">{m.titulo}</div>
										<div className="font-mono text-xs text-white/40 truncate">{m.artista}</div>
									</div>
									<span className="font-mono text-xs text-white/30">{m.duracao}</span>
								</div>
							))}
						</div>

						<Callout
							label='Próximo encontro'
							title='Sugestão de música?'
							description='Compartilhe sua ideia diretamente com a equipe. Toda semana adicionamos novas faixas à nossa trilha sonora.'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
