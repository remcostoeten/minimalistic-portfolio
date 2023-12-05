'use client'
import React from 'react';
import ActivityStream from "@/components/dashboard/ActivityStream";
import { DashboardNav } from "@/components/layout/DashboardNav";
import DashboardNavigation from "@/components/layout/navbar";
import { Navigation } from "@/core/types/types";
import useAuthRedirect from '@/hooks/useAuthRoutes';


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
            onClick: () => {
                console.log("Settings")
            }

        },
        {
            title: "Log out",
            icon: "logout",
            onClick: () => {
                console.log("Log out")
            }
        },
    ],
}

interface DashboardLayoutProps {
    children: React.ReactNode
}

export default function DashboardLayout({
    children,
}: DashboardLayoutProps) {
    useAuthRedirect(false, '/signin');

    return (
        <div className="flex min-h-screen flex-col space-y-6">
            <DashboardNavigation />
            <div className="dash-contain grid flex-1 gap-12 md:grid-cols-[200px_2fr_300px]">
                <aside className="hidden w-[200px] flex-col md:flex">
                    <DashboardNav items={dashboardLinks.data} />
                </aside>
                <main className="flex w-full flex-1 flex-col">{children}</main>
                <aside className="hidden w-[300px] flex-col md:flex">
                    <ActivityStream />
                </aside>
            </div>
        </div>
    )
}
