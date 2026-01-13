import Navbar from './Navbar'
import FloatingCTA from './FloatingCTA'
import SocialDock from './SocialDock'

export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-background relative">
            {/* Blur gradient border effect */}
            <div className="fixed inset-0 pointer-events-none z-30">
                {/* Top blur */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background via-background/80 to-transparent" />
                {/* Bottom blur */}
                <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-background via-background/90 to-transparent" />
            </div>

            {/* Navigation */}
            <Navbar />

            {/* Social Dock (Desktop only) */}
            <SocialDock />

            {/* Main Content - Centered container */}
            <main className="relative z-10 flex flex-col items-center w-full min-h-screen pb-32">
                <div className="w-full max-w-content">
                    {children}
                </div>
            </main>

            {/* Floating CTA */}
            <FloatingCTA />
        </div>
    )
}
