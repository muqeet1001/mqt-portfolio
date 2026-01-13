import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Shop', path: '/products-listing' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Songs', path: '/songs' },
    { name: 'Playground', path: '/playground' },
    { name: 'Contact', path: '/contact' },
]



export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    return (
        <>
            {/* Theme Toggle Button - Aligned with Menu */}
            <div className="fixed top-4 right-20 z-50 flex items-center">
                <ThemeToggle />
            </div>

            {/* Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-4 right-4 z-50 w-11 h-11 rounded-full bg-surface/80 glass shadow-card flex items-center justify-center border border-border-light hover:scale-105 transition-transform"
                aria-label="Toggle menu"
            >
                <div className="flex flex-col gap-1.5">
                    <motion.span
                        animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                        className="w-5 h-0.5 bg-text-primary rounded-full block"
                    />
                    <motion.span
                        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="w-5 h-0.5 bg-text-primary rounded-full block"
                    />
                    <motion.span
                        animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                        className="w-5 h-0.5 bg-text-primary rounded-full block"
                    />
                </div>
            </button>

            {/* Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 z-40 bg-black/20 glass"
                        />

                        {/* Menu Panel */}
                        <motion.nav
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 100 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="fixed top-16 right-4 z-50 w-64 bg-surface/95 glass rounded-2xl shadow-card border border-border-light overflow-hidden"
                        >
                            <ul className="py-2">
                                {navLinks.map((link) => (
                                    <li key={link.path}>
                                        <Link
                                            to={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className={`block px-6 py-3 text-base font-medium transition-colors hover:bg-border-light ${location.pathname === link.path
                                                ? 'text-text-primary'
                                                : 'text-text-secondary'
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
