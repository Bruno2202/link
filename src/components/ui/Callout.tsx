interface Props {
    label: string;
    title: string;
    description: string;
}

export default function Callout({ label, title, description }: Props) {
    return (
        <div className="mt-8 p-5 sm:p-6 bg-black border-l-4 border-red">
            <div className="font-mono text-xs tracking-widest text-red uppercase mb-2">{label}</div>
            <div className="font-display text-xl text-white">{title}</div>
            <p className="font-body text-sm text-white/50 mt-1">
                {description}
            </p>
        </div>
    );
}