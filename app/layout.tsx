import type { Metadata } from 'next';
import { Cormorant, Libre_Baskerville, Lora, Noto_Serif_Ahom, Playfair_Display, Stalinist_One } from 'next/font/google';
import { Tooltip, TooltipProvider } from '@/components/ui/tooltip';
import '../styles/styles.scss';
import ThemeContextProvider from '@/lib/context/ThemeContext';
import NavBar from '@/components/core/Navbar';
import ActiveSectionContextProvider, { ActiveSectionContext } from '@/lib/context/ActiveSectionContext';

const serif = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
});


export const metadata: Metadata = {
  title: 'Remco Stoeten - remcostoeten.com',
  description: 'Remco Stoeten - remcostoeten.com - Front end developer focussed in UI,working with TypeScript, NextJS, React and passion for cutting edge technologies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeContextProvider>
      <ActiveSectionContextProvider>
        <html lang="en">
          <body className={`${serif.className} 
           dark:bg-body-dark h-screen items-center flex `}>
              <NavBar />
              <main className="mt-[100px] container p-[20px]">{children}</main>
          </body>
        </html>
      </ActiveSectionContextProvider >
    </ThemeContextProvider>
  );
}