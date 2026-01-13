import { motion } from 'framer-motion'
import SectionTitle from '../components/ui/SectionTitle'
import Card from '../components/ui/Card'
import { songsData } from '../data/content'

export default function SongsPage() {
    return (
        <div className="w-full max-w-content pt-24 pb-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <SectionTitle className="mb-4">Songs and Playlists</SectionTitle>
                <p className="text-text-secondary">Music that I listen to - my therapy for different moods</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
                {songsData.map((playlist, index) => (
                    <a
                        key={playlist.id}
                        href={playlist.spotifyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Card delay={index * 0.15} className="overflow-hidden group">
                            <div className="aspect-square overflow-hidden relative">
                                <img
                                    src={playlist.cover}
                                    alt={playlist.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Play button overlay */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-text-primary mb-1">
                                    {playlist.title}
                                </h3>
                                <p className="text-sm text-text-secondary">
                                    {playlist.description}
                                </p>
                            </div>
                        </Card>
                    </a>
                ))}
            </div>
        </div>
    )
}
