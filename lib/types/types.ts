<<<<<<< HEAD
<<<<<<< HEAD
=======
import { iconProps } from '@/utils/types';
import { Timestamp } from "firebase/firestore";
>>>>>>> a77dd63 ( change grid)
=======
>>>>>>> 5880759 (Apollo)
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

export type Transaction = {
    id: string;
    amount: number;
    type: "deposit" | "withdrawal";
    timestamp: any;
    date: string;
}

export type iconProps = {
    name: string;
    size?: string;
    className?: string;
    color?: string;
    onClick?: () => void;
    w?: string | number;
    h?: string | number;
}
