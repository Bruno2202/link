import { useState } from 'react'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import TestemotionalCard from '../ui/TestemotionalCard'
import type { Testemotional } from '../../types/Testemotional'
import TestemotionalForm from '../ui/TestemotionalForm'
import { useModal } from '../../context/ModalProvider'

const TESTEMUNHOS_INICIAIS: Testemotional[] = [
	{
		id: 'fb5ea5ac-ff20-40fe-a542-a86529553c80',
		author: 'Arthur Coutinho',
		avatar: 'AC',
		text: 'Quando entrei no Link, eu estava passando por um momento muito difícil. Através da comunidade, senti o amor de Deus de uma forma concreta. Hoje minha vida é completamente diferente — não por mérito meu, mas pela graça d\'Ele.',
		date: new Date('2026-04-08'),
	},
	{
		id: 'fe990788-fe38-434b-b887-50f5df030a55',
		author: 'Pepe',
		avatar: 'PP',
		text: 'Deus me restaurou um relacionamento com meu pai que estava quebrado há anos. O retiro do Link foi o ponto de virada. Nunca imaginei que orar com irmãos na fé poderia mudar tanto uma situação.',
		date: new Date('2026-04-20'),
	},
	{
		id: '378c5b5d-0632-4384-ba8a-8eba5d95302f',
		author: 'Caroliny',
		avatar: 'CA',
		text: 'Entrei no Link sem saber o que esperar. Saí com amigos que são família. O que Deus tem feito nessa rede é incrível — jovens realmente transformados pela Palavra.',
		date: new Date('2026-04-15'),
	},
]

export default function Testimonials() {
	const [testemunhos, setTestemunhos] = useState(TESTEMUNHOS_INICIAIS)
	const { openModal, closeModal } = useModal()

	const handleAddTestimonial = ({ author, text }: { author: string; text: string }) => {
		const safeAuthor = author.trim() || 'Anonimo'
		const initials = safeAuthor
			.split(' ')
			.filter(Boolean)
			.map((part) => part[0]?.toUpperCase())
			.join('')
			.slice(0, 2) || 'AN'

		const novoTestemunho: Testemotional = {
			id: crypto.randomUUID(),
			author: safeAuthor,
			avatar: initials,
			text,
			date: new Date(),
		}

		setTestemunhos((prev) => [novoTestemunho, ...prev])
	}

	const handleOpenModal = () => {
		openModal(
			<TestemotionalForm onClose={closeModal} onSubmit={handleAddTestimonial} />
		)
	}

	return (
		<section id="testemunhos" className="relative bg-black py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
			<SectionTitle
				label='Mural'
				title='Testemunhos'
			>
				<Button
					onClick={handleOpenModal}
					icon='plus'
					className="w-full sm:w-auto"
				>
					COMPARTILHAR
				</Button>
			</SectionTitle>

			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{testemunhos.map((t, i) => (
					<TestemotionalCard t={t} i={i} />
				))}
			</div>
		</section>
	)
}
