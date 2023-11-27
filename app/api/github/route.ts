import { NextApiRequest, NextApiResponse } from 'next'

type DateRangeType = {
    from: Date
    to: Date
}

// Dummy data
const dummyData = {
    logs: [],
    streak: 0,
    totalLogs: 0,
    mostLoggedActivity: null,
    activityCountByDate: {},
    topActivities: [],
    dailyAverage: 0,
}

// This is the function that will handle requests to your API route
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { userId, activityId, dateRange }: { userId: string, activityId: string, dateRange: DateRangeType } = req.body

    // You can use different HTTP methods (like GET, POST, PUT, DELETE) to perform different actions
    // Here's an example with a GET method
    if (req.method === 'GET') {
        // Replace actual data fetching with dummy data
        const data = userId ? getDashboardData(userId, dateRange) : getStatsDashboardData(activityId, dateRange)
        res.status(200).json(data)
    } else {
        // If the method is not GET, return an error
        res.status(405).json({ message: 'Method not allowed' })
    }
}

async function getDashboardData(
    userId: string,
    dateRange: DateRangeType
) {
    // Replace actual data fetching with dummy data
    return Promise.resolve(dummyData);
}

async function getStatsDashboardData(
    activityId: string,
    dateRange: DateRangeType
) {
    // Replace actual data fetching with dummy data
    return Promise.resolve(dummyData);
}