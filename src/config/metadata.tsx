import { seoKeywords } from "./keywords"
import { siteConfig } from "./site"

const MetaData = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: seoKeywords,
  author: "Remco Stoeten",
  image: `${siteConfig.url}/images/cover.jpg`,
  url: siteConfig.url,
  type: "Portfolio site and SaaS",

  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    site_name: siteConfig.name,
    image: {
      url: `${siteConfig.url}/images/og-image.jpg`,
      alt: "Your Site's Open Graph Image",
    },
    profile: {
      username: "remco-stoeten",
    },
  },

  linkedinProfile: "https://www.linkedin.com/in/remco-stoeten/",
  githubProfile: "https://github.com/remcostoeten",
  gitlabProfile: "https://gitlab.com/remcostoeten",
  snippetsUrl: "https://snippets.remcostoeten.com",
  whatsapp: "https://wa.me/31636590707",

  footerItems: {
    Github: "https://github.com/remcostoeten",
    LinkedIn: "https://www.linkedin.com/in/remco-stoeten/",
    Gitlab: "https://gitlab.com/remcostoeten",
    Snippets: "https://snippets.remcostoeten.com",

    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
    },
    authors: [
      {
        name: "Remco Stoeten",
        url: "https://remcostoeten.com",
      },
    ],
  },
}

export default MetaData
