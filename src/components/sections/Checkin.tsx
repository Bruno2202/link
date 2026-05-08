import { QrCode } from 'lucide-react'
import toast from 'react-hot-toast'

export default function Checkin() {
	return (
		<section id="checkin" className="relative bg-red py-20 px-4 overflow-hidden">
			<div className="absolute inset-0 opacity-10"
				style={{
					backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
					backgroundSize: '20px 20px'
				}}
			/>

			<div className="relative z-10 max-w-4xl mx-auto text-center">
				<span className="font-mono text-xs tracking-[0.3em] text-white/70 uppercase">Sistema de Presença</span>
				<h2 className="font-display text-6xl md:text-9xl text-white mt-2 mb-4">CHECK-IN</h2>
				<p className="font-body text-xl text-white/80 mb-10 max-w-lg mx-auto">
					Você está na igreja? Registre sua presença e ganhe <span className='font-bold'>20 Lumens</span> instantaneamente.
				</p>

				<div className="flex flex-col items-center gap-6">
					<div className="relative w-40 h-40 bg-white rounded-none flex items-center justify-center transition-all duration-300">
						<div className="text-black">
							<QrCode size={80} strokeWidth={1.5} />
						</div>
					</div>

					<button
						className="cursor-pointer font-display text-2xl tracking-widest px-12 py-4 border-2 border-white transition-all duration-200 bg-transparent text-white hover:bg-white hover:text-red"
						onClick={() => toast('Em desenvolvimento')}
					>
						FAZER CHECK-IN
					</button>

					<p className="font-mono text-xs text-white/50 tracking-widest">
						NO APP, ESCANEIE O QR CODE EXIBIDO NA ENTRADA
					</p>
				</div>
			</div>
		</section >
	)
}
