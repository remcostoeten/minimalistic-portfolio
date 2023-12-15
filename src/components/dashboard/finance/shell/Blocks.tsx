// // 'use client';
// // 'use client';
// import { LineChartComponent } from "@/components/data/charts/linechart";
// import { CardContent, Card } from "@/components/ui/card"

// // type FinanceCardProps = {
// //     title?: string
// //     amount?: number
// //     percentage?: number
// //     color?: string
// //     width?: string
// //     percentageColor?: string
// // }

// // function FinanceCard({ title, amount, percentage, percentageColor = 'text-green-500', width = 'w-[350px]' }: FinanceCardProps) {
// //     return (
// //         <Card className={`${width} grid--grey grid--card rounded-lg shadow`}>
// //             <CardContent className="p-4">
// //                 <div className="text-sm font-semibold text-gray-600">{title}</div>
// //                 <div className="text-2xl font-bold text-gray-800">€{amount},-</div>
// //                 <div className={`text-sm font-semibold ${percentageColor}`}>{percentage}</div>
// //             </CardContent>
// //         </Card>
// //     )
// // }

// // export default function FinanceCards() {
// //     const expenses = useFirestoreCollection('expenses');
// //     const income = useFirestoreCollection('income');
// //     const goals = useFirestoreCollection('goals');

// //     const totalIncome = income.reduce((total, incomeItem) => total + incomeItem.amount, 0);
// //     const totalGoals = goals.reduce((total, goal) => total + (typeof goal.targetAmount === 'number' ? goal.targetAmount : 0), 0);
// //     const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

// //     const chartData = [
// //         { name: 'Expenses', count: totalExpenses, color: '#FF0000' },
// //         { name: 'Income', count: totalIncome, color: '#00FF00' },
// //         { name: 'Goals', count: totalGoals, color: '#0000FF' },
// //     ];

// //     return (
// //         <div>
// //             <h2>Expenses</h2>
// //             <FinanceCard
// //                 title="Your total expenses"
// //                 amount={totalExpenses}
// //             />

// //             <h2>Income</h2>
// //             <FinanceCard
// //                 title="Your total income"
// //                 amount={totalIncome}
// //             />

// //             <h2>Goals</h2>
// //             <FinanceCard
// //                 title="Your total goals"
// //                 amount={totalGoals}
// //             />

// //             <h2>Chart</h2>
// //             <LineChartComponent data={chartData} />
// //         </div>
// //     );
// // }


// import { ResponsiveLine } from "@nivo/line"
// import { ResponsiveBar } from "@nivo/bar"

// export default function FinanceCards() {
//     const expenses = useFirestoreCollection('expenses');
//     const income = useFirestoreCollection('income');
//     const goals = useFirestoreCollection('goals');

//     const totalIncome = income.reduce((total, incomeItem) => total + incomeItem.amount, 0);
//     const totalGoals = goals.reduce((total, goal) => total + (typeof goal.targetAmount === 'number' ? goal.targetAmount : 0), 0);
//     const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

//     return (
//         <div className="bg-[#1a1c23] p-6 grid grid-cols-3 gap-4">
//             <div className="bg-[#252836] p-4 rounded-lg">
//                 <h2 className="text-white text-lg font-semibold mb-4">Total Revenue</h2>
//                 <LineChart className="w-full h-[200px]" />
//             </div>
//             <div className="bg-[#252836] p-4 rounded-lg">
//                 <h2 className="text-white text-lg font-semibold mb-4">Total Expenses</h2>
//                 <GroupedbarChart className="w-full h-[200px]" />
//             </div>
//             <div className="bg-[#252836] p-4 rounded-lg">
//                 <h2 className="text-white text-lg font-semibold mb-4">Traffic Impressions</h2>
//                 <BarChart className="w-full h-[200px]" />
//             </div>
//         </div>
//     )
// }

// function BarChart(props) {
//     return (
//         <div {...props}>
//             <ResponsiveBar
//                 data={[
//                     {
//                         name: "A",
//                         data: 111,
//                     },
//                     {
//                         name: "B",
//                         data: 157,
//                     },
//                     {
//                         name: "C",
//                         data: 129,
//                     },
//                     {
//                         name: "D",
//                         data: 187,
//                     },
//                     {
//                         name: "E",
//                         data: 119,
//                     },
//                     {
//                         name: "F",
//                         data: 22,
//                     },
//                     {
//                         name: "G",
//                         data: 101,
//                     },
//                     {
//                         name: "H",
//                         data: 83,
//                     },
//                 ]}
//                 keys={["data"]}
//                 indexBy="name"
//                 margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
//                 padding={0.3}
//                 valueScale={{ type: "linear" }}
//                 indexScale={{ type: "band", round: true }}
//                 colors={{ scheme: "paired" }}
//                 borderWidth={1}
//                 borderColor={{
//                     from: "color",
//                     modifiers: [["darker", 0.2]],
//                 }}
//                 axisTop={null}
//                 axisRight={null}
//                 axisBottom={{
//                     tickSize: 5,
//                     tickPadding: 5,
//                     tickRotation: 0,
//                     legend: "Name",
//                     legendPosition: "middle",
//                     legendOffset: 45,
//                     truncateTickAt: 0,
//                 }}
//                 axisLeft={{
//                     tickSize: 5,
//                     tickPadding: 5,
//                     tickRotation: 0,
//                     legend: "Number",
//                     legendPosition: "middle",
//                     legendOffset: -45,
//                     truncateTickAt: 0,
//                 }}
//                 theme={{
//                     tooltip: {
//                         container: {
//                             fontSize: "12px",
//                         },
//                     },
//                 }}
//                 labelSkipWidth={12}
//                 labelSkipHeight={12}
//                 role="application"
//                 ariaLabel="A bar chart showing data"
//             />
//         </div>
//     )
// }


// function GroupedbarChart(props) {
//     return (
//         <div {...props}>
//             <ResponsiveBar
//                 data={[
//                     {
//                         name: "A",
//                         foo: 111,
//                         bar: 99,
//                         baz: 100,
//                     },
//                     {
//                         name: "B",
//                         foo: 157,
//                         bar: 87,
//                         baz: 167,
//                     },
//                     {
//                         name: "C",
//                         foo: 129,
//                         bar: 9,
//                         baz: 110,
//                     },
//                     {
//                         name: "D",
//                         foo: 187,
//                         bar: 151,
//                         baz: 106,
//                     },
//                     {
//                         name: "E",
//                         foo: 119,
//                         bar: 127,
//                         baz: 115,
//                     },
//                     {
//                         name: "F",
//                         foo: 0,
//                         bar: 121,
//                         baz: 185,
//                     },
//                     {
//                         name: "G",
//                         foo: 101,
//                         bar: 55,
//                         baz: 55,
//                     },
//                 ]}
//                 keys={["foo", "bar", "baz"]}
//                 indexBy="name"
//                 margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
//                 padding={0.3}
//                 groupMode="grouped"
//                 valueScale={{ type: "linear" }}
//                 indexScale={{ type: "band", round: true }}
//                 colors={{ scheme: "paired" }}
//                 borderWidth={1}
//                 borderColor={{
//                     from: "color",
//                     modifiers: [["darker", 0.2]],
//                 }}
//                 axisTop={null}
//                 axisRight={null}
//                 axisBottom={{
//                     tickSize: 5,
//                     tickPadding: 5,
//                     tickRotation: 0,
//                     legend: "Name",
//                     legendPosition: "middle",
//                     legendOffset: 45,
//                     truncateTickAt: 0,
//                 }}
//                 axisLeft={{
//                     tickSize: 5,
//                     tickPadding: 5,
//                     tickRotation: 0,
//                     legend: "Number",
//                     legendPosition: "middle",
//                     legendOffset: -45,
//                     truncateTickAt: 0,
//                 }}
//                 labelSkipWidth={12}
//                 labelSkipHeight={12}
//                 legends={[
//                     {
//                         dataFrom: "keys",
//                         anchor: "bottom-right",
//                         direction: "column",
//                         justify: false,
//                         translateX: 120,
//                         translateY: 0,
//                         itemsSpacing: 2,
//                         itemWidth: 100,
//                         itemHeight: 20,
//                         itemDirection: "left-to-right",
//                         symbolSize: 18,
//                     },
//                 ]}
//                 theme={{
//                     tooltip: {
//                         container: {
//                             fontSize: "12px",
//                         },
//                     },
//                 }}
//                 role="application"
//                 ariaLabel="A grouped bar chart"
//             />
//         </div>
//     )
// }


// function LineChart(props) {
//     return (
//         <div {...props}>
//             <ResponsiveLine
//                 data={[
//                     {
//                         id: "C",
//                         data: [
//                             {
//                                 x: 1,
//                                 y: 283,
//                             },
//                             {
//                                 x: 2,
//                                 y: 250,
//                             },
//                             {
//                                 x: 3,
//                                 y: 152,
//                             },
//                             {
//                                 x: 4,
//                                 y: 294,
//                             },
//                             {
//                                 x: 5,
//                                 y: 211,
//                             },
//                             {
//                                 x: 6,
//                                 y: 172,
//                             },
//                             {
//                                 x: 7,
//                                 y: 24,
//                             },
//                             {
//                                 x: 8,
//                                 y: 25,
//                             },
//                             {
//                                 x: 9,
//                                 y: 76,
//                             },
//                             {
//                                 x: 10,
//                                 y: 5,
//                             },
//                         ],
//                     },
//                     {
//                         id: "B",
//                         data: [
//                             {
//                                 x: 1,
//                                 y: 43,
//                             },
//                             {
//                                 x: 2,
//                                 y: 237,
//                             },
//                             {
//                                 x: 3,
//                                 y: 21,
//                             },
//                             {
//                                 x: 4,
//                                 y: 35,
//                             },
//                             {
//                                 x: 5,
//                                 y: 26,
//                             },
//                             {
//                                 x: 6,
//                                 y: 154,
//                             },
//                             {
//                                 x: 7,
//                                 y: 181,
//                             },
//                             {
//                                 x: 8,
//                                 y: 65,
//                             },
//                             {
//                                 x: 9,
//                                 y: 261,
//                             },
//                             {
//                                 x: 10,
//                                 y: 199,
//                             },
//                         ],
//                     },
//                     {
//                         id: "A",
//                         data: [
//                             {
//                                 x: 1,
//                                 y: 240,
//                             },
//                             {
//                                 x: 2,
//                                 y: 228,
//                             },
//                             {
//                                 x: 3,
//                                 y: 77,
//                             },
//                             {
//                                 x: 4,
//                                 y: 178,
//                             },
//                             {
//                                 x: 5,
//                                 y: 196,
//                             },
//                             {
//                                 x: 6,
//                                 y: 204,
//                             },
//                             {
//                                 x: 7,
//                                 y: 153,
//                             },
//                             {
//                                 x: 8,
//                                 y: 289,
//                             },
//                             {
//                                 x: 9,
//                                 y: 250,
//                             },
//                             {
//                                 x: 10,
//                                 y: 274,
//                             },
//                         ],
//                     },
//                 ]}
//                 enableCrosshair={false}
//                 margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
//                 xScale={{ type: "point" }}
//                 yScale={{
//                     type: "linear",
//                     min: 0,
//                     max: "auto",
//                 }}
//                 axisTop={null}
//                 axisRight={null}
//                 axisBottom={{
//                     tickSize: 5,
//                     tickPadding: 5,
//                     tickRotation: 0,
//                     legend: "X",
//                     legendOffset: 45,
//                     legendPosition: "middle",
//                 }}
//                 axisLeft={{
//                     tickSize: 5,
//                     tickPadding: 5,
//                     tickRotation: 0,
//                     legend: "Y",
//                     legendOffset: -45,
//                     legendPosition: "middle",
//                 }}
//                 colors={{ scheme: "paired" }}
//                 pointSize={5}
//                 pointColor={{
//                     from: "color",
//                     modifiers: [["darker", 0.2]],
//                 }}
//                 pointBorderWidth={2}
//                 pointBorderColor={{
//                     from: "color",
//                     modifiers: [["darker", 0.2]],
//                 }}
//                 pointLabelYOffset={-12}
//                 useMesh={true}
//                 legends={[
//                     {
//                         anchor: "bottom-right",
//                         direction: "column",
//                         justify: false,
//                         translateX: 100,
//                         translateY: 0,
//                         itemsSpacing: 0,
//                         itemDirection: "left-to-right",
//                         itemWidth: 80,
//                         itemHeight: 20,
//                         symbolSize: 14,
//                         symbolShape: "circle",
//                     },
//                 ]}
//                 theme={{
//                     tooltip: {
//                         container: {
//                             fontSize: "12px",
//                         },
//                     },
//                 }}
//                 role="application"
//             />
//         </div>
//     )
// }
import React from 'react'

export default function Blocks() {
    return (
        <div>Blocks</div>
    )
}
