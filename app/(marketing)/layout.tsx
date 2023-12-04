
'use client'

import Cursor from '@/components/Cursor';
import { TooltipProvider } from '@/components/ui/tooltip';
import GraphqlConnection from '@/core/(graphql)/ApolloClient';
import clienttt from '@/core/(graphql)/ApolloClient';
import ThemeContextProvider from '@/core/context/ThemeContext';
import ActiveSectionContextProvider from '@/core/utillities/SectionObserver';
import '@/styles/styles.scss';
import { ApolloProvider } from '@apollo/client';
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev';
import { __DEV__ } from '@apollo/client/utilities/globals';
import { Analytics } from '@vercel/analytics/react';
import { AnimatePresence } from 'framer-motion';
import { Inter, Libre_Baskerville } from 'next/font/google';
import NextTopLoader from "nextjs-toploader";
import { Toaster } from 'sonner';

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
  if (__DEV__) {
    loadDevMessages();
    loadErrorMessages();
  }
  return (
    <ApolloProvider client={clienttt}>
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <AnimatePresence mode='wait'>
            <html className={`${inter.className} dark text-foreground bg-background`} lang="en">
              <body className='dark-background pb-20 min-h-screen flex'>
                <NextTopLoader color="#fb8817" height={3.5} showSpinner={false} />
                <TooltipProvider>
                  <Cursor />
                  <span className='absolute top-0 right-0 bg-gradient-to-r from-green-400 to-[##0E0E0E]'></span>
                  <main className="mx-auto pt-8 sm:px-0 px-6">
                    <div className="contained">
                      {children}
                    </div>
                  </main>
                  <Toaster invert />
                  <Analytics />
                </TooltipProvider>
              </body>
            </html>
          </AnimatePresence>
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
    </ApolloProvider>
  )
}