'use client'
import React from 'react';
import ActivityStream from "@/components/dashboard/ActivityStream";
import DashboardNav from "@/components/layout/DashboardNav";
import DashboardNavigation from "@/components/layout/navbar";
import { Navigation } from "@/core/types/types";
import useAuthRedirect from '@/hooks/useAuthRoutes';
import { UsernameProvider } from '@/core/context/UsernameContextProvider';


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

export default function DashboardLayout({
    children,
}: DashboardLayoutProps) {
    useAuthRedirect(false, '/signin');

    return (
        <div className='dashboard pt-8'>
            <div className="flex min-h-screen flex-col space-y-6">
                <span className="w-screen px-8 grid flex-1 gap-2 md:grid-cols-[300px_auto]"> {/* Adjusted here */}
                    <aside className="hidden w-[300px] flex-col md:flex"> {/* Adjusted here */}
                        <DashboardNav items={dashboardLinks.data} />
                    </aside>
                    {children}
                </span>
            </div>
        </div >
    )
}

