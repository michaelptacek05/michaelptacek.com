import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link
                    href="/"
                    className="text-xl font-bold text-slate-900 dark:text-white"
                >
                    Portfolio
                </Link>
                <div className="flex items-center gap-6">
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
