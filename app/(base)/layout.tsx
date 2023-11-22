// @ts-ignore
// @ts-nocheck
'use client';
import { ApolloProvider } from '@apollo/client';
import Cursor from '@/components/Cursor';
import HeaderBar from '@/components/core/HeaderBar';
import { TooltipProvider } from '@/components/ui/tooltip';
import client from '@/lib/(graphql)/ApolloClient';
import ActiveSectionContextProvider from '@/lib/context/ActiveSectionContext';
import ThemeContextProvider from '@/lib/context/ThemeContext';
import '@/styles/styles.scss';
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from 'sonner';
import { Libre_Baskerville } from 'next/font/google';
import dynamic from 'next/dynamic';

const loadDevMessages = dynamic(() => import('@apollo/client/dev').then(mod => mod.loadDevMessages));
const loadErrorMessages = dynamic(() => import('@apollo/client/dev').then(mod => mod.loadErrorMessages));
const __DEV__ = dynamic(() => import('@apollo/client/utilities/globals').then(mod => mod.__DEV__));

const serif = Libre_Baskerville({
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
    <ApolloProvider client={client}>
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <html className="dark text-foreground bg-background" lang="en">
            <body className="dark-background pb-20 min-h-screen flex">
              <TooltipProvider>
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
    </ApolloProvider>
  );
}