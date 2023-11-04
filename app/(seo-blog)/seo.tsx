import { siteConfig } from '@/config/data'
import { Metadata } from 'next'

interface PageSEOProps {
  title: string
  description?: string
  image?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export function genPageMetadata({ title, description, image, ...rest }: PageSEOProps): Metadata {
  return {
    title,
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description: description || siteConfig.description,
      url: './',
      siteName: siteConfig.name,
      locale: 'en_US',
      type: 'website',
    },
    ...rest,
  }
}
