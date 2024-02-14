
'use client'

import Cursor from '@/components/Cursor';
import { TooltipProvider } from '@/components/ui/tooltip';
import clienttt from '@/core/(graphql)/ApolloClient';
import ThemeContextProvider from '@/core/context/ThemeContext';
import ActiveSectionContextProvider from '@/core/utillities/SectionObserver';
import '@/styles/styles.scss';
import { ApolloProvider } from '@apollo/client';
import { Analytics } from '@vercel/analytics/react';
import { AnimatePresence } from 'framer-motion';
import { Inter, Libre_Baskerville } from 'next/font/google';
import NextTopLoader from "nextjs-toploader";
import { Toaster } from 'sonner';
import { SpeedInsights } from "@vercel/speed-insights/next";

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
    <ApolloProvider client={clienttt}>
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <AnimatePresence mode='wait'>
            <html className={`${inter.className} dark text-foreground !bg-body`} lang="en">
              <body className='!dark-background pb-20 min-h-screen flex'>
                <NextTopLoader color="#fb8817" height={3.5} showSpinner={false} />
                <TooltipProvider>
                  <Cursor />

                  <main className="mx-auto ">
                    {children}
                  </main>
                  <Toaster invert />
                  <Analytics />
                  <SpeedInsights />
                </TooltipProvider>
              </body>
            </html>
          </AnimatePresence>
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
    </ApolloProvider>
  )
}