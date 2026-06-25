import {
    Document,
    Page,
    Text,
    View,
    Link,
    Image,
    StyleSheet,
} from "@react-pdf/renderer";

const GREEN  = "#3d8f6f";
const MUTED  = "#6b7280";
const BORDER = "#e5e7eb";
const TEXT   = "#111827";

const s = StyleSheet.create({
    page: {
        fontFamily: "Helvetica",
        fontSize: 9,
        color: TEXT,
        backgroundColor: "#ffffff",
        paddingTop: 36,
        paddingBottom: 36,
        paddingHorizontal: 44,
    },

    /* ── Header ── */
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 10,
    },
    headerLeft: { flex: 1, marginRight: 16 },
    photo: {
        width: 68,
        height: 68,
        borderRadius: 34,
    },
    name: {
        fontFamily: "Helvetica-Bold",
        fontSize: 20,
        letterSpacing: 0.5,
        marginBottom: 2,
    },
    role: {
        fontSize: 10,
        color: GREEN,
        marginBottom: 8,
    },
    contactRow: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    contactItem: {
        color: MUTED,
        fontSize: 7.5,
        marginRight: 10,
        marginBottom: 2,
        textDecoration: "none",
    },

    /* ── Divider ── */
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: BORDER,
        marginBottom: 8,
    },

    /* ── Section ── */
    section: { marginBottom: 8 },
    sectionHeading: {
        fontFamily: "Helvetica-Bold",
        fontSize: 6.5,
        textTransform: "uppercase",
        letterSpacing: 1,
        color: MUTED,
        marginBottom: 5,
    },
    bodyText: {
        color: MUTED,
    },

    /* ── Experience ── */
    expBlock: { marginBottom: 7 },
    expHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 1,
    },
    expTitle: {
        fontFamily: "Helvetica-Bold",
        fontSize: 9,
        flex: 1,
    },
    expCompany: { color: GREEN },
    expPeriod: {
        color: MUTED,
        fontSize: 7.5,
        marginLeft: 8,
        flexShrink: 0,
    },
    expMeta: {
        color: MUTED,
        fontSize: 7.5,
        marginBottom: 4,
    },
    expIntro: {
        color: MUTED,
        marginBottom: 3,
    },
    bullet: {
        flexDirection: "row",
        marginBottom: 2,
    },
    dot: {
        width: 3,
        height: 3,
        borderRadius: 1.5,
        backgroundColor: GREEN,
        marginTop: 3,
        marginRight: 5,
        flexShrink: 0,
    },
    bulletText: {
        color: MUTED,
        flex: 1,
    },

    /* ── Skills ── */
    skillRow: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 4,
    },
    skillCategory: {
        fontFamily: "Helvetica-Bold",
        fontSize: 7.5,
        textTransform: "uppercase",
        letterSpacing: 0.4,
        width: 90,
        flexShrink: 0,
        paddingTop: 1,
    },
    skillBadges: {
        flexDirection: "row",
        flexWrap: "wrap",
        flex: 1,
    },
    badge: {
        borderWidth: 1,
        borderColor: BORDER,
        borderRadius: 3,
        paddingHorizontal: 4,
        paddingVertical: 1,
        fontSize: 7.5,
        color: TEXT,
        marginRight: 3,
        marginBottom: 3,
    },

    /* ── Languages ── */
    langRow: { flexDirection: "row" },
    langItem: {
        flexDirection: "row",
        marginRight: 20,
    },
    langName: { fontFamily: "Helvetica-Bold", marginRight: 3 },
    langLevel: { color: MUTED },
});

const SKILLS = [
    {
        category: "Frontend",
        items: ["React", "Next.js", "Astro.js", "JavaScript (ES6+)", "TypeScript", "HTML", "SCSS", "jQuery"],
    },
    {
        category: "Backend",
        items: ["Node.js", "SQL", "REST API"],
    },
    {
        category: "Design & UX",
        items: ["Figma", "Adobe XD", "Adobe Creative Suite", "Affinity Suite", "Wireframing", "Prototyping", "Usability Testing"],
    },
    {
        category: "DevOps",
        items: ["Docker", "Linux", "VPS Management", "Technical SEO", "Core Web Vitals"],
    },
];

const CONTACTS = [
    { label: "Prague", href: null },
    { label: "+420 775 435 808", href: "tel:+420775435808" },
    { label: "mptacek005@gmail.com", href: "mailto:mptacek005@gmail.com" },
    { label: "michaelptacek.com", href: "https://michaelptacek.com" },
    { label: "github.com/michaelptacek05", href: "https://github.com/michaelptacek05" },
    { label: "linkedin.com/in/ptacekmichael", href: "https://linkedin.com/in/ptacekmichael" },
    { label: "behance.net/michaelptek1", href: "https://behance.net/michaelptek1" },
];

interface Props { avatarSrc: string }

export function CVDocument({ avatarSrc }: Props) {
    return (
        <Document title="Michael Ptacek — CV" author="Michael Ptacek">
            <Page size="A4" style={s.page}>

                {/* ── Header ── */}
                <View style={s.header}>
                    <View style={s.headerLeft}>
                        <Text style={s.name}>Michael Ptacek</Text>
                        <Text style={s.role}>Software Engineer</Text>
                        <View style={s.contactRow}>
                            {CONTACTS.map(({ label, href }) =>
                                href ? (
                                    <Link key={label} style={s.contactItem} src={href}>{label}</Link>
                                ) : (
                                    <Text key={label} style={s.contactItem}>{label}</Text>
                                )
                            )}
                        </View>
                    </View>
                    <Image src={avatarSrc} style={s.photo} />
                </View>

                <View style={s.divider} />

                {/* ── Profile ── */}
                <View style={s.section}>
                    <Text style={s.sectionHeading}>Profile</Text>
                    <Text style={s.bodyText}>
                        Over 2 years building websites and applications in React, Next.js, and Astro — from initial
                        wireframes in Figma to deployment on a self-managed VPS. Focused on performance
                        (Core Web Vitals), technical SEO, and accessibility.
                    </Text>
                </View>

                <View style={s.divider} />

                {/* ── Experience ── */}
                <View style={s.section}>
                    <Text style={s.sectionHeading}>Experience</Text>

                    <View style={s.expBlock}>
                        <View style={s.expHeader}>
                            <Text style={s.expTitle}>
                                Frontend Developer & UI/UX Designer —{" "}
                                <Text style={s.expCompany}>MagicWare s.r.o.</Text>
                            </Text>
                            <Text style={s.expPeriod}>Jan 2024 – Present</Text>
                        </View>
                        <Text style={s.expMeta}>Prague · On-site · promoted from internship (UI Designer)</Text>
                        {[
                            "Developing new features and pages in React for a large-scale reservation system for travel agencies, integrating the frontend with APIs in a .NET CMS environment.",
                            "Modernizing legacy web platforms — fixing bugs and optimizing code (HTML, SCSS, jQuery) and managing CMS objects.",
                            "Designing wireframes and interactive prototypes in Figma and Adobe XD; conducting usability testing and analysis of existing systems.",
                            "Creating graphic designs for applications and print materials (logos, brochures, mockups) in Adobe Creative Suite.",
                        ].map((pt, i) => (
                            <View key={i} style={s.bullet}>
                                <View style={s.dot} />
                                <Text style={s.bulletText}>{pt}</Text>
                            </View>
                        ))}
                    </View>

                    <View style={s.expBlock}>
                        <View style={s.expHeader}>
                            <Text style={s.expTitle}>
                                Freelance Web Developer —{" "}
                                <Text style={s.expCompany}>Self-employed</Text>
                            </Text>
                            <Text style={s.expPeriod}>Apr 2024 – Present</Text>
                        </View>
                        <Text style={s.expMeta}>Prague · end-to-end custom projects from concept to launch</Text>
                        {[
                            "Building modern web applications and fast websites from scratch in Next.js and Astro — from design through frontend and backend integrations to deployment.",
                            "Optimizing technical SEO and Core Web Vitals (semantic HTML, accessibility, loading speed).",
                            "Operating and maintaining a self-managed VPS — server configuration, domain management, and application deployments for clients.",
                            "Independently managing the full project lifecycle from first contact to handover and ongoing support.",
                        ].map((pt, i) => (
                            <View key={i} style={s.bullet}>
                                <View style={s.dot} />
                                <Text style={s.bulletText}>{pt}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                <View style={s.divider} />

                {/* ── Technical Skills ── */}
                <View style={s.section}>
                    <Text style={s.sectionHeading}>Technical Skills</Text>
                    {SKILLS.map(({ category, items }) => (
                        <View key={category} style={s.skillRow}>
                            <Text style={s.skillCategory}>{category}</Text>
                            <View style={s.skillBadges}>
                                {items.map((item) => (
                                    <Text key={item} style={s.badge}>{item}</Text>
                                ))}
                            </View>
                        </View>
                    ))}
                </View>

                <View style={s.divider} />

                {/* ── Education ── */}
                <View style={s.section}>
                    <Text style={s.sectionHeading}>Education</Text>
                    <View style={s.expBlock}>
                        <View style={s.expHeader}>
                            <Text style={s.expTitle}>
                                Information Technology —{" "}
                                <Text style={s.expCompany}>Secondary School of Electrical Engineering, Multimedia & IT</Text>
                            </Text>
                            <Text style={s.expPeriod}>2021 – 2025</Text>
                        </View>
                        <Text style={s.expMeta}>Database development (SQL, PHP), hardware and software administration</Text>
                    </View>
                    <View>
                        <View style={s.expHeader}>
                            <Text style={s.expTitle}>
                                Information Technology (PEF) —{" "}
                                <Text style={s.expCompany}>CZU Prague</Text>
                            </Text>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <View style={{
                                    backgroundColor: "#dcfce7",
                                    borderRadius: 3,
                                    paddingHorizontal: 4,
                                    paddingVertical: 1.5,
                                    marginRight: 6,
                                }}>
                                    <Text style={{ fontSize: 6.5, color: GREEN, fontFamily: "Helvetica-Bold" }}>
                                        UPCOMING
                                    </Text>
                                </View>
                                <Text style={s.expPeriod}>Sep 2026</Text>
                            </View>
                        </View>
                        <Text style={s.expMeta}>Combined form</Text>
                    </View>
                </View>

                <View style={s.divider} />

                {/* ── Languages ── */}
                <View style={s.section}>
                    <Text style={s.sectionHeading}>Languages</Text>
                    <View style={s.langRow}>
                        {[
                            { lang: "Czech", level: "Native" },
                            { lang: "English", level: "C1" },
                        ].map(({ lang, level }) => (
                            <View key={lang} style={s.langItem}>
                                <Text style={s.langName}>{lang}</Text>
                                <Text style={s.langLevel}>— {level}</Text>
                            </View>
                        ))}
                    </View>
                </View>

            </Page>
        </Document>
    );
}
