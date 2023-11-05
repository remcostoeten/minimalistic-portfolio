import { links } from "../data/menulinks";

export type ChildProps = {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    size?: 'large' | 'medium' | 'small';
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

