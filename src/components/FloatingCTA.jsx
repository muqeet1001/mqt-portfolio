import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function FloatingCTA() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="fixed bottom-6 right-6 z-40"
        >
            <Link
                to="/contact"
                className="flex items-center gap-3 px-4 py-3 bg-surface/95 glass rounded-2xl shadow-card border border-border-light hover:scale-105 transition-transform"
            >
                <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img
                        src="/assets/CaGBl7aknTMrKaAdGrTMCdRc.gif"
                        alt="Waving hand"
                        className="w-full h-full object-cover"
                    />
                </div>
                <span className="font-semibold text-text-primary">Say Hi!</span>
            </Link>
        </motion.div>
    )
}
