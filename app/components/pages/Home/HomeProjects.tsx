import { ContentContainer } from "../../ContentContainer";
import { SectionHeader } from "../../SectionHeader";
import { ProjectCard } from "../../ProjectCard";

const PROJECTS = [
    {
        name: "Poradci Choceň",
        description:
            "Website build for financial advisors using Astro.js and hosted on my VPS using containerization.",
        href: "https://poradci-chocen.cz/",
    },
    {
        name: "Barbershop U Lazebníka",
        description: "Local barbershop website with a modern design.",
        href: "https://barbershopulazebnika.cz/",
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
