import { ContentContainer } from "../../ContentContainer";
import { SectionHeader } from "../../SectionHeader";
import { ServiceCard } from "../../ServiceCard";

const SERVICES = [
    {
        number: "01",
        title: "I run what I build",
        description:
            "I don't hand over a zip file and disappear. I launch your site, monitor it, watch the error logs, ship fixes, and keep everything updated. Handled daily, not once a quarter.",
    },
    {
        number: "02",
        title: "Rapid prototyping",
        description:
            "Using AI-assisted tooling, I turn your idea into a clickable web prototype in days, not weeks. You see exactly how it will work before any production code is written.",
    },
    {
        number: "03",
        title: "Unified administration",
        description:
            "I build custom sitebuilders so you can manage multiple websites from one place. One login, one dashboard, consistent content everywhere.",
    },
];

const PROCESS = [
    {
        step: "1",
        title: "Intro call",
        description:
            "We talk about your goals, scope, and budget. No commitment.",
    },
    {
        step: "2",
        title: "Prototype",
        description:
            "You get a clickable prototype to test the idea before we build.",
    },
    {
        step: "3",
        title: "Build",
        description:
            "I develop the real thing, with regular check-ins along the way.",
    },
    {
        step: "4",
        title: "Launch & ongoing care",
        description:
            "I deploy it, monitor it, and keep it running and updated.",
    },
];

export function HomeServices() {
    return (
        <section>
            <ContentContainer>
                <SectionHeader
                    heading="Services"
                    text="What I can do for your web project:"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {SERVICES.map((service) => (
                        <ServiceCard
                            key={service.number}
                            number={service.number}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </ContentContainer>
        </section>
    );
}
