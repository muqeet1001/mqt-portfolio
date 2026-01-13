import { motion } from 'framer-motion'
import SectionTitle from '../components/ui/SectionTitle'
import Card from '../components/ui/Card'
import { projectsData } from '../data/content'

export default function ProjectsPage() {
    return (
        <div className="w-full max-w-content pt-24 pb-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <SectionTitle className="mb-4">Projects</SectionTitle>
                <p className="text-text-secondary">A showcase of my design and engineering work</p>
            </motion.div>

            <div className="space-y-6">
                {projectsData.map((project, index) => (
                    <Card key={project.id} delay={index * 0.15} className="overflow-hidden">
                        <div className="aspect-video overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-text-primary mb-2">
                                {project.title}
                            </h3>
                            <p className="text-text-secondary text-sm mb-4">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-1 bg-border-light rounded-md text-xs text-text-secondary"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}
