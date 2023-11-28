'use client';
import { logColumns } from "@/components/activity/logs/logs-columns";
import { LineChartComponent } from "@/components/charts/linechart";
import { PieChartComponent } from "@/components/charts/piechart";
import { DashboardCards } from "@/components/dashboard/dashboard-cards";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DataTable } from "@/components/data-table";
import { DateRangePicker } from "@/components/date-range-picker";

import { Shell } from "@/components/layout/shell";
import { auth } from "@/core/(database)/firebase";
import { dateRangeParams } from "@/core/utillities/utils";

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
    const displayName = () => {
        return user?.displayName
    }

    const dashboardData = dummyData;

    return (
        <Shell>
            <DashboardHeader heading={`So ${displayName()}'s....`} text="here are your  2023 Github metrics 💡🎯.">                <DateRangePicker />
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