import Link from "next/link";
import { ThemeToggle } from "./HeaderThemeToggle";
import Container from "../../Container";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full">
            <Container className="flex h-16 items-center justify-between">
                <Link
                    href="/"
                    className="text-xl font-bold text-slate-900 dark:text-white"
                >
                    Portfolio
                </Link>
                <div className="flex items-center gap-6">
                    <ThemeToggle />
                </div>
            </Container>
        </header>
    );
}
