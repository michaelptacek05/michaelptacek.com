import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://michaelptacek.com"),
    title: {
        default: "Michael Ptáček · Frontend Developer & UI/UX Designer",
        template: "%s | Michael Ptáček",
    },
    description:
        "Software engineer based in Prague, Czechia. Specializing in frontend development, UI/UX design, and building modern web applications with React, Next.js, and Astro.",
    keywords: [
        "Michael Ptáček",
        "Frontend Developer",
        "UI/UX Designer",
        "React",
        "Next.js",
        "Astro",
        "Prague",
        "Czech Republic",
        "Web Developer",
        "Software Engineer",
    ],
    authors: [{ name: "Michael Ptáček", url: "https://michaelptacek.com" }],
    creator: "Michael Ptáček",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://michaelptacek.com",
        siteName: "Michael Ptáček",
        title: "Michael Ptáček · Frontend Developer & UI/UX Designer",
        description:
            "Software engineer based in Prague, Czechia. Specializing in frontend development, UI/UX design, and building modern web applications.",
        images: [
            {
                url: "/avatar.jpeg",
                width: 400,
                height: 400,
                alt: "Michael Ptáček",
            },
        ],
    },
    twitter: {
        card: "summary",
        title: "Michael Ptáček · Frontend Developer & UI/UX Designer",
        description:
            "Software engineer based in Prague, Czechia. Specializing in frontend development and UI/UX design.",
        images: ["/avatar.jpeg"],
    },
    alternates: {
        canonical: "https://michaelptacek.com",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
            suppressHydrationWarning
        >   
            <body className="min-h-full flex flex-col">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Header />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
