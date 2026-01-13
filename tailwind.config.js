/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                surface: 'var(--surface)',
                'text-primary': 'var(--text-primary)',
                'text-secondary': 'var(--text-secondary)',
                border: 'var(--border)',
                'border-light': 'var(--border-light)',
                accent: 'var(--accent)',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['Fragment Mono', 'monospace'],
            },
            maxWidth: {
                'content': '608px',
                'page': '1200px',
            },
            boxShadow: {
                'card': 'inset 0px -0.5px 1px 0px rgba(11, 19, 27, 0.3), 0px 0.64px 0.64px -0.94px rgba(0, 0, 0, 0.18), 0px 1.93px 1.93px -1.88px rgba(0, 0, 0, 0.17), 0px 5.1px 5.1px -2.8px rgba(0, 0, 0, 0.15), 0px 16px 16px -3.75px rgba(0, 0, 0, 0.06)',
                'button': 'rgba(158, 158, 158, 0.3) 0px 0px 0px 1px, rgba(0, 0, 0, 0.03) 0px 0.12px 0.08px 0px, rgba(0, 0, 0, 0.25) 0px 1px 0.7px 0px',
            },
            animation: {
                'wave': 'wave 2s ease-in-out infinite',
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'slide-up': 'slideUp 0.6s ease-out forwards',
            },
            keyframes: {
                wave: {
                    '0%, 100%': { transform: 'rotate(0deg)' },
                    '25%': { transform: 'rotate(20deg)' },
                    '75%': { transform: 'rotate(-20deg)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}
