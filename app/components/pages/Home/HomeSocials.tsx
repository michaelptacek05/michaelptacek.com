import Link from "next/link";
import { ContentContainer } from "../../ContentContainer";
import { SectionHeader } from "../../SectionHeader";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IconType } from "react-icons";

interface Social {
    label: string;
    href: string;
    icon: IconType;
    color?: string;
}

const SOCIALS: Social[] = [
    {
        label: "GitHub",
        href: "https://github.com/michaelptacek05",
        icon: FaGithub,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/ptacekmichael",
        icon: FaLinkedin,
        color: "text-blue-500",
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/michal.718",
        icon: FaInstagram,
    },
];

export function HomeSocials() {
    return (
        <section>
            <ContentContainer>
                <SectionHeader
                    heading="Find me on"
                    text="You can find me on the following platforms:"
                />
                <div className="flex flex-wrap gap-3">
                    {SOCIALS.map(({ label, href, icon: Icon, color }) => (
                        <Link
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={[
                                "inline-flex items-center gap-2 rounded-full border border-border",
                                "px-4 py-2 font-mono text-sm text-foreground",
                                "transition-colors hover:bg-muted hover:border-primary/40",
                            ].join(" ")}
                        >
                            <Icon className={color ?? "text-foreground"} size={15} />
                            {label}
                        </Link>
                    ))}
                </div>
            </ContentContainer>
        </section>
    );
}
