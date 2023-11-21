import '@/styles/styles.scss';
import ThemeContextProvider from '@/lib/context/ThemeContext';
import ActiveSectionContextProvider from '@/lib/context/ActiveSectionContext';
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from 'sonner';
import RippedNav from '@/components/misc/RippedNav';
export default function RootLayout({

  children,
}: {

  children: React.ReactNode;
}) {
    
return (
<ThemeContextProvider>
      <ActiveSectionContextProvider>
        <html className='dark text-foreground bg-background' lang="en">
          <body className=' dark-background pb-20 min-h-screen flex'>
            <span className='absolute top-0 right-0 bg-gradient-to-r from-green-400 to-[##0E0E0E]'></span>
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

      </ActiveSectionContextProvider >
    </ThemeContextProvider >
  );
}
