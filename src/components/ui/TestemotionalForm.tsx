import { useState } from "react";
import { X } from "lucide-react";

type TestemotionalFormData = {
    author: string
    text: string
}

type TestemotionalFormProps = {
    onClose: () => void
    onSubmit: (data: TestemotionalFormData) => void
}

export default function TestemotionalForm({ onClose, onSubmit }: TestemotionalFormProps) {
    const [form, setForm] = useState<TestemotionalFormData>({ author: '', text: '' })

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onSubmit({ author: form.author.trim(), text: form.text.trim() })
        setForm({ author: '', text: '' })
        onClose()
    }

    return (
        <div className="bg-gray border-2 border-red w-full max-w-lg p-8 relative">
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/40 hover:text-red"
                aria-label="Fechar modal"
                type="button"
            >
                <X size={24} />
            </button>
            <h3 className="font-display text-3xl text-white mb-6">COMPARTILHAR TESTEMUNHO</h3>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                    <label className="font-mono text-xs tracking-widest text-white/40 uppercase block mb-2">
                        Seu nome (opcional)
                    </label>
                    <input
                        type="text"
                        value={form.author}
                        onChange={(event) => setForm((prev) => ({ ...prev, author: event.target.value }))}
                        placeholder="Deixe em branco para publicar como Anonimo"
                        className="w-full bg-black border border-gray-mid text-white font-body text-base px-4 py-3 focus:outline-none focus:border-red placeholder:text-white/20"
                    />
                </div>
                <div>
                    <label className="font-mono text-xs tracking-widest text-white/40 uppercase block mb-2">
                        Seu testemunho *
                    </label>
                    <textarea
                        value={form.text}
                        onChange={(event) => setForm((prev) => ({ ...prev, text: event.target.value }))}
                        placeholder="O que Deus tem feito na sua vida?"
                        rows={5}
                        className="w-full bg-black border border-gray-mid text-white font-body text-base px-4 py-3 focus:outline-none focus:border-red placeholder:text-white/20 resize-none"
                    />
                </div>
                <button
                    disabled={!form.text.trim()}
                    className="font-display text-xl tracking-widest bg-red text-white px-8 py-3 hover:bg-red/80 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    type="submit"
                >
                    PUBLICAR TESTEMUNHO
                </button>
            </form>
        </div>
    );
}