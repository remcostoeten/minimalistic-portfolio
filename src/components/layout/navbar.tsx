import { Suspense } from "react"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { auth } from "@/core/(database)/firebase"

import LogoIconAnimated from "../effects/RemcoLogoAnimated"
import Spinner from "../loaders/Spinners"
import UserAvatar from "../user/user-avatar"

export default function DashboardNavigation() {
  return (
    <header className="flex justify-between items-center  p-4 ">
      <span className=" flex justify-between items-center w-full pr-4 ">
        <LogoIconAnimated />
        <UserAvatar />
      </span>
    </header>
  )
}
