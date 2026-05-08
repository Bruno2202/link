import { MapPin, Clock, Users } from 'lucide-react'
import type { Event } from '../../types/Event';

interface Props {
    event: Event;
    index: number;
}

export default function evententCard({ event, index }: Props) {
    return (
        <div
            key={event.id}
            className="relative flex flex-col md:flex-row gap-5 md:gap-6 p-5 sm:p-6 md:p-8 bg-gray border-2 border-white/10 transition-all hover:border-red hover:-translate-y-0.5"
        >
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 font-display text-5xl sm:text-7xl text-white/5 leading-none select-none">
                {String(index + 1).padStart(2, '0')}
            </div>

            <div className="flex flex-col items-center justify-center bg-red text-white w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
                <span className="font-display text-2xl sm:text-3xl md:text-4xl leading-none">
                    {new Date(event.date + 'T00:00:00').getDate()}
                </span>
                <span className="font-mono text-[10px] tracking-widest uppercase">
                    {new Date(event.date + 'T00:00:00').toLocaleDateString('pt-BR', { month: 'short' })}
                </span>
                <span className="font-mono text-[10px] tracking-widest">
                    {new Date(event.date + 'T00:00:00').getFullYear()}
                </span>
            </div>

            <div className="flex-1">
                <div className="flex flex-wrap items-start gap-3 mb-3">
                    <span className="font-mono text-xs uppercase tracking-widest px-3 py-1 border border-gray-mid text-white/60">{event.theme}</span>
                </div>

                <h3 className="font-display tracking-wider text-2xl md:text-3xl text-white mb-2">{event.title}</h3>
                <p className="font-body text-white/60 text-base mb-4">{event.description}</p>

                <div className="flex flex-wrap gap-4 text-white/50">
                    <span className="flex items-center gap-1.5 font-body text-sm">
                        <Clock size={14} className="text-red" /> {event.hour}
                    </span>
                    <span className="flex items-center gap-1.5 font-body text-sm">
                        <MapPin size={14} className="text-red" /> {event.locale}
                    </span>
                    <span className="flex items-center gap-1.5 font-body text-sm">
                        <Users size={14} className="text-red" /> {event.confirmed} confirmados
                    </span>
                </div>
            </div>
        </div>
    );
}