import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ContentContainer } from "../../ContentContainer";
import { SectionHeader } from "../../SectionHeader";
import { ClientCard } from "../../ClientCard";
import { CLIENTS } from "../../../lib/clients";

export function HomeClients() {
    const featured = CLIENTS.filter((client) => client.featured).slice(0, 2);

    return (
        <section>
            <ContentContainer>
                <SectionHeader
                    heading="Clients"
                    text="A few of the people I've built and run websites for:"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {featured.map((client) => (
                        <ClientCard
                            key={client.name}
                            name={client.name}
                            description={client.description}
                            href={client.href}
                        />
                    ))}
                </div>
                <div className="mt-6">
                    <Button
                        asChild
                        variant="outline"
                        className="font-mono border-primary/30 hover:bg-primary/5"
                    >
                        <Link href="/clients">View all clients →</Link>
                    </Button>
                </div>
            </ContentContainer>
        </section>
    );
}
