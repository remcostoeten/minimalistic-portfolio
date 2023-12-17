import { HydrationOverlay } from "@builder.io/react-hydration-overlay";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from "@/components/layout/SidebarShell";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Remco Stoeten - Dashboard',
  description: 'Personal dashboard for tracking a lot of metrics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <HydrationOverlay>
      <html data-theme='cupcake' lang="en">
        <body className={inter.className}>
          <>
            <Sidebar />
            <main className="bg-[#09090b] min-h-screen flex h-full w-full ml-[66px] flex-col max-sm:ml-0">
              <header className="flex justify-between p-3 pl-4 pr-4 text-gray-950 dark:text-gray-200 flex-col sm:flex-row border-b border-slate-600z">
                <h1 className="text-2xl font-extrabold capitalize leading-snug tracking-tight mb-2 sm:mb-0 text-white">Overview</h1>
              </header>
              {children}</main>
          </>
        </body>
      </html>
    </HydrationOverlay>
  )
}
