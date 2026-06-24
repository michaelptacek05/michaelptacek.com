import { ContentContainer } from "../../ContentContainer";
import { SectionHeader } from "../../SectionHeader";
import { Badge } from "@/components/ui/badge";

const EDUCATION = [
    {
        school: "Secondary School of Electrical Engineering, Multimedia & IT",
        field: "Information Technology",
        period: "2021 – 2025",
        note: "Database development (SQL, PHP), hardware and software administration",
        upcoming: false,
    },
    {
        school: "CZU Prague (PEF)",
        field: "Information Technology",
        period: "Sep 2026",
        note: "Combined form",
        upcoming: true,
    },
];

export function HomeEducation() {
    return (
        <section>
            <ContentContainer>
                <SectionHeader heading="Education" />
                <div className="space-y-5">
                    {EDUCATION.map((edu, i) => (
                        <div key={i}>
                            <div className="flex flex-wrap items-center justify-between gap-2 mb-0.5">
                                <h3 className="font-mono text-sm font-semibold text-foreground">
                                    {edu.field} —{" "}
                                    <span className="text-primary">{edu.school}</span>
                                </h3>
                                <div className="flex items-center gap-2">
                                    {edu.upcoming && (
                                        <Badge className="font-mono text-xs bg-primary/10 text-primary border-primary/30 hover:bg-primary/10">
                                            Upcoming
                                        </Badge>
                                    )}
                                    <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                                        {edu.period}
                                    </span>
                                </div>
                            </div>
                            <p className="font-mono text-xs text-muted-foreground">{edu.note}</p>
                        </div>
                    ))}
                </div>
            </ContentContainer>
        </section>
    );
}
