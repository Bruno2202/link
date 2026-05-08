import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { DynamicIcon, type IconName } from 'lucide-react/dynamic';
import { twMerge } from "tailwind-merge";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: IconName;
    children: ReactNode;
    variant?: Variant;
    size?: Size;
    isLoading?: boolean;
    className?: string;
}

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';
type Size = 'xs' | 'sm' | 'md' | 'lg';

export default function Button({
    icon,
    children,
    variant = 'primary',
    size = 'md',
    isLoading,
    className = '',
    ...props
}: Props) {
    const baseStyles = 'flex items-center justify-center cursor-pointer font-body font-semibold text-base sm:text-lg tracking-widest px-6 sm:px-8 py-2.5 sm:py-3 transition-all duration-200 border-2';

    const variants = {
        primary: "bg-red hover:bg-red/80 text-white border-red",
        secondary: "",
        ghost: "",
        outline: "bg-transparent text-white px-8 py-3 hover:bg-white hover:text-black border-white/30 hover:border-white"
    }

    const sizes = {
        xs: 'px-2 py-1 text-xs',
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
        xl: 'px-10 py-5 text-xl'
    };

    const iconSize = {
        xs: 12,
        sm: 16,
        md: 20,
        lg: 24
    };

    const combinedClasses = twMerge(
        baseStyles,
        variants[variant],
        sizes[size],
        className
    );

    return (

        < button
            disabled={props.disabled || isLoading}
            className={combinedClasses}
            {...props}
        >
            {
                isLoading ? (
                    <>
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Carregando...
                    </>
                ) : (
                    <>
                        {icon && (
                            <DynamicIcon name={icon} size={iconSize[size]} className="mr-2" />
                        )}
                        {children}
                    </>
                )
            }
        </button >
    );
}