import SectionTitle from '../ui/SectionTitle'
import EventCard from '../ui/EventCard'
import type { Event } from '../../types/Event'

const EVENTOS: Event[] = [
	{
		id: "64baa38c-eb7e-41c6-8c87-eefd128a28f4",
		title: 'Culto de jovens - Link',
		description: 'Erguendo a voz em um só propósito. Junte-se a nós para uma noite de adoração e renovo espiritual.',
		date: '2026-05-01',
		hour: '19:00',
		locale: '1ª IPI de Assis',
		theme: 'Louvor & Adoração',
		confirmed: 32
	},
	{
		id: "64baa38c-eb7e-41c6-8c87-eefd128a28f4",
		title: 'Tarde no Shekináh',
		description: 'Uma tarde fora da rotina para aproveitarmos a natureza, o descanso e a nossa amizade na chácara.',
		date: '2026-05-08',
		hour: '15:00',
		locale: 'Chácara Shekináh',
		theme: '',
		confirmed: 53
	},
	{
		id: "3a6e31a2-22bb-46ac-b147-25855ca3ab17",
		title: 'Pequenos Grupos',
		description: 'Espaço de conexão e proximidade para compartilharmos a vida, a palavra e crescermos juntos.',
		date: '2026-05-15',
		hour: '19:00',
		locale: '1ª IPI de Assis',
		theme: 'Amizades',
		confirmed: 30
	},
]

export default function Agenda() {
	return (
		<section id="eventos" className="relative bg-black py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
			<SectionTitle
				label='Agenda'
				title='Encontros'
			>
				Nossa agenda. Fique por dentro dos próximos encontros do Link para não perder nenhum.
			</SectionTitle>

			<div className="max-w-7xl mx-auto flex flex-col gap-6">
				{EVENTOS.map((event, index) => (
					<EventCard
						event={event}
						index={index}
					/>
				))}
			</div>
		</section>
	)
}
