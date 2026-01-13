import { motion } from 'framer-motion'
import SectionTitle from '../components/ui/SectionTitle'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { shopData } from '../data/content'

export default function ShopPage() {
    return (
        <div className="w-full max-w-content pt-24 pb-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <SectionTitle className="mb-4">Products for you</SectionTitle>
                <p className="text-text-secondary">Digital assets and resources for designers</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
                {shopData.map((product, index) => (
                    <Card key={product.id} delay={index * 0.15} className="overflow-hidden">
                        <div className="aspect-video overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-semibold text-text-primary">
                                    {product.title}
                                </h3>
                                <span className="text-lg font-bold text-accent">
                                    {product.price}
                                </span>
                            </div>
                            <p className="text-text-secondary text-sm mb-4">
                                {product.description}
                            </p>
                            <Button variant="secondary" className="w-full">
                                View Product
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}
