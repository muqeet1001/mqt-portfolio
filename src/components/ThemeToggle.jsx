import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false)

    // Initialize theme
    useEffect(() => {
        const isDarkMode =
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)

        setIsDark(isDarkMode)
        if (isDarkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [])

    const toggleTheme = () => {
        const newMode = !isDark
        setIsDark(newMode)

        if (newMode) {
            document.documentElement.classList.add('dark')
            localStorage.theme = 'dark'
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.theme = 'light'
        }
    }

    return (
        <button
            onClick={toggleTheme}
            className="relative w-16 h-9 bg-surface/80 glass border border-border rounded-full flex items-center px-1 shadow-inner hover:border-accent/50 transition-all duration-300 hover:scale-105 group"
            aria-label="Toggle theme"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-accent to-purple-500 blur-md -z-10" />

            <motion.div
                className="w-7 h-7 rounded-full bg-text-primary shadow-sm flex items-center justify-center overflow-hidden relative z-10"
                animate={{
                    x: isDark ? 28 : 0,
                    backgroundColor: isDark ? '#f0f0f0' : '#0c131b',
                    rotate: isDark ? 360 : 0
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
                <motion.div
                    key={isDark ? 'dark' : 'light'}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                >
                    {isDark ? (
                        // Moon icon
                        <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M21.64 13a1 1 0 0 0-1.05-.14 8.05 8.05 0 0 1-3.37.73 8.15 8.15 0 0 1-8.14-8.1 8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36a10.14 10.14 0 1 0 13.64 10.64Z" />
                        </svg>
                    ) : (
                        // Sun icon
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5Zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-15a1 1 0 0 0 1 1h1a1 1 0 0 0 0-2h-1a1 1 0 0 0-1 1Zm-5.66 2.34a1 1 0 0 0 .71.29h.01a1 1 0 0 0 .7-.29 1 1 0 0 0 0-1.41l-.71-.71a1 1 0 0 0-1.41 1.41l.7.71Zm-2.34 5.66a1 1 0 0 0 1 1h1a1 1 0 0 0 0-2h-1a1 1 0 0 0-1 1Zm2.34 5.66a1 1 0 0 0 0 1.41l.71.71a1 1 0 0 0 1.41-1.41l-.71-.71a1 1 0 0 0-1.41 0Zm5.66 2.34a1 1 0 0 0 1 1h1a1 1 0 0 0 0-2h-1a1 1 0 0 0-1 1Zm5.66-2.34a1 1 0 0 0 0-1.41l-.71-.71a1 1 0 0 0-1.41 1.41l.71.71a1 1 0 0 0 1.41 0Zm2.34-5.66a1 1 0 0 0 1 1h1a1 1 0 0 0 0-2h-1a1 1 0 0 0-1 1Zm-2.34-5.66a1 1 0 0 0 0-1.41l-.71-.71a1 1 0 0 0-1.41 1.41l.71.71a1 1 0 0 0 1.41 0Z" />
                        </svg>
                    )}
                </motion.div>
            </motion.div>
        </button>
    )
}
