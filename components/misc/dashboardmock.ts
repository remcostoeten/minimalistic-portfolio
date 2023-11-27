import { DateRange } from 'react-day-picker';

type ActivityEntry = {
    name: string
    count: number
    color: string
}

type ActivityByDate = {
    date: string
    count: number
}

type DateRange = {
    from: Date
    to: Date
}


// Dummy data
const dummyData = {
    logs: [],
    streak: { currentStreak: 0, longestStreak: 0 },
    totalLogs: 0,
    mostLoggedActivity: "N/A",
    topActivities: [
        {
            name: "N/A",
            count: 1,
            color: "#FFFFFF",
        },
    ],
    activityCountByDate: [],
    dailyAverage: 0,
}

export async function getLogs(
    id: string,
    dateRange: DateRange,
    type: "user" | "activity"
) {
    return Promise.resolve(dummyData.logs);
}

export async function getStreak(
    id: string,
    type: "user" | "activity"
): Promise<{
    currentStreak: number
    longestStreak: number
}> {
    return Promise.resolve(dummyData.streak);
}

export async function getTotalLogs(
    id: string,
    dateRange: DateRange,
    type: "user" | "activity"
) {
    return Promise.resolve(dummyData.totalLogs);
}

export async function getMostLoggedActivity(
    userId: string,
    dateRange: DateRange
) {
    return Promise.resolve(dummyData.mostLoggedActivity);
}

export async function getTopActivities(
    userId: string,
    dateRange: DateRange
): Promise<ActivityEntry[]> {
    return Promise.resolve(dummyData.topActivities);
}

export async function getActivityCountByDate(
    userId: string,
    dateRange: DateRange
): Promise<ActivityByDate[]> {
    return Promise.resolve(dummyData.activityCountByDate);
}

export async function getDailyAverage(
    activityId: string,
    dateRange: DateRange
): Promise<number> {
    return Promise.resolve(dummyData.dailyAverage);
}