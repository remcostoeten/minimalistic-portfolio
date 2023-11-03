import { Libre_Baskerville } from 'next/font/google';
import '../styles/styles.scss';
import ThemeContextProvider from '@/lib/context/ThemeContext';
import ActiveSectionContextProvider from '@/lib/context/ActiveSectionContext';
import { siteConfig } from '@/config/site';
import { GeistMono, GeistSans } from "geist/font";
import Intro from '@/components/landing/nav/Intro';
import { Analytics } from '@vercel/analytics/react';

const serif = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
});

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

  linkedinProfile: 'https://www.linkedin.com/in/remco-stoeten/',
  githubProfile: 'https://github.com/remcostoeten',
  gitlabProfile: 'https://gitlab.com/remcostoeten',

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,

    follow: true,
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeContextProvider>
      <ActiveSectionContextProvider>
        <html className={`${GeistSans.variable} ${GeistMono.variable}`} lang="en">
          <body className={`${serif.className}
           dark:bg-body-dark h-screen flex `}>
            <main className="mx-auto pt-8 pb-8 w-full pr-7">
              <Intro />
              <div className="contained">
                {children}
              </div>
            </main>
            <Analytics />
          </body>
        </html>

      </ActiveSectionContextProvider >
    </ThemeContextProvider>
  );
}