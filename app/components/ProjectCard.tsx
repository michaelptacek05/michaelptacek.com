import Link from "next/link";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";

interface ProjectCardProps {
    name: string;
    description: string;
    href: string;
}

export function ProjectCard({ name, description, href }: ProjectCardProps) {
    return (
        <Link href={href} className="block no-underline group">
            <Card className="transition-all duration-300 hover:border-primary/50 hover:bg-accent/50 cursor-pointer h-full border-foreground/10 bg-card text-card-foreground">
                <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                        {name}
                    </CardTitle>
                    <CardDescription>
                        {description}
                    </CardDescription>
                </CardHeader>
            </Card>
        </Link>
    );
}
