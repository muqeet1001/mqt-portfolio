import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/ui/SectionTitle'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'

export default function ContactPage() {
    const [status, setStatus] = useState('') // '', 'submitting', 'success', 'error'

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('submitting')

        const formData = new FormData(e.target)

        try {
            // Replace this URL with your own unique Formspree endpoint
            // Go to https://formspree.io/ to create a free form and get your link
            // Example: https://formspree.io/f/xay......
            const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID_HERE', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })

            if (response.ok) {
                setStatus('success')
                e.target.reset()
            } else {
                setStatus('error')
            }
        } catch (error) {
            setStatus('error')
        }
    }

    return (
        <div className="w-full max-w-content pt-24 pb-12 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <SectionTitle className="mb-4">Get in Touch</SectionTitle>
                <p className="text-text-secondary max-w-md mx-auto">
                    Have a question or just want to say hi? sending an email to <span className="text-text-primary font-medium">abdul00muqeet@gmail.com</span> or use the form below.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="max-w-md mx-auto bg-surface/80 glass rounded-2xl shadow-card border border-border-light p-6 md:p-8"
            >
                {status === 'success' ? (
                    <div className="text-center py-12">
                        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-text-primary mb-2">Message Sent!</h3>
                        <p className="text-text-secondary">Thanks for reaching out. I'll get back to you soon.</p>
                        <button
                            onClick={() => setStatus('')}
                            className="mt-6 text-accent hover:underline text-sm"
                        >
                            Send another message
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <Input
                            label="Name"
                            name="name"
                            placeholder="John Doe"
                            required
                        />
                        <Input
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            required
                        />
                        <Input
                            label="Message"
                            name="message"
                            textarea
                            placeholder="What's on your mind?"
                            rows={4}
                            required
                        />

                        <div className="pt-2">
                            <Button
                                type="submit"
                                className="w-full justify-center"
                                disabled={status === 'submitting'}
                            >
                                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                            </Button>
                        </div>

                        {status === 'error' && (
                            <p className="text-red-500 text-sm text-center">
                                Oops! Something went wrong. Please try again or email me directly.
                            </p>
                        )}
                    </form>
                )}
            </motion.div>

            {/* Floating peace emoji */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="fixed bottom-6 right-6 z-40 lg:hidden"
            >
                <div className="flex items-center gap-2 px-4 py-2 bg-surface/95 glass rounded-full shadow-card border border-border-light">
                    <span className="text-2xl">✌️</span>
                    <span className="font-medium text-text-primary text-sm">Say Hi!</span>
                </div>
            </motion.div>
        </div>
    )
}
