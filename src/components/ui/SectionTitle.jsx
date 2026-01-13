import { motion } from 'framer-motion'

export default function SectionTitle({ children, className = '' }) {
    return (
        <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className={`text-2xl font-semibold text-text-primary ${className}`}
        >
            {children}
        </motion.h2>
    )
}
