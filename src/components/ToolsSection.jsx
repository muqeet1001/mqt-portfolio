import { motion } from 'framer-motion'
import SectionTitle from './ui/SectionTitle'
import Card from './ui/Card'
import { toolsData } from '../data/content'

export default function ToolsSection() {
    return (
        <section className="w-full max-w-content py-8 px-4">
            <SectionTitle className="mb-6">Tools & Assets</SectionTitle>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {toolsData.map((tool, index) => (
                    <Card
                        key={tool.id}
                        delay={index * 0.1}
                        className="p-4 flex flex-col items-start"
                    >
                        <div className="w-10 h-10 rounded-xl overflow-hidden mb-3">
                            <img
                                src={tool.icon}
                                alt={tool.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="font-semibold text-text-primary text-sm mb-1">
                            {tool.name}
                        </h3>
                        <p className="text-xs text-text-secondary">
                            {tool.description}
                        </p>
                    </Card>
                ))}
            </div>
        </section>
    )
}
