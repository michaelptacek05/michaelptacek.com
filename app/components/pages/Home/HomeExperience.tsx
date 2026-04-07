import { ContentContainer } from "../../ContentContainer";
import { SectionHeader } from "../../SectionHeader";

const EXPERIENCES = [
    {
        company: "NordSecurity",
        role: "Senior Frontend Developer",
        period: "Jan 2024 - Present",
        description:
            "NordPass is a secure password manager that auto-fills logins and forms and lets you access it all from anywhere.",
        points: [
            "Building and maintaining NordPass",
            "Identifying key product expansion opportunities and building PoCs",
            "Collaborating with cross-functional teams",
            "Conducting technical interviews",
        ],
        stack: [
            "React",
            "TypeScript",
            "Electron",
            "Redux",
            "Tailwind",
            "Storybook",
        ],
    },
    {
        company: "t",
        role: "Senior Frontend Developer",
        period: "Jan 2024 - Present",
        description:
            "NordPass is a secure password manager that auto-fills logins and forms and lets you access it all from anywhere.",
        points: [
            "Building and maintaining NordPass",
            "Identifying key product expansion opportunities and building PoCs",
            "Collaborating with cross-functional teams",
            "Conducting technical interviews",
        ],
        stack: [
            "React",
            "TypeScript",
            "Electron",
            "Redux",
            "Tailwind",
            "Storybook",
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
                        </div>
                    ))}
                </div>
            </ContentContainer>
        </section>
    );
}
