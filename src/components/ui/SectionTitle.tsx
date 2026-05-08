import type { ReactNode } from "react";

interface Props {
    title: string;
    label: string;
    children?: ReactNode;
}

export default function SectionTitle({ title, label, children }: Props) {
    return (
        <div className="max-w-7xl mx-auto flex justify-between mb-16 items-end">
            <div className="flex flex-col">
                <div className="w-12 h-px bg-red mb-4" />
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div>
                        <span className="font-mono text-xs tracking-[0.3em] text-red uppercase">{label}</span>
                        <h2 className="font-display text-6xl md:text-8xl text-white mt-1 font-medium">{title}</h2>
                    </div>
                </div>
            </div>

            <div className="font-body text-lg text-white/50 max-w-sm">
                {children}
            </div>
        </div>
    );
}