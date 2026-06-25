import { Badge } from "@/components/ui/badge";
import { ContentContainer } from "../../ContentContainer";
import { SectionHeader } from "../../SectionHeader";

interface ExperienceGroup {
    title: string;
    points: string[];
}

interface Experience {
    company: string;
    role: string;
    type: string;
    period: string;
    location?: string;
    groups: ExperienceGroup[];
    stack: string[];
}

const EXPERIENCES: Experience[] = [
    {
        company: "MagicWare",
        role: "UI/UX Designer / Frontend Developer",
        type: "Freelance",
        period: "Jan 2024 – Present",
        location: "Prague, Czechia · Hybrid",
        groups: [
            {
                title: "Frontend Development & React",
                points: [
                    "Enhancing existing systems by developing new features and building new pages using React.",
                    "Integrating frontend applications with APIs and working within a .NET CMS environment.",
                    "Creating modern websites with dynamic elements, optimizing for SEO, and actively solving complex technical challenges (e.g., within comprehensive reservation systems).",
                ],
            },
            {
                title: "Legacy Support & Helpdesk",
                points: [
                    "Providing ongoing technical support, troubleshooting, and continuous improvement for older web platforms.",
                    "Fixing bugs and optimizing code using HTML, SCSS, and jQuery, alongside managing and configuring CMS objects.",
                ],
            },
            {
                title: "UX/UI Design & Prototyping",
                points: [
                    "Designing wireframes and interactive prototypes using Figma and Adobe XD for new systems and features.",
                    "Analyzing and modernizing legacy platforms to enhance user-friendliness, including conducting usability testing for web applications to ensure an optimal user experience.",
                ],
            },
            {
                title: "Graphic & Visual Design",
                points: [
                    "Creating a wide range of digital and print materials, including brochures, flyers, certificates, logos, business cards, and product mockups.",
                    "Proficient in utilizing the Adobe Creative Suite (InDesign, Illustrator, Photoshop) to deliver high-quality visual assets.",
                ],
            },
        ],
        stack: ["React", "JavaScript", "HTML", "SCSS", "jQuery", ".NET CMS", "Figma", "Adobe XD", "Adobe Suite"],
    },
    {
        company: "Freelance",
        role: "Freelance Web Developer",
        type: "Freelance",
        period: "Apr 2024 – Present",
        groups: [
            {
                title: "Full-Stack Web Development",
                points: [
                    "Building modern, scalable web applications and blazing-fast websites from scratch using Next.js and Astro.",
                    "Handling the entire development cycle, from frontend dynamics to backend integrations and deployment.",
                ],
            },
            {
                title: "Technical SEO & Performance",
                points: [
                    "Optimizing websites for maximum loading speed and top Core Web Vitals scores.",
                    "Implementing semantic HTML, accessibility standards, and advanced technical SEO to ensure optimal search engine visibility.",
                ],
            },
            {
                title: "UX/UI Design",
                points: [
                    "Designing intuitive user interfaces and complete experiences from initial wireframes to high-fidelity interactive prototypes in Figma.",
                    "Focusing on user-centric design, responsive layouts, and maximizing conversion rates.",
                ],
            },
            {
                title: "Server Management & Hosting",
                points: [
                    "Operating and maintaining Virtual Private Servers (VPS) to provide secure, reliable hosting solutions for clients.",
                    "Handling server configuration, ongoing maintenance, domain management, and seamless application deployments.",
                ],
            },
            {
                title: "Project Delivery",
                points: [
                    "Managing the entire lifecycle of freelance projects independently from concept to launch.",
                    "Translating clients' business requirements into functional, maintainable technical solutions and providing continuous support.",
                ],
            },
        ],
        stack: ["Next.js", "Astro.js", "Node.js", "PostgreSQL", "Docker", "Tailwind", "Figma", "VPS"],
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

                <div className="relative mt-8">
                    <div className="absolute left-[5px] top-2 bottom-2 w-px bg-border" />

                    <div className="space-y-10">
                        {EXPERIENCES.map((exp, index) => (
                            <div key={index} className="relative pl-8">
                                <div className="absolute left-0 top-[6px] w-[11px] h-[11px] rounded-full bg-primary ring-2 ring-background" />

                                <div className="rounded-lg border border-border bg-card p-5 shadow-sm">
                                    <div className="flex flex-wrap items-start justify-between gap-2 mb-0.5">
                                        <h3 className="text-base font-bold font-mono text-foreground">
                                            {exp.company}
                                        </h3>
                                        <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                                            {exp.period}
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-4">
                                        <p className="font-mono text-sm text-primary">
                                            {exp.role}
                                        </p>
                                        <span className="text-muted-foreground/40 text-xs">·</span>
                                        <span className="font-mono text-xs text-muted-foreground">
                                            {exp.type}
                                        </span>
                                        {exp.location && (
                                            <>
                                                <span className="text-muted-foreground/40 text-xs">·</span>
                                                <span className="font-mono text-xs text-muted-foreground">
                                                    {exp.location}
                                                </span>
                                            </>
                                        )}
                                    </div>

                                    {exp.groups.length > 0 && (
                                        <div className="space-y-4 mb-5">
                                            {exp.groups.map((group, gi) => (
                                                <div key={gi}>
                                                    <p className="font-mono text-xs font-semibold text-foreground uppercase tracking-wide mb-1.5">
                                                        {group.title}
                                                    </p>
                                                    <ul className="space-y-1.5">
                                                        {group.points.map((point, pi) => (
                                                            <li key={pi} className="flex gap-2 font-mono text-sm text-muted-foreground">
                                                                <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                                                                {point}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    <div className="flex flex-wrap gap-1.5">
                                        {exp.stack.map((tech, i) => (
                                            <Badge variant="outline" className="font-mono text-xs" key={i}>
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </ContentContainer>
        </section>
    );
}
