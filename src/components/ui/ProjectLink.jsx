import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ProjectLink({
    title,
    logo,
    href,
    external = false,
    delay = 0
}) {
    const Wrapper = external ? 'a' : Link
    const linkProps = external
        ? { href, target: '_blank', rel: 'noopener noreferrer' }
        : { to: href }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay }}
        >
            <Wrapper
                {...linkProps}
                className="flex items-center justify-between w-full py-2 group"
            >
                <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg overflow-hidden bg-border-light flex-shrink-0">
                        <img src={logo} alt="" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-base font-medium text-text-secondary group-hover:text-text-primary transition-colors">
                        {title}
                    </span>
                </div>

                <div className="w-6 h-6 rounded-full bg-border-light flex items-center justify-center group-hover:bg-border transition-colors">
                    <svg
                        className="w-4 h-4 text-text-secondary group-hover:translate-x-0.5 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </Wrapper>
        </motion.div>
    )
}
