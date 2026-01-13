import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from './ui/SectionTitle'
import Card from './ui/Card'
import { workData } from '../data/content'

export default function WorkSection() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const currentWork = workData[currentIndex]

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? workData.length - 1 : prev - 1))
    }

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === workData.length - 1 ? 0 : prev + 1))
    }

    return (
        <section className="w-full max-w-content py-4 px-4">
            <SectionTitle className="mb-4 text-left">Work</SectionTitle>

            {/* Work Card */}
            <a
                href={currentWork.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
            >
                <Card className="relative h-64 md:h-72 overflow-hidden group" hover={false}>
                    {/* Background */}
                    <div className="absolute inset-0">
                        <img
                            src={currentWork.background}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Work Image */}
                    <motion.div
                        initial={{ y: 50 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%]"
                    >
                        <img
                            src={currentWork.workImage}
                            alt={currentWork.company}
                            className="w-full h-auto rounded-t-2xl shadow-2xl group-hover:-translate-y-2 transition-transform duration-300"
                        />
                    </motion.div>
                </Card>
            </a>

            {/* Work Details & Navigation */}
            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                            src={currentWork.logo}
                            alt={currentWork.company}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="min-w-0">
                        <h3 className="font-semibold text-text-primary text-base truncate">
                            {currentWork.company}
                        </h3>
                        <p className="text-sm text-text-secondary">{currentWork.period}</p>
                    </div>
                </div>

                {/* Navigation Arrows */}
                {workData.length > 1 && (
                    <div className="flex items-center gap-2 flex-shrink-0">
                        <button
                            onClick={goToPrevious}
                            className="w-8 h-8 rounded-full bg-border-light flex items-center justify-center hover:bg-border transition-colors"
                            aria-label="Previous work"
                        >
                            <svg className="w-4 h-4 text-text-secondary rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                        <button
                            onClick={goToNext}
                            className="w-8 h-8 rounded-full bg-border-light flex items-center justify-center hover:bg-border transition-colors"
                            aria-label="Next work"
                        >
                            <svg className="w-4 h-4 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}
