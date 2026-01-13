import { Link } from 'react-router-dom'

const variants = {
    primary: 'bg-gradient-to-b from-black/10 to-transparent dark:from-white/10 dark:to-transparent border border-black/20 dark:border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] backdrop-blur-md text-text-primary hover:scale-105 hover:shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]',
    secondary: 'bg-border-light text-text-primary hover:bg-border border border-border-light',
    ghost: 'text-text-secondary hover:text-text-primary hover:bg-border-light',
}

const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
}

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    to,
    href,
    className = '',
    ...props
}) {
    const baseClasses = `inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`

    if (to) {
        return (
            <Link to={to} className={baseClasses} {...props}>
                {children}
            </Link>
        )
    }

    if (href) {
        return (
            <a href={href} className={baseClasses} target="_blank" rel="noopener noreferrer" {...props}>
                {children}
            </a>
        )
    }

    return (
        <button className={baseClasses} {...props}>
            {children}
        </button>
    )
}
