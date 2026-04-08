import { Badge } from "@/components/ui/badge";
import { ContentContainer } from "../../ContentContainer";
import { SectionHeader } from "../../SectionHeader";

const EXPERIENCES = [
    {
        company: "MagicWare",
        role: "Frontend Developer & UX/UI Designer",
        period: "Feb 2024 - Present",
        points: [
            "Developed custom websites, including integrated reservation systems for travel agencies.",
            "Designed user experiences (UX) and user interfaces (UI) including wireframing for various systems and mobile applications.",
            "Executed graphic design tasks and prepared materials for print.",
            "Managed helpdesk inquiries and provided technical support.",
        ],
        stack: [
            "React",
            "JavaScript",
            "Rest API",
            "Tailwind/SCSS",
            "Figma",
            "Adobe Suite",
        ],
    },
    {
        company: "Freelance Development",
        role: "Freelance Development",
        period: "April 2024 - Present",
        points: [
            "Created custom websites for small businesses including CMS and e-commerce solutions.",
            "Graphic design and branding for clients, including logo creation and marketing materials.",
            "Provided technical support and maintenance for client websites.",
            "Collaborated with clients to understand their needs and deliver tailored solutions.",
        ],
        stack: [
            "Next.js",
            "Astro.js",
            "Node.js",
            "PostgreSQL",
            "Docker",
            "Tailwind",
            "Figma",
        ],
    },
];

export default function HomeExperience() {
    return (
        <section>
            <ContentContainer>
                <SectionHeader
                    heading="Experience"
                    text="My professional journey and the companies I've worked with:"
                />

                <div className="mt-8 space-y-12">
                    {EXPERIENCES.map((exp, index) => (
                        <div
                            key={index}
                            className="relative pl-8"
                        >
                            <div className="absolute -left-[0px] top-2 w-3 h-3 bg-primary rounded-full" />

                            <div className="flex flex-wrap items-baseline gap-2 mb-1">
                                <h3 className="text-xl font-bold font-mono">
                                    {exp.company}
                                </h3>
                            </div>

                            <div className="text-sm text-gray-400 mb-4">
                                <span className="font-semibold font-mono">
                                    {exp.role}
                                </span>
                                <span className="mx-2">•</span>
                                <span className="font-mono">
                                    {exp.period}
                                </span>
                            </div>

                            <ul className="list-disc list-inside space-y-2 font-mono text-sm text-gray-600 dark:text-gray-300 mb-6">
                                {exp.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap pt-5 gap-2">
                                {exp.stack.map((tech, i) => (
                                    <Badge variant="outline" className="font-mono text-sm" key={i}>
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </ContentContainer>
        </section>
    );
}
