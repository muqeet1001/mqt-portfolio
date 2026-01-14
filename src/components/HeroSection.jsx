import { motion } from 'framer-motion'
import Button from './ui/Button'
import { heroData, getDayName } from '../data/content'

export default function HeroSection() {
    return (
        <section className="w-full max-w-content pt-20 pb-4 px-4">
            {/* Avatar with hover animation */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, -5, 0],
                    transition: { duration: 0.5 }
                }}
                className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-gray-800 overflow-hidden mb-6 cursor-pointer relative group"
            >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-70 blur-xl transition-opacity duration-500 -z-10 scale-150" />

                {/* Ring animation */}
                <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-accent/50 transition-all duration-300 scale-100 group-hover:scale-110" />

                <img
                    src={heroData.avatar}
                    alt={heroData.name}
                    className="w-full h-full object-cover object-[50%_20%] transition-transform duration-300 group-hover:scale-110"
                />
            </motion.div>

            {/* Greeting */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6"
            >
                <h1 className="text-2xl font-semibold text-text-primary mb-2">
                    {heroData.greeting}
                </h1>
                <p className="text-sm text-text-primary">
                    How's your <span className="font-medium">{getDayName()}</span>?
                </p>
            </motion.div>

            {/* Bio */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{
                    scale: 1.02,
                    y: -2,
                    transition: { duration: 0.2 }
                }}
                className="text-lg md:text-xl font-medium text-black dark:text-white leading-[1.8] md:leading-[2.1] mb-6 cursor-default transition-transform duration-300"
            >
                I’m a third-year Engineering student, <span className="inline-flex px-3 py-1 mx-1 rounded-full bg-gradient-to-b from-black/10 to-transparent dark:from-white/10 dark:to-transparent border border-black/20 dark:border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] backdrop-blur-md text-sm font-semibold hover:scale-105 hover:shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300 cursor-pointer">Full Stack Developer</span> and <span className="inline-flex px-3 py-1 mx-1 rounded-full bg-gradient-to-b from-black/10 to-transparent dark:from-white/10 dark:to-transparent border border-black/20 dark:border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] backdrop-blur-md text-sm font-semibold hover:scale-105 hover:shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300 cursor-pointer">3X- hackathon winner</span> who enjoys building real-world products using the <span className="inline-flex px-3 py-1 mx-1 rounded-full bg-gradient-to-b from-black/10 to-transparent dark:from-white/10 dark:to-transparent border border-black/20 dark:border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] backdrop-blur-md text-sm font-semibold hover:scale-105 hover:shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300 cursor-pointer">MERN stack</span> and <span className="inline-flex px-3 py-1 mx-1 rounded-full bg-gradient-to-b from-black/10 to-transparent dark:from-white/10 dark:to-transparent border border-black/20 dark:border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] backdrop-blur-md text-sm font-semibold hover:scale-105 hover:shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300 cursor-pointer">AI agent workflows</span>, with a problem-solving mindset backed by DSA.
            </motion.p>

            {/* CTA Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative z-40"
            >
                <Button to="/contact" size="lg">
                    Contact
                </Button>
            </motion.div>
        </section>
    )
}
