'use client'

import siteConfig from '@/config/siteConfig'
import { ThemeProvider } from 'next-themes'

export function ThemeProviders({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme={siteConfig.theme} enableSystem>
            {children}
        </ThemeProvider>
    )
}
