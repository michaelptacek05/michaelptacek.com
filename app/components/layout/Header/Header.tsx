import Link from "next/link";
import { ThemeToggle } from "./HeaderThemeToggle";
import Container from "../../Container";
import Logo from "../../Logo";

export default function Header() {
    return (
        <header className="top-0 z-50 w-full">
            <Container className="flex h-16 items-center justify-between">
                <Link
                    href="/"
                    className="text-slate-900 transition-opacity hover:opacity-60 dark:text-white"
                >
                    <Logo />
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
