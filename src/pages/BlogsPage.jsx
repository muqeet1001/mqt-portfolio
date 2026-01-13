import { motion } from 'framer-motion'
import SectionTitle from '../components/ui/SectionTitle'
import Card from '../components/ui/Card'
import { blogsData } from '../data/content'

export default function BlogsPage() {
    return (
        <div className="w-full max-w-content pt-24 pb-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <SectionTitle className="mb-4">Writing</SectionTitle>
                <p className="text-text-secondary">Deep dives into racing, automobiles, and personal journeys</p>
            </motion.div>

            <div className="space-y-6">
                {blogsData.map((blog, index) => (
                    <Card
                        key={blog.id}
                        delay={index * 0.15}
                        className="flex flex-col md:flex-row overflow-hidden cursor-pointer"
                    >
                        <div className="md:w-1/3 aspect-video md:aspect-auto overflow-hidden">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="flex-1 p-6 flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="px-2 py-1 bg-accent/10 text-accent rounded-md text-xs font-medium">
                                    {blog.category}
                                </span>
                                <span className="text-xs text-text-tertiary">{blog.date}</span>
                            </div>
                            <h3 className="text-lg font-semibold text-text-primary mb-2">
                                {blog.title}
                            </h3>
                            <p className="text-text-secondary text-sm">
                                {blog.excerpt}
                            </p>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}
