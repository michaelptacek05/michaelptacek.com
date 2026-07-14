import type { Metadata } from "next";
import { PageClients } from "../components/pages/Clients/PageClients";

export const metadata: Metadata = {
    title: "Clients",
    description:
        "Clients I've worked with as a freelance software engineer in Prague. Websites I've designed, built, and continue to run.",
};

export default function ClientsPage() {
    return <PageClients />;
}
