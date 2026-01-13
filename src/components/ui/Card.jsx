import { motion } from 'framer-motion'

export default function Card({
    children,
    className = '',
    hover = true,
    delay = 0,
    ...props
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay }}
            whileHover={hover ? { scale: 1.02 } : {}}
            className={`bg-surface/80 glass rounded-2xl shadow-card border border-border-light overflow-hidden ${className}`}
            {...props}
        >
            {children}
        </motion.div>
    )
}
