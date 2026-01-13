import SectionTitle from './ui/SectionTitle'
import Card from './ui/Card'
import { testimonialsData } from '../data/content'

export default function TestimonialsSection() {
    return (
        <section className="w-full max-w-content py-8 px-4">
            <SectionTitle className="mb-6">Social Validation</SectionTitle>

            <div className="space-y-4">
                {testimonialsData.map((testimonial, index) => (
                    <Card
                        key={testimonial.id}
                        delay={index * 0.15}
                        className="p-6"
                    >
                        <blockquote className="text-text-primary text-base mb-4 leading-relaxed">
                            "{testimonial.quote}"
                        </blockquote>

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.author}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <p className="font-semibold text-text-primary text-sm">
                                    {testimonial.author}
                                </p>
                                <p className="text-xs text-text-secondary">
                                    {testimonial.role}
                                </p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    )
}
