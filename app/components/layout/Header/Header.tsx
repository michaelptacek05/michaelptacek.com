import Link from "next/link";
import { ThemeToggle } from "./HeaderThemeToggle";
import Container from "../../Container";

export default function Header() {
    return (
        <header className="top-0 z-50 w-full">
            <Container className="flex h-16 items-center justify-between">
                <Link
                    href="/"
                    className="text-xl font-thin tracking-widest text-slate-900 dark:text-white"
                >
                    MP
                </Link>
                <div className="flex items-center gap-6">
                    <Link
                        href="/clients"
                        className="font-sans text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
                    >
                        Clients
                    </Link>
                    <ThemeToggle />
                </div>
            </Container>
        </header>
    );
}
