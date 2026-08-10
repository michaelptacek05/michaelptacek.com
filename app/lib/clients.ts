export interface Client {
    name: string;
    description: string;
    href: string;
    featured?: boolean;
}

export const CLIENTS: Client[] = [
    {
        name: "Poradci Choceň",
        description:
            "Independent financial advisory firm offering insurance, investments, and financial planning. I designed and built their new website from the ground up and run the hosting.",
        href: "https://poradci-chocen.cz/",
        featured: true,
    },
    {
        name: "Barbershop U Lazebníka",
        description:
            "Premium barbershop in Prague-Klánovice specializing in precision haircuts and razor shaves. I designed and built their website with a fully custom design.",
        href: "https://barbershopulazebnika.cz/",
        featured: true,
    },
    {
        name: "VO Gastronom s.r.o. (WIP)",
        description:
            "Wholesale supplier for the gastronomy industry. I designed and built their website with a custom CMS for easy content management and provide the hosting.",
        href: "#",
    },
    {
        name: "Restaurace Anna Šmejdírka (WIP)",
        description:
            "Restaurant with a modern, fully responsive presentation. I designed and built the site on a custom CMS for easy content management, added an inquiry form for reservations and events, and provide the hosting.",
        href: "#",
    },
    {
        name: "Pivovar Anna Kráva (WIP)",
        description:
            "Brewery presenting its beers and taproom. I designed and built the responsive site on a custom CMS with an inquiry form and a local 18+ age verification gate, and provide the hosting.",
        href: "#",
    },
    {
        name: "MS-Tek",
        description:
            "Logistics consulting and staffing company based in Prague. I created the complete UI design for their new website.",
        href: "https://www.ms-tek.cz/en/logistic",
    },
];
