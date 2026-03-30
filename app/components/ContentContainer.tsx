import { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

export function ContentContainer({ children, className = "" }: ContainerProps) {
    return (
        <div
            className={`mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 py-12 ${className}`}
        >
            {children}
        </div>
    );
}
