import { links } from "../data/menulinks";

export type ChildProps = {
    children?: React.ReactNode;
};

export type SectionName = (typeof links)[number]["name"];

export interface SiteConfig {
    name: string;
    description: string;
    url: string;
    links: {
        gitlab?: string;
        github?: string;
        linkedin?: string;
        whatsapp?: string;
        email?: string;
        baseurl?: string;
    };
}

