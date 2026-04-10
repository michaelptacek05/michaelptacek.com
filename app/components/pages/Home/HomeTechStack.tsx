import { ContentContainer } from "../../ContentContainer";
import { Badge } from "@/components/ui/badge";
import { SiAstro, SiDocker, SiExpress, SiFigma, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPrisma, SiReact, SiSass, SiShadcnui, SiTailwindcss, SiTypescript } from "react-icons/si";
import { LiaAdobe } from "react-icons/lia";
import { SectionHeader } from "../../SectionHeader";

const techStack = [
    {
        name: "React",
        icon: <SiReact />
    },
    {
        name: "Next.js",
        icon: <SiNextdotjs />
    },
    {
        name: "Astro.js",
        icon: <SiAstro />
    },
    {
        name: "Express.js",
        icon: <SiExpress />
    },
    {
        name: "TypeScript",
        icon: <SiTypescript />
    },
    {
        name: "Postgresql",
        icon: <SiPostgresql />
    },
    {
        name: "Prisma",
        icon: <SiPrisma />
    },
    {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />
    },
    {
        name: "SASS",
        icon: <SiSass />
    },
    {
        name: "shadcn/ui",
        icon: <SiShadcnui />
    },
    {
        name: "Docker",
        icon: <SiDocker />
    },
    {
        name: "Figma",
        icon: <SiFigma />
    },
    {
        name: "Adobe",
        icon: <LiaAdobe />
    },
]

export default function HomeTechStack() {
    return (
        <section>
            <ContentContainer>
                <SectionHeader heading="Tech Stack" text="Technologies and tools I work with:" />
                <div className="flex flex-wrap pt-5 gap-2"> 
                    {techStack.map((tech, index) => (
                        <Badge variant="outline" className="font-mono text-sm" key={index}>
                            {tech.icon}
                            {tech.name}
                        </Badge>
                    ))}
                </div>
            </ContentContainer>
        </section>
    );
}