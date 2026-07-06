import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";

interface ServiceCardProps {
    number: string;
    title: string;
    description: string;
}

export function ServiceCard({ number, title, description }: ServiceCardProps) {
    return (
        <Card className="h-full border border-primary/30 shadow-none">
            <CardHeader>
                <span
                    className="font-mono text-5xl font-bold leading-none text-primary"
                    aria-hidden="true"
                >
                    {number}
                </span>
                <CardTitle className="mt-3 font-sans text-sm font-medium uppercase tracking-wider">
                    {title}
                </CardTitle>
                <CardDescription className="font-mono">
                    {description}
                </CardDescription>
            </CardHeader>
        </Card>
    );
}
