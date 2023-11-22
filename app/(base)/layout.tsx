
import Cursor from '@/components/Cursor';
import HeaderBar from '@/components/core/HeaderBar';
import { TooltipProvider } from '@/components/ui/tooltip';
import ActiveSectionContextProvider from '@/lib/context/ActiveSectionContext';
import ThemeContextProvider from '@/lib/context/ThemeContext';
import '@/styles/styles.scss';
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from 'sonner';
import { __DEV__ } from '@apollo/client/utilities/globals';
import { Inter, Libre_Baskerville } from 'next/font/google';
import { siteConfig } from '@/config/data';

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
const serif = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
});
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeContextProvider>
      <ActiveSectionContextProvider>
        <html className={`${inter.className} dark text-foreground bg-background`} lang="en">
          <body className={`${serif.className} dark-background pb-20 min-h-screen flex `}>
            <TooltipProvider>
              <Cursor />
              <span className='absolute top-0 right-0 bg-gradient-to-r from-green-400 to-[##0E0E0E]'></span>
              <main className="mx-auto pt-8 px-6">
                <div className="contained">
                  <HeaderBar />
                  {children}
                </div>
              </main>
              <Toaster />
              <Analytics />
            </TooltipProvider>
          </body>
        </html>
      </ActiveSectionContextProvider >
    </ThemeContextProvider>
  );
}