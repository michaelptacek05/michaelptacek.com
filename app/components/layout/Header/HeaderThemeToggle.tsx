"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState<boolean>(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (
                e.target instanceof HTMLInputElement ||
                e.target instanceof HTMLTextAreaElement
            )
                return;

            if (e.key.toLowerCase() === "t") {
                setTheme(resolvedTheme === "dark" ? "light" : "dark");
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [resolvedTheme, setTheme]);

    if (!mounted) {
        return <div className="w-10 h-10"></div>;
    }

    return (
        <div className="relative group flex justify-center">
            <button
                className="p-2.5 rounded-xl hover:bg-gray-500/30 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 transition-all focus:outline-none"
                onClick={() =>
                    setTheme(resolvedTheme === "dark" ? "light" : "dark")
                }
                aria-label="Toggle theme"
            >
                {resolvedTheme === "dark" ? (
                    <MdOutlineLightMode size={20} />
                ) : (
                    <MdOutlineDarkMode size={20} />
                )}
            </button>
            <div className="absolute top-full mt-3 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-50 flex items-center gap-2 bg-[#E5E7EB] text-gray-900 dark:bg-[#2D3748] dark:text-gray-300 px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap text-sm">
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-tt3 h-3 bg-[#E5E7EB] dark:bg-[#2D3748] rotate-45 rounded-sm"></div>
                <span className="relative z-10 font-mono font-medium">
                    Toggle theme
                </span>
                <kbd className="relative z-10 bg-[#D1D5DB] px-1.5 py-0.5 rounded text-xs font-mono font-bold text-gray-700">
                    T
                </kbd>
            </div>
        </div>
    );
}
