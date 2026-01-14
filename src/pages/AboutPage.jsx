import { motion } from 'framer-motion'
import { useState } from 'react'
import SectionTitle from '../components/ui/SectionTitle'
import { heroData, aboutData } from '../data/content'

const Highlight = ({ children }) => (
    <span className="inline-flex px-3 py-1 mx-1 rounded-full bg-gradient-to-b from-black/10 to-transparent dark:from-white/10 dark:to-transparent border border-black/20 dark:border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] backdrop-blur-md text-sm font-semibold hover:scale-105 hover:shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300 cursor-pointer text-text-primary">
        {children}
    </span>
)

const TechBadge = ({ name, color, icon }) => (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 mx-1 rounded-md bg-[#1a1a1a] border border-white/10 shadow-sm hover:border-white/20 transition-all cursor-default">
        <span style={{ color }} className="w-4 h-4 flex items-center justify-center">
            {icon}
        </span>
        <span className="text-sm font-semibold text-white/90">{name}</span>
    </span>
)

const skillList = [
    { name: 'HTML5', color: '#E34F26', icon: <svg className="w-full h-full" viewBox="0 0 128 128"><path fill="currentColor" d="M116.8 19.1L107 108.8l-43 11.9l-43.1-11.9l-9.7-89.7h95.6zM35.6 46.1l1.7 18h32.5l-1.5 16.2l-24.3 8l-24.3-8l-1.1-12.7h-18l2.6 30.6l39.8 11l39.8-11l5-56.1H35.6z" /></svg> },
    { name: 'CSS3', color: '#1572B6', icon: <svg className="w-full h-full" viewBox="0 0 128 128"><path fill="currentColor" d="M116.8 19.1L107 108.8l-43 11.9l-43.1-11.9l-9.7-89.7h95.6zm-18.7 18H31.4l1.6 18h63.7l-1.6 18H34.6l1.6 18l27.8 7.7l27.8-7.7l5-56.1l-8.7-17.9z" /></svg> },
    { name: 'JavaScript', color: '#F7DF1E', isImage: true, imagePath: '/assets/jslogo.png' },
    { name: 'Tailwind CSS', color: '#38B2AC', icon: <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" /></svg> },
    { name: 'React', color: '#61DAFB', icon: <svg className="w-full h-full" viewBox="-11.5 -10.23174 23 20.46348"><circle cx="0" cy="0" r="2.05" fill="currentColor" /><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2" /><ellipse rx="11" ry="4.2" transform="rotate(60)" /><ellipse rx="11" ry="4.2" transform="rotate(120)" /></g></svg> },
    { name: 'Node.js', color: '#3C873A', isImage: true, imagePath: '/assets/nodejs.png' },
    { name: 'Java', color: '#E76F00', icon: <svg className="w-full h-full" viewBox="0 0 128 128"><path fill="currentColor" d="M101.4 86.4c-1.5-2.2-4.6-3.8-8.8-3.8-2.6 0-5 .6-6.9 1.6 2.3-3.6 3.6-7.8 3.6-12.3 0-12.6-10.2-22.8-22.8S43.6 59.3 43.6 71.9c0 4.5 1.3 8.7 3.6 12.3-1.9-1-4.3-1.6-6.9-1.6-4.2 0-7.3 1.6-8.8 3.8-2.1 3.1-1.3 7 1.8 9.1s7 1.3 9.1-1.8c.4-.6.7-1.3.9-2c2.4 1.3 5.2 2.1 8.2 2.1 8.8 0 16.3-5 20.1-12.3 3.8 7.3 11.3 12.3 20.1 12.3 3 0 5.8-.8 8.2-2.1.2.7.5 1.4.9 2 2.1 3.1 6 3.9 9.1 1.8s3.9-6 1.8-9.1z" /></svg> },
    { name: 'Express.js', color: '#ffffff', icon: <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor"><path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm0-22.8c6 0 10.8 4.8 10.8 10.8s-4.8 10.8-10.8 10.8-10.8-4.8-10.8-10.8S6 1.2 12 1.2z" /></svg> },
    { name: 'MongoDB', color: '#47A248', icon: <svg className="w-full h-full" viewBox="0 0 128 128" fill="currentColor"><path d="M85.4 34.6c-4.4-10-11-19.1-19.4-26.6-1.5-1.3-3.8-1.3-5.3 0-8.4 7.5-15 16.6-19.4 26.6-8.9 20.4-8.9 44.4 0 64.8 4.4 10 11 19.1 19.4 26.6 1.5 1.3 3.8 1.3 5.3 0 8.4-7.5 15-16.6 19.4-26.6 8.9-20.4 8.9-44.4 0-64.8zM64 108.8a44.8 44.8 0 01-19.2-44.8c4.4-12.8 11.1-24.1 19.2-33.3 8.1 9.2 14.8 20.5 19.2 33.3a44.8 44.8 0 01-19.2 44.8z" /></svg> },
]

const SkillBadge = ({ name, icon, href, color, isImage, imagePath }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-sm bg-black/5 dark:bg-white/10 border border-dashed border-black/20 dark:border-white/20 py-1 px-2.5 rounded-md text-black dark:text-white hover:scale-105 transition-all duration-300 align-middle shadow-sm group mx-0.5"
    >
        <div
            className="w-4 h-4 flex-shrink-0 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{
                color: isImage ? 'transparent' : color,
                filter: isImage ? 'none' : `drop-shadow(0 0 1px rgba(0,0,0,0.8))`
            }}
        >
            {isImage ? (
                <img src={imagePath} alt={name} className="w-full h-full object-contain" />
            ) : icon}
        </div>
        <p className="ml-2 text-[13px] font-bold leading-none tracking-tight">{name}</p>
    </a>
)

export default function AboutPage() {
    // Icons for badges
    const icons = {
        react: skillList.find(s => s.name === 'React'),
        node: skillList.find(s => s.name === 'Node.js'),
        mongo: skillList.find(s => s.name === 'MongoDB'),
        js: skillList.find(s => s.name === 'JavaScript'),
    }

    return (
        <div className="w-full max-w-4xl pt-32 pb-12 px-8 mx-auto">
            {/* Header Greeting */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-10"
            >
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                    Hi, I'm Muqeet — <span className="text-[#888] font-semibold">A Full Stack web developer.</span>
                </h1>
            </motion.div>

            {/* Rich Bio Paragraph (Same to same style as snippet) */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-12"
            >
                <div className="flex flex-wrap items-center gap-x-1.5 gap-y-3 text-lg md:text-xl text-[#999] leading-relaxed font-medium">
                    <span className="whitespace-pre-wrap">I build interactive web apps using </span>
                    <SkillBadge name="JavaScript" {...icons.js} href="#" />
                    <span className="whitespace-pre-wrap">, </span>
                    <SkillBadge name="React" {...icons.react} href="#" />
                    <span className="whitespace-pre-wrap">, </span>
                    <SkillBadge name="Node.js" {...icons.node} href="#" />
                    <span className="whitespace-pre-wrap"> and </span>
                    <SkillBadge name="MongoDB" {...icons.mongo} href="#" />
                    <span className="whitespace-pre-wrap">. With a focus on </span>
                    <b className="whitespace-pre-wrap text-white font-bold">AI agent workflows</b>
                    <span className="whitespace-pre-wrap">. Enthusiastic about </span>
                    <b className="whitespace-pre-wrap text-white font-bold">Problem Solving</b>
                    <span className="whitespace-pre-wrap">, driven by a keen eye for design.</span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 mt-12">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2.5 px-6 py-2.5 bg-transparent border border-white/10 rounded-xl text-[14px] font-semibold text-white hover:bg-white/5 transition-colors"
                    >
                        <svg className="w-4 h-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        Resume / CV
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2.5 px-6 py-2.5 bg-white text-black rounded-xl text-[14px] font-bold shadow-lg hover:bg-[#eee] transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                        Get in touch
                    </motion.button>
                </div>
            </motion.div>

            <div className="h-20" />
        </div>
    )
}
