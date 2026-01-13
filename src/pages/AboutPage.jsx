import { motion } from 'framer-motion'
import SectionTitle from '../components/ui/SectionTitle'
import { heroData, aboutData } from '../data/content'

export default function AboutPage() {
    return (
        <div className="w-full max-w-content pt-24 pb-12 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <SectionTitle className="mb-4">About Me</SectionTitle>
                <p className="text-text-secondary">{aboutData.subtitle}</p>
            </motion.div>

            {/* Profile Card */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-surface/80 glass rounded-2xl shadow-card border border-border-light p-8 mb-8"
            >
                <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-800 flex-shrink-0">
                        <img
                            src={heroData.avatar}
                            alt={heroData.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-semibold text-text-primary mb-1">
                            {heroData.name}
                        </h2>
                        <p className="text-text-secondary">{aboutData.title}</p>
                    </div>
                </div>

                <div className="space-y-4 text-text-primary leading-relaxed">
                    {aboutData.bio.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </motion.div>

            {/* Skills */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-surface/80 glass rounded-2xl shadow-card border border-border-light p-8"
            >
                <h3 className="text-lg font-semibold text-text-primary mb-4">Skills & Expertise</h3>
                <div className="flex flex-wrap gap-2">
                    {aboutData.skills.map((skill) => (
                        <span
                            key={skill}
                            className="px-3 py-1 bg-border-light rounded-full text-sm text-text-secondary"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}
