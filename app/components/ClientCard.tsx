import { FiArrowUpRight } from "react-icons/fi";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import type { Client } from "../lib/clients";

export function ClientCard({ name, description, href }: Client) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="block no-underline group"
        >
            <Card className="transition-all duration-300 hover:bg-primary/5 cursor-pointer h-full border border-primary/30 shadow-none">
                <CardHeader>
                    <CardTitle className="flex items-center gap-1 group-hover:text-primary transition-colors">
                        {name}
                        <FiArrowUpRight className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
            </Card>
        </a>
    );
}
