import { Navigation } from "@/core/types/types"
import DashboardNavigation from "@/components/layout/navbar"
import { DashboardNav } from "@/components/layout/DashboardNav"

const dashboardLinks: Navigation = {
    data: [
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
            title: "Settings",
            href: "/dashboard/settings",
            icon: "settings",
        },
    ],
}

interface DashboardLayoutProps {
    children: React.ReactNode
}

export default async function DashboardLayout({
    children,
}: DashboardLayoutProps) {
    return (
        <div className="flex min-h-screen flex-col space-y-6">
            <DashboardNavigation />
            <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
                <aside className="hidden w-[200px] flex-col md:flex">
                    <DashboardNav items={dashboardLinks.data} />
                </aside>
                <main className="flex w-full flex-1 flex-col">{children}</main>
            </div>
        </div>
    )
}
