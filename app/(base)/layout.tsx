'use client';

import { Libre_Baskerville } from 'next/font/google';
import '@/styles/styles.scss';
import ThemeContextProvider from '@/lib/context/ThemeContext';
import ActiveSectionContextProvider from '@/lib/context/ActiveSectionContext';
import { siteConfig } from '@/config/site';
import { GeistMono, GeistSans } from "geist/font";
import Intro from '@/components/landing/nav/Intro';
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from 'sonner';
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

  if (__DEV__) {  // Adds messages only in a dev environment
    loadDevMessages();
    loadErrorMessages();
  }
  return (
    <ApolloProvider client={client}>
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <html className="dark text-foreground bg-background" lang="en">
            <body className="dark-background pb-20 min-h-screen flex">
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
        </ActiveSectionContextProvider >
      </ThemeContextProvider>
    </ApolloProvider>
  );
}