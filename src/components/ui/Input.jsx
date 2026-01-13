export default function Input({
    label,
    type = 'text',
    name,
    placeholder,
    rows,
    className = '',
    ...props
}) {
    const baseClasses = 'w-full px-4 py-3 bg-background border border-border rounded-xl text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all'

    return (
        <div className={`space-y-2 ${className}`}>
            {label && (
                <label htmlFor={name} className="block text-sm font-medium text-text-secondary">
                    {label}
                </label>
            )}
            {rows ? (
                <textarea
                    id={name}
                    name={name}
                    rows={rows}
                    placeholder={placeholder}
                    className={`${baseClasses} resize-none`}
                    {...props}
                />
            ) : (
                <input
                    type={type}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    className={baseClasses}
                    {...props}
                />
            )}
        </div>
    )
}
