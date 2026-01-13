import { motion } from 'framer-motion'

export default function FooterSection() {
    return (
        <footer className="w-full max-w-content py-12 px-4">
            {/* Newsletter */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
            >
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                    Subscribe to Newsletter
                </h3>
                <p className="text-sm text-text-secondary mb-4">
                    Get updates on my latest projects and articles
                </p>

                <form className="flex gap-2">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-2 bg-surface border border-border rounded-xl text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent/50"
                    />
                    <button
                        type="submit"
                        className="px-6 py-2 bg-gradient-to-b from-gray-600 to-gray-900 text-white rounded-xl font-medium shadow-button hover:opacity-90 transition-opacity"
                    >
                        Subscribe
                    </button>
                </form>
            </motion.div>

            {/* Social Links (Mobile) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex gap-4 mb-8 lg:hidden"
            >
                {['Instagram', 'LinkedIn', 'Facebook', 'YouTube'].map((social) => (
                    <a
                        key={social}
                        href="#"
                        className="w-10 h-10 rounded-xl bg-surface border border-border-light flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-border transition-all"
                        aria-label={social}
                    >
                        <span className="text-xs font-medium">{social[0]}</span>
                    </a>
                ))}
            </motion.div>

            {/* Thanks Message */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-sm text-text-secondary"
            >
                Thanks for Visiting! ✌️
            </motion.p>

            {/* Attribution */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-xs text-text-tertiary mt-2"
            >
                Made with Framer
            </motion.p>
        </footer>
    )
}
