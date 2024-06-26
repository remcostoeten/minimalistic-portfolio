"use client"

import React from "react"
import { UsernameProvider } from "@/core/context/UsernameContextProvider"
import useAuthRedirect from "@/hooks/useAuthRoutes"

import { Navigation } from "@/core/types/types"
import ActivityStream from "@/components/dashboard/ActivityStream"
import DashboardNav from "@/components/layout/DashboardNav"
import DashboardNavigation from "@/components/layout/navbar"

const dashboardLinks: Navigation = {
  data: [
    {
      title: "Home",
      href: "/",
      icon: "home",
    },
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: "dashboard",
    },
    {
      title: "Snippets",
      href: "/dashboard/snippets",
      icon: "snippets",
    },
    {
      title: "Todo",
      href: "/dashboard/todo",
      icon: "activity",
    },
    {
      title: "Firebase",
      href: "/dashboard/todo/firebase-post-and-fetch",
      icon: "database",
    },

    {
      title: "Repository mutation",
      href: "/dashboard/repo-mutation",
      icon: "database",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
    },
    {
      title: "Log out",
      icon: "logout",
    },
  ],
}

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  useAuthRedirect(false, "/signin")

  return (
    <div className="dashboard">
      <div className="flex min-h-screen flex-col space-y-6">
        <DashboardNavigation />
        <span className="w-screen px-8 grid flex-1 gap-12 md:grid-cols-[200px_2fr_350px]">
          <aside className="hidden w-[200px] flex-col md:flex">
            <DashboardNav items={dashboardLinks.data} />
          </aside>
          {children}
          <aside className="hidden w-[350px] flex-col md:flex">
            <ActivityStream />
          </aside>
        </span>
      </div>
    </div>
  )
}
