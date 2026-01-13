import { motion } from 'framer-motion'
import SectionTitle from '../components/ui/SectionTitle'
import Card from '../components/ui/Card'
import { gamesData } from '../data/content'

export default function PlaygroundPage() {
    return (
        <div className="w-full max-w-content pt-24 pb-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <SectionTitle className="mb-4">My Playground</SectionTitle>
                <p className="text-text-secondary max-w-md mx-auto">
                    Apart from the regular work, I spend my time learning new stuffs, playing games, or creating music. Explore my entire collection and lifestyle.
                </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {gamesData.map((game, index) => (
                    <Card
                        key={game.id}
                        delay={index * 0.1}
                        className="overflow-hidden group cursor-pointer"
                    >
                        <div className="aspect-square overflow-hidden relative">
                            <img
                                src={game.image}
                                alt={game.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            {/* Overlay with game name */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                                <h3 className="font-semibold text-white text-sm">
                                    {game.name}
                                </h3>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}
