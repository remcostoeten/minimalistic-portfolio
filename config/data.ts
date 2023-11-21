import { SiteConfig } from '@/lib/types/types';

export const siteConfig: SiteConfig = {
    name: 'remcostoeten',
    description: 'Remco Stoeten - remcostoeten.com - Software Engineer/Developer/Divjesschuiver.',
    url: 'https://remcostoeten.com',
    links: {
        gitlab: 'https://gitlab.com/remcostoeten',
        github: 'https://github.com/remcostoeten',
        linkedin: 'https://www.linkedin.com/in/remcostoeten/',
        whatsapp: 'https://api.whatsapp.com/send?phone=yourphonenumber',
        email: 'mailto:remcostoeten@hotmail.com',
        baseurl: 'https://remcostoeten.com',
    },
};

export const phoneNumber = '31636590707';

export const metadata = {
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    author: 'Remco Stoeten',
    url: siteConfig.url,
    type: 'Portfolio site and SaaS',
    openGraph: {
        type: 'website',
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        site_name: siteConfig.name,
        image: {
            url: `${siteConfig.url}/images/og-image.jpg`,
            alt: "Your Site's Open Graph Image",
        },
        profile: {
            username: 'remco-stoeten',
        },
    },
    linkedinProfile: 'https://www.linkedin.com/in/remcostoeten/',
    githubProfile: 'https://github.com/remcostoeten',
    gitlabProfile: 'https://gitlab.com/remcostoeten',
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
    },
    robots: {
        index: true,
        googleBot: {
            'index': true,
            'follow': true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    authors: [
        {
            name: 'Remco Stoeten',
            url: 'https://remcostoeten.com',
        },
    ],
};