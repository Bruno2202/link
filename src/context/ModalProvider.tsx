import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
} from 'react'
import { createPortal } from 'react-dom'

type ModalContextValue = {
    openModal: (content: ReactNode) => void
    closeModal: () => void
}

const ModalContext = createContext<ModalContextValue | null>(null)

export function useModal() {
    const context = useContext(ModalContext)
    if (!context) {
        throw new Error('useModal must be used within ModalProvider')
    }
    return context
}

export function ModalProvider({ children }: { children: ReactNode }) {
    const [content, setContent] = useState<ReactNode | null>(null)

    const value = useMemo(
        () => ({
            openModal: (node: ReactNode) => setContent(node),
            closeModal: () => setContent(null),
        }),
        []
    )

    return (
        <ModalContext.Provider value={value}>
            {children}
            <ModalHost content={content} onClose={() => setContent(null)} />
        </ModalContext.Provider>
    )
}

function ModalHost({
    content,
    onClose,
}: {
    content: ReactNode | null
    onClose: () => void
}) {
    useEffect(() => {
        if (!content) return
        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = previousOverflow
        }
    }, [content])

    useEffect(() => {
        if (!content) return
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [content, onClose])

    if (!content) return null

    return createPortal(
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={onClose}
        >
            <div
                role="dialog"
                aria-modal="true"
                className="w-full max-w-lg"
                onClick={(event) => event.stopPropagation()}
            >
                {content}
            </div>
        </div>,
        document.body
    )
}
