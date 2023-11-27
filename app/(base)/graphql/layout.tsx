
'use client';
// export const metadata = {
//   title: {
//     default: siteConfig.name,
//     template: `%s | ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
//   author: 'Remco Stoeten',
//   url: siteConfig.url,
//   type: 'Portfolio site and SaaS',

//   openGraph: {
//     type: 'website',
//     url: siteConfig.url,
//     title: siteConfig.name,
//     description: siteConfig.description,
//     site_name: siteConfig.name,
//     image: {
//       url: `${siteConfig.url}/images/og-image.jpg`,
//       alt: "Your Site's Open Graph Image",
//     },
//     profile: {
//       username: 'remco-stoeten',
//     },
//   },

//   linkedinProfile: 'https://www.linkedin.com/in/remco-stoeten/',
//   githubProfile: 'https://github.com/remcostoeten',
//   gitlabProfile: 'https://gitlab.com/remcostoeten',

//   icons: {
//     icon: '/favicon.ico',
//     shortcut: '/favicon-16x16.png',
//     apple: '/apple-touch-icon.png',
//   },
//   robots: {
//     index: true,
//     googleBot: {
//       'index': true,
//       'follow': true,
//       'max-video-preview': -1,
//       'max-image-preview': 'large',
//       'max-snippet': -1,
//     },
//   },
//   authors: [
//     {
//       name: 'Remco Stoeten',
//       url: 'https://remcostoeten.com',
//     },
//   ],
// };

import { ApolloProvider } from '@apollo/client';

import client from '@/core/(graphql)/(prev)_/ApolloClient';

import { loadDevMessages } from '@apollo/client/dev';
import { loadErrorMessages } from '@apollo/client/dev';
import { __DEV__ } from '@apollo/client/utilities/globals';

// export const metadata = {
//   title: {
//     default: siteConfig.name,
//     template: `%s | ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
//   author: 'Remco Stoeten',
//   url: siteConfig.url,
//   type: 'Portfolio site and SaaS',

//   openGraph: {
//     type: 'website',
//     url: siteConfig.url,
//     title: siteConfig.name,
//     description: siteConfig.description,
//     site_name: siteConfig.name,
//     image: {
//       url: `${siteConfig.url}/images/og-image.jpg`,
//       alt: "Your Site's Open Graph Image",
//     },
//     profile: {
//       username: 'remco-stoeten',
//     },
//   },

//   linkedinProfile: 'https://www.linkedin.com/in/remco-stoeten/',
//   githubProfile: 'https://github.com/remcostoeten',
//   gitlabProfile: 'https://gitlab.com/remcostoeten',

//   icons: {
//     icon: '/favicon.ico',
//     shortcut: '/favicon-16x16.png',
//     apple: '/apple-touch-icon.png',
//   },
//   robots: {
//     index: true,
//     googleBot: {
//       'index': true,
//       'follow': true,
//       'max-video-preview': -1,
//       'max-image-preview': 'large',
//       'max-snippet': -1,
//     },
//   },
//   authors: [
//     {
//       name: 'Remco Stoeten',
//       url: 'https://remcostoeten.com',
//     },
//   ],
// };

export default function RootLayout({
  children,
}: {

  children: React.ReactNode;
}) {

  if (__DEV__) {
    loadDevMessages();
    loadErrorMessages();
  }

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}