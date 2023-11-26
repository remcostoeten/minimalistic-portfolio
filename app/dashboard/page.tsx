// 'use client';
// import { usePasswordProtection } from '@/hooks/usePasswordProtection';
// import DashboardUser from "@/components/dashboard/DashboardUser";
// import { useRouter } from 'next/navigation';
// import Chart from '@/components/dashboard/ExpensesChart';
// import Block from '@/components/core/ThemeBlock';
// import MoneyCard from '@/components/core/cards/MoneyCard';
// import FetchIncomes from '@/components/dashboard/FetchIndividualIncome';
// import LoginPage from './(auth)/login/page';
// import { auth } from '@/utils/firebase';
// import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line, ResponsiveContainer } from 'recharts';
// import { Avatar, IconButton, Icon } from '@mui/material';
// import { graphData } from '@/config/data';
// import Table from '@/components/dashboard/Table';

// const CustomTooltip = () => {
//     return (<div className="rounded-xl overflow-hidden tooltip-head">
//         <div className="flex items-center justify-between p-2">
//             <div className="">Revenue</div>
//         </div>
//         <div className="tooltip-body text-center p-3">
//             <div className="text-white font-bold">$1300.50</div>
//             <div className="">Revenue from 230 sales</div>
//         </div>
//     </div>
//     );
// }

// const Graph = () => {
//     return (
//         <div className="flex p-4 h-full flex-col">
//             <div className="">
//                 <div className="flex items-center">
//                     <div className="font-bold text-white">Your Work Summary</div>
//                     <div className="flex-grow" />

//                     <Icon path="res-react-dash-graph-range" className="w-4 h-4" />
//                     <div className="ml-2">Last 9 Months</div>
//                     <div className="ml-6 w-5 h-5 flex justify-center items-center rounded-full icon-background">
//                         ?
//                     </div>
//                 </div>
//                 <div className="font-bold ml-5">Nov - July</div>
//             </div>

//             <div className="flex-grow">
//                 <Recharts.ResponsiveContainer width="100%" height="100%">
//                     <Recharts.LineChart width={500} height={300} data={graphData}>
//                         <defs>
//                             <linearGradient id="paint0_linear" x1="0" y1="0" x2="1" y2="0">
//                                 <stop stopColor="#6B8DE3" />
//                                 <stop offset="1" stopColor="#7D1C8D" />
//                             </linearGradient>
//                         </defs>
//                         <Recharts.CartesianGrid
//                             horizontal={false}
//                             strokeWidth="6"
//                             stroke="#252525"
//                         />
//                         <Recharts.XAxis
//                             dataKey="name"
//                             axisLine={false}
//                             tickLine={false}
//                             tickMargin={10}
//                         />
//                         <Recharts.YAxis axisLine={false} tickLine={false} tickMargin={10} />
//                         <Recharts.Tooltip content={<CustomTooltip />} cursor={false} />
//                         <Recharts.Line
//                             activeDot={false}
//                             type="monotone"
//                             dataKey="expectedRevenue"
//                             stroke="#242424"
//                             strokeWidth="3"
//                             dot={false}
//                             strokeDasharray="8 8"
//                         />
//                         <Recharts.Line
//                             type="monotone"
//                             dataKey="revenue"
//                             stroke="url(#paint0_linear)"
//                             strokeWidth="4"
//                             dot={false}
//                         />
//                     </Recharts.LineChart>
//                 </Recharts.ResponsiveContainer>
//             </div>
//         </div>
//     );
// }

// export default function Page() {
//     const isAuthenticated = auth.currentUser != null;

//     return (
//         <>
//             {isAuthenticated ? (
//                 <>
//                     <DashboardUser />
//                     <main className='flex-col sm:flex-row    flex justify-between items-center'>
//                         <div className="flex w-full gap-4">
//                             <MoneyCard type='expense' />
//                             <MoneyCard type='income' />
//                             <MoneyCard small type='Saving' />
//                         </div>
//                     </main>
//                     <div className="fade-seperator-b-l"></div>
//                     <Table />
//                     <FetchIncomes />
//                     {/* <Totals /> */}
//                     <div className="flex gap-4 w-full">
//                         {/* <MoneyCard hoverCard={true} type={'income'} />
//               <MoneyCard hoverCard={true} type={'expense'} /> */}
//                         <Block>
//                             <h2>dwa</h2>
//                         </Block>
//                     </div>
//                     * <div className="flex gap-4">
//                         {/* <CombinedExpenses /> */}
//                         <Chart />
//                     </div>

//                 </>
//             ) : (
//                 <LoginPage />
//             )}
//         </>
//     );
// }

import React from 'react'

export default function page() {
    return (
        <div>page</div>
    )
}
