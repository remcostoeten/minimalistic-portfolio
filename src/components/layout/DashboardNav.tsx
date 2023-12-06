"use client"

import { NavItem } from "@/core/types/types"
import { cn } from "@nextui-org/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Icons } from "../icons"

interface DashboardNavProps {
  items: NavItem[]
}

export function DashboardNav({ items }: DashboardNavProps) {
  const path = usePathname()

  if (!items?.length) {
    return null
  }



  return (
    <nav className="grid items-start gap-2">
      {items.map((item, index) => {
        const Icon = Icons[item.icon || "next"]
        return (
          item.href && (
            <Link
              onClick={item.onClick}
              key={index} href={item.disabled ? "/" : item.href}>
              <span className={cn(
                "group  flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent transition-all",
                path === item.href ? "active-menu bg-accent text-[#fb8817] hover:bg-accent/40" : "transparent",
                item.disabled && "cursor-not-allowed opacity-80"
              )}
              >
                <Icon className="mr-2 h-4 w-4" />
                <span className="!text-white">{item.title}</span>
              </span>
            </Link>
          )
        )
      })}
    </nav>
  )
}