import PageHome from "./components/pages/Home/PageHome";

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Michael Ptáček",
    url: "https://michaelptacek.com",
    image: "https://michaelptacek.com/avatar.jpeg",
    jobTitle: "Frontend Developer & UI/UX Designer",
    description:
        "Software engineer based in Prague, Czechia. Specializing in frontend development, UI/UX design, and building modern web applications.",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Prague",
        addressCountry: "CZ",
    },
    sameAs: [
        "https://github.com/michaelptacek05",
        "https://linkedin.com/in/ptacekmichael",
        "https://instagram.com/michal.718",
    ],
    knowsAbout: [
        "React",
        "Next.js",
        "Astro.js",
        "TypeScript",
        "UI/UX Design",
        "Figma",
        "Node.js",
        "PostgreSQL",
        "Docker",
    ],
};

export default function Home() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <PageHome />
        </>
    );
}
