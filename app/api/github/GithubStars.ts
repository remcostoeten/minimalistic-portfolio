import { links } from "@/lib/config/menulinks";

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
