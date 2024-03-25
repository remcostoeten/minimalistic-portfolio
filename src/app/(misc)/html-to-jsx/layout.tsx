import Head from "next/head"

import { PageHeader, PageHeaderDescription } from "@/components/ui/page-nav"

import Typewriter from "./components/alternating-text"

type LayoutProps = {
  children: React.ReactNode
}

const metadata = {
  title: {
    default: "HTML to JSX Converter",
    template: "HTML to JSX Converter",
  },
  description:
    "Convert your HTML code to JSX or TSX with ease. Simply paste your HTML and get the JSX/TSX version. Additional features include prefixing the output with 'use client' for Next.js and TypeScript type inclusion.",
  keywords: ["HTML", "JSX", "TSX", "Next.js", "TypeScript"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://remcostoeten.nl/html-to-jsx",
    title: "HTML to JSX Converter",
    description:
      "Convert your HTML code to JSX or TSX with ease. Simply paste your HTML and get the JSX/TSX version. Additional features include prefixing the output with 'use client' for Next.js and TypeScript type inclusion.",
    siteName: "HTML to JSX Converter",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "https://remcostoeten.nl/site.webmanifest",
}

export default function ConverterLayout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{metadata.title.default}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <link rel="icon" href={metadata.icons.icon} />
        <link rel="shortcut icon" href={metadata.icons.shortcut} />
        <link rel="apple-touch-icon" href={metadata.icons.apple} />
        <link rel="manifest" href={metadata.manifest} />
      </Head>
      <div className="container mx-auto">
        <PageHeader>
          <span className="inline-block  space-y-4 font-heading text-4xl sm:mb-0 lg:text-5xl">
            Convert your HTML to React code
          </span>
          <PageHeaderDescription>
            <span className="cursor-hover ">
              Simply paste in your HTML and get the JSX/TSX version. When you
              want to prefix the output with{" "}
              <pre className="inline-block"> 'use client '</pre> for NextJS
              simply toggle the switch. When using TypeScript you can also get a
              version with the types included by filling in the props but they
              are not required.
            </span>
          </PageHeaderDescription>
        </PageHeader>
        <main>{children}</main>
      </div>
    </>
  )
}
