import { IconKeys } from "@/components/icons"

import { links } from "../config/menulinks"

export type ChildProps = {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  size?: "large" | "medium" | "small"
}

export type ContributionsProps = {
  username: string
  type: string
  endpoint: string
}

export type NavItem = {
  title: string
  disabled?: boolean
  onClick?: () => void
  external?: boolean
  icon?: IconKeys
} & (
  | {
      href?: string
      items?: never
    }
  | {
      href?: string
      items: any[]
    }
)

export type Navigation = {
  data: NavItem[]
}

export type SectionName = (typeof links)[number]["name"]

export interface SiteConfig {
  name: string
  description: string
  url: string
  links: {
    gitlab?: string
    github?: string
    linkedin?: string
    whatsapp?: string
    email?: string
    baseurl?: string
  }
}

export type Transaction = {
  id?: string
  amount?: number
  type?: "deposit" | "withdrawal"
  timestamp?: any
  date?: string
  description?: string
}

export type iconProps = {
  name: string
  size?: string
  className?: string
  color?: string
  onClick?: () => void
  w?: string | number
  h?: string | number
}

export type SearchFormProps = {
  handleSubmit: (e: { preventDefault: () => void }) => void
  inputValue: string
  setInputValue: (value: string) => void
}
