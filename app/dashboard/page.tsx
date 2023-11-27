'use client';
import { logColumns } from "@/components/activity/logs/logs-columns";
import { LineChartComponent } from "@/components/charts/linechart";
import { PieChartComponent } from "@/components/charts/piechart";
import { DashboardCards } from "@/components/dashboard/dashboard-cards";
import { DataTable } from "@/components/data-table";
import { DateRangePicker } from "@/components/date-range-picker";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { Shell } from "@/components/layout/shell";
import { auth } from "@/core/(database)/firebase";
import { dateRangeParams } from "@/core/utillities/utils";
import { Metadata } from "next"
import { useRouter } from "next/navigation"

const dummyData = {
    logs: [],
    streak: 0,
    totalLogs: 0,
    mostLoggedActivity: null,
    activityCountByDate: {},
    topActivities: [],
    dailyAverage: 0,
}

type DashboardProps = {
    searchParams: string
}



export default function Dashboard({ searchParams }: DashboardProps) {
    const user = auth.currentUser;


    const dateRange = dateRangeParams(searchParams)

    const dashboardData = dummyData; // Use dummy data

    return (
        <Shell>
            <DashboardHeader heading="Dashboard" text="Monitor your progress.">
                <DateRangePicker />
            </DashboardHeader>
            <DashboardCards data={dashboardData} searchParams={searchParams} />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <LineChartComponent data={dashboardData.activityCountByDate} />
                <PieChartComponent data={dashboardData.topActivities} />
            </div>
            <DataTable columns={logColumns} data={dashboardData.logs}>
                Log History
            </DataTable>
        </Shell>

    )
}