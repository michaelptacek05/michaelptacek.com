import Link from "next/link";
import { IoHeart } from "react-icons/io5";
import { GoRepoForked } from "react-icons/go";
import Container from "../../Container";

export default function Footer() {
    return (
        <footer className="border-t border-border mt-auto">
            <Container className="flex h-16 items-center justify-between">
                <span className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Built with{" "}
                    <IoHeart className="text-red-500 shrink-0" size={11} />
                    {" "}by Michael
                </span>

                <a
                    href="mailto:mptacek005@gmail.com"
                    className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                    mptacek005@gmail.com
                </a>

                <Link
                    href="https://github.com/michaelptacek05/michaelptacek.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                    This website is{" "}
                    <span className="underline underline-offset-2 decoration-primary text-primary">
                        open source
                    </span>
                    <GoRepoForked size={13} />
                </Link>
            </Container>
        </footer>
    );
}
