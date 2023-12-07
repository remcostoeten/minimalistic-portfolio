"use client";

import { NavItem } from "@/core/types/types";
import { cn } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "../icons";

interface DashboardNavProps {
  items: NavItem[];
}

type AccountItem = {
  title: string;
  href: string;
  icon: string;
  disabled?: boolean;
};


export default function DashboardNav({ items }: DashboardNavProps) {
  const path = usePathname();

  if (!items?.length) {
    return null;
  }

  const accountItems: AccountItem[] = [
    { title: 'Settings', href: '/dashboard/settings', icon: 'settings' },
    { title: 'Account', href: '/dashboard/account', icon: 'account' },
  ];

  return (
    <nav className="grid items-start gap-2">
      <span className="text-lg font-semibold text-muted-foreground flex items-start">
        Dashboard
      </span>
      {
        items.map((item, index) => {
          const Icon = Icons[item.icon || "next"];
          return (
            item.href && (
              <Link
                onClick={item.onClick}
                key={index} href={item.disabled ? "/" : item.href}
              >
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
          );
        })
      }
      <div className=' p-4 border-b border-[#262626]' />
      <div className="mt-4">
        <span className="text-lg font-semibold text-muted-foreground flex items-start pb-4">
          Account
        </span>
        {accountItems.map((item, index) => {
          const Icon = Icons[item.icon || "next"];
          return (
            item.href && Icon && (
              <Link
                key={index} href={item.disabled ? "/" : item.href}
              >
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
          );
        })}
      </div>
    </nav >
  );
}
