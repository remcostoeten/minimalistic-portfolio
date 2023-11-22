'use client';

import Cursor from '@/components/Cursor';
<<<<<<< HEAD
import HeaderBar from '@/components/core/HeaderBar';
import { TooltipProvider } from '@/components/ui/tooltip';
import client from '@/lib/(graphql)/ApolloClient';
import ActiveSectionContextProvider from '@/lib/context/ActiveSectionContext';
<<<<<<< HEAD
<<<<<<< HEAD
import ThemeContextProvider from '@/lib/context/ThemeContext';
import '@/styles/styles.scss';
import { ApolloProvider } from '@apollo/client';
import { loadDevMessages, loadErrorMessages } from "@apollo/client/dev";
import { __DEV__ } from '@apollo/client/utilities/globals';
=======
import { siteConfig } from '@/config/site';
import { GeistMono, GeistSans } from "geist/font";
import Intro from '@/components/landing/nav/Intro';
>>>>>>> 36880af ( install graphql)
=======
>>>>>>> d6a56f9 ( minor bugs)
import { Analytics } from '@vercel/analytics/react';
import { Libre_Baskerville } from 'next/font/google';
import { Toaster } from 'sonner';
import { ApolloProvider } from '@apollo/client';
=======
>>>>>>> da3ba22 ( merge apollo client in dev)
import HeaderBar from '@/components/core/HeaderBar';
import { TooltipProvider } from '@/components/ui/tooltip';
import client from '@/lib/(graphql)/ApolloClient';
import ActiveSectionContextProvider from '@/lib/context/ActiveSectionContext';
import ThemeContextProvider from '@/lib/context/ThemeContext';
import '@/styles/styles.scss';
import { ApolloProvider } from '@apollo/client';
import { loadDevMessages, loadErrorMessages } from "@apollo/client/dev";
import { __DEV__ } from '@apollo/client/utilities/globals';
import { ApolloProvider } from '@apollo/client';
import HeaderBar from '@/components/core/HeaderBar';
import client from '@/lib/(graphql)/ApolloClient';
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { __DEV__ } from '@apollo/client/utilities/globals';

const serif = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
});


export default function RootLayout({

  children,
}: {
  children: React.ReactNode;
}) {
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 205f6c5 ( add some spinners components/ls)
  if (__DEV__) {  // Adds messages only in a dev environment
    loadDevMessages();
    loadErrorMessages();
  }
<<<<<<< HEAD

  if (__DEV__) {
    loadDevMessages();
    loadErrorMessages();
  }

=======
>>>>>>> 205f6c5 ( add some spinners components/ls)
=======
  if (__DEV__) {
    loadDevMessages();
    loadErrorMessages();
  }

>>>>>>> da3ba22 ( merge apollo client in dev)
  return (
    <ApolloProvider client={client}>
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <TooltipProvider>
            <html className="dark text-foreground bg-background" lang="en">
              <body className="dark-background pb-20 min-h-screen flex">
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
              </body>
            </html>
          </TooltipProvider>
        </ActiveSectionContextProvider >
      </ThemeContextProvider>
    </ApolloProvider>
=======
return (
<ThemeContextProvider>
      <ActiveSectionContextProvider>
        <TooltipProvider>
          <html className='dark text-foreground bg-background' lang="en">
            <Cursor />
            <body className=' dark-background pb-20 min-h-screen flex'>
              <span className='absolute top-0 right-0 bg-gradient-to-r from-green-400 to-[#0E0E0E]'></span>
=======
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <html className={`${GeistSans.variable} ${GeistMono.variable} dark text-foreground bg-background`} lang="en">
            <body className={`${serif.className} dark-background pb-20 min-h-screen flex `}>
              <span className='absolute top-0 right-0 bg-gradient-to-r from-green-400 to-[##0E0E0E]'></span>
>>>>>>> 36880af ( install graphql)
              <main className="mx-auto pt-8 px-6">
                <div className="contained">
                  <RippedNav />
                  {children}
                </div>
              </main>
              <Toaster />
              <Analytics />
            </body>
          </html>
<<<<<<< HEAD
        </TooltipProvider>

      </ActiveSectionContextProvider >
    </ThemeContextProvider >
>>>>>>> 6bacca5 ( just some dev work.)
=======
        </ActiveSectionContextProvider >
      </ThemeContextProvider>
    </ApolloProvider>
>>>>>>> 36880af ( install graphql)
  );
}