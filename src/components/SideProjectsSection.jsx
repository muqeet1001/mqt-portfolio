import SectionTitle from './ui/SectionTitle'
import ProjectLink from './ui/ProjectLink'
import { sideProjects } from '../data/content'

export default function SideProjectsSection() {
    return (
        <section className="w-full max-w-content py-8 px-4">
            <SectionTitle className="mb-6">Side Projects</SectionTitle>

            <div className="space-y-1">
                {sideProjects.map((project, index) => (
                    <ProjectLink
                        key={project.id}
                        title={project.title}
                        logo={project.logo}
                        href={project.link}
                        external={project.external}
                        delay={index * 0.1}
                    />
                ))}
            </div>
        </section>
    )
}
