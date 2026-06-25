import { ContentContainer } from "../../ContentContainer";
import { SectionHeader } from "../../SectionHeader";
import { ProjectCard } from "../../ProjectCard";

const PROJECTS = [
    {
        name: "Message Board",
        description:
            "Live messaging board with an iPhone-style chat interface and real-time updates, built with Next.js, Socket.io, and Prisma/PostgreSQL, containerized with Docker.",
        href: "https://messages.michaelptacek.com",
    },
    {
        name: "REST API Store System",
        description:
            "Frontend application for managing products of a store system, communicating with a REST API running via Docker. Built with Next.js, React, TypeScript, and Tailwind CSS.",
        href: "https://github.com/michaelptacek05/obchod",
    },
];

export function HomeProjects() {
    return (
        <section>
            <ContentContainer>
                <SectionHeader
                    heading="Projects"
                    text="These are projects which I have worked on during my career:"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {PROJECTS.map((project) => (
                        <ProjectCard
                            key={project.name}
                            name={project.name}
                            description={project.description}
                            href={project.href}
                        />
                    ))}
                </div>
            </ContentContainer>
        </section>
    );
}
