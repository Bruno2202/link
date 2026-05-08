import type { Testemotional } from "../../types/Testemotional";
import { format } from 'date-fns'

interface Props {
    t: Testemotional;
    i: number;
}

export default function TestemotionalCard({ t, i }: Props) {
    return (
        <div key={t.id} className={`p-5 sm:p-6 flex flex-col gap-4 hover:-translate-y-0.5 transition-all ${i === 0 ? 'bg-red md:col-span-2 lg:col-span-1' : 'bg-gray border-2 border-white/10 hover:border-red'}`}>
            <div className="font-display text-5xl sm:text-6xl text-white/10 leading-none -mb-3 sm:-mb-4">"</div>

            <p className={`font-body text-base leading-relaxed flex-1 ${i === 0 ? 'text-white' : 'text-white/80'}`}>
                {t.text}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 flex items-center justify-center font-display text-sm ${i === 0 ? 'bg-white text-red' : 'bg-gray-mid text-white'}`}>
                        {t.avatar}
                    </div>
                    <div>
                        <div className={`font-body text-sm font-semibold ${i === 0 ? 'text-white' : 'text-white'}`}>{t.author}</div>
                        <div className={`font-mono text-[10px] tracking-widest ${i === 0 ? 'text-white/60' : 'text-white/30'}`}>
                            {format(t.date, 'dd/MM/yyyy')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}