import { ContentContainer } from "../../ContentContainer";
import { SectionHeader } from "../../SectionHeader";
import { ClientCard } from "../../ClientCard";
import { CLIENTS } from "../../../lib/clients";

export function PageClients() {
    return (
        <section>
            <ContentContainer>
                <SectionHeader
                    heading="Clients"
                    text="Businesses I've worked with — what we built together and where to find it:"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {CLIENTS.map((client) => (
                        <ClientCard
                            key={client.name}
                            name={client.name}
                            description={client.description}
                            href={client.href}
                        />
                    ))}
                </div>
            </ContentContainer>
        </section>
    );
}
