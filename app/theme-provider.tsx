'use client'

import { ThemeProvider } from 'next-themes'
import MetaData from '@/config/metadata'

export function ThemeProviders({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
        </ThemeProvider>
    )
}
