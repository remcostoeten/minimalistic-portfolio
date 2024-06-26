type SiteConfig = {
  name: string
  description: string
  url: string
  links: {
    gitlab: string
    github: string
    linkedin: string
    whatsapp: string
    email: string
    baseurl: string
  }
}

export const siteConfig: SiteConfig = {
  name: "remcostoeten",
  description:
    "Remco Stoeten - remcostoeten.com - Software Engineer/Developer/Divjesschuiver.",
  url: "https://remcostoeten.com",
  links: {
    gitlab: "https://gitlab.com/remcostoeten",
    github: "https://github.com/remcostoeten",
    linkedin: "https://www.linkedin.com/in/remcostoeten/",
    whatsapp: "https://api.whatsapp.com/send?phone=yourphonenumber",
    email: "mailto:remcostoeten@hotmail.com",
    baseurl: "https://remcostoeten.com",
  },
}
