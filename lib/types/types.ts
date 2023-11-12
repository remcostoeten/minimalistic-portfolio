import { links } from "../data/menulinks";
import { NextApiResponse } from 'next';
import { z } from 'zod';

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


export const FormSchema = z.object({
    email: z.string().describe('Email').email({ message: 'Invalid Email' }),
    password: z.string().describe('Password').min(1, 'Password is required'),
});

export const CreateWorkspaceFormSchema = z.object({
    workspaceName: z
        .string()
        .describe('Workspace Name')
        .min(1, 'Workspace name must be min of 1 character'),
    logo: z.any(),
});

export const UploadBannerFormSchema = z.object({
    banner: z.string().describe('Banner Image'),
});

