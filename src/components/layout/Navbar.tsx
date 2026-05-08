import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Button from '../ui/Button'
import { scrollTo } from '../../utils/scroll'
import toast from 'react-hot-toast'

const navItems = [
	{ label: 'Início', section: 'hero' },
	{ label: 'Encontros', section: 'eventos' },
	{ label: 'Check-in', section: 'checkin' },
	{ label: 'Testemunhos', section: 'testemunhos' },
	{ label: 'Playlist', section: 'playlist' },
	{ label: 'Galeria', section: 'galeria' },
]

export default function Navbar() {
	const [open, setOpen] = useState(false)

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-mid">
			<div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
				<button onClick={() => scrollTo('hero')} className="flex items-center gap-2 group">
					<img
						src='/assets/logos/link.svg'
						className='w-14'
					/>
				</button>

				<div className="hidden md:flex items-center gap-6">
					{navItems.map((item) => (
						<button key={item.section} onClick={() => scrollTo(item.section)} className="font-display uppercase tracking-widest text-md text-white/70 hover:text-red transition-colors duration-200 cursor-pointer">
							{item.label}
						</button>
					))}

					<Button
						size='sm'
						onClick={() => toast('Em desenvolvimento')}
					>
						LOGIN
					</Button>
				</div>

				<button className="md:hidden text-white" onClick={() => setOpen(!open)}>
					{open ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			{open && (
				<div className="md:hidden bg-black border-t border-gray-mid px-4 py-6 flex flex-col gap-4">
					{navItems.map((item) => (
						<button key={item.section} onClick={() => scrollTo(item.section)} className="font-display text-white text-left text-2xl">
							{item.label}
						</button>
					))}
					<button
						onClick={() => toast('Em desenvolvimento')}
						className="font-display text-xl tracking-widest bg-red text-white px-4 py-2 w-full text-center"
					>
						LOGIN
					</button>
				</div>
			)}
		</nav>
	)
}