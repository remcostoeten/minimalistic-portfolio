import { IncomeList } from '@/components/dashboard/finance/income/IncomeList'
import FinacneHeader from './components/FiancenHeader'
import { CreateIncome } from '@/components/dashboard/finance/income/CreateIncome'

export default function FinancePage() {
    return (
        <div className="dark:text-white text-gray-600 h-screen flex overflow-hidden text-sm">
            <div className="flex-grow overflow-hidden h-full flex flex-col">
                <div className="flex-grow flex overflow-x-hidden">

                    <div className="flex-grow  overflow-y-auto">
                        <div className=" px-4 flex flex-col w-full border-b border-gray-200 dark:text-white dark:border-[#262626] sticky top-0">
                            <FinacneHeader />
                            <IncomeList />
                            <CreateIncome />
                            <div className="flex items-center space-x-3 sm:mt-7 mt-4">
                                <a href="#" className="px-3 border-b-2 border-blue-500 text-blue-500 dark:text-white dark:border-white pb-1.5">Activities</a>
                                <a href="#" className="px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5">Deposits</a>
                                <a href="#" className="px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5 sm:block hidden">Expenses</a>
                                <a href="#" className="px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5 sm:block hidden">Notifications</a>
                                <a href="#" className="px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5 sm:block hidden">Cards</a>
                            </div>
                        </div>
                        <div className="py-4">
                            <div className="flex w-full items-center mb-7">
                                <button className="inline-flex mr-3 items-center h-8 pl-2.5 pr-2 rounded-md shadow text-gray-700 dark:text-gray-400 dark:border-[#262626] border border-gray-200 leading-none py-0">
                                    <svg viewBox="0 0 24 24" className="w-4 mr-2 text-gray-400 dark:text-gray-600" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                                        <line x1={16} y1={2} x2={16} y2={6} />
                                        <line x1={8} y1={2} x2={8} y2={6} />
                                        <line x1={3} y1={10} x2={21} y2={10} />
                                    </svg>
                                    Last 30 days
                                    <svg viewBox="0 0 24 24" className="w-4 ml-1.5 text-gray-400 dark:text-gray-600" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </button>
                                <button className="inline-flex items-center h-8 pl-2.5 pr-2 rounded-md shadow text-gray-700 dark:text-gray-400 dark:border-[#262626] border border-gray-200 leading-none py-0">
                                    Filter by
                                    <svg viewBox="0 0 24 24" className="w-4 ml-1.5 text-gray-400 dark:text-gray-600" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </button>
                                <div className="ml-auto text-gray-500 text-xs sm:inline-flex hidden items-center">
                                    <span className="mr-3">Page 2 of 4</span>
                                    <button className="inline-flex mr-2 items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-[#262626] leading-none py-0">
                                        <svg className="w-4" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="15 18 9 12 15 6" />
                                        </svg>
                                    </button>
                                    <button className="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-[#262626] leading-none py-0">
                                        <svg className="w-4" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="9 18 15 12 9 6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="text-gray-400">
                                        <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-[#262626]">Type</th>
                                        <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-[#262626]">Where</th>
                                        <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-[#262626] hidden md:table-cell">Description</th>
                                        <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-[#262626]">Amount</th>
                                        <th className="font-normal px-3 pt-0 pb-3 border-b border-gray-200 dark:border-[#262626] sm:text-gray-400 text-white">Date</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600 dark:text-gray-100">
                                    <tr>
                                        <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-[#262626]">
                                            <div className="flex items-center">
                                                <svg viewBox="0 0 24 24" className="w-4 mr-5 text-yellow-500" stroke="currentColor" strokeWidth={3} fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <circle cx={12} cy={12} r={10} />
                                                    <line x1={12} y1={8} x2={12} y2={12} />
                                                    <line x1={12} y1={16} x2="12.01" y2={16} />
                                                </svg>
                                                Card
                                            </div>
                                        </td>
                                        <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-[#262626]">
                                            <div className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001" className="w-7 h-7 p-1.5 mr-2.5 rounded-lg border border-gray-200 dark:border-[#262626]">
                                                    <path fill="#03a9f4" d="M425.457 117.739c-3.121-1.838-6.961-1.966-10.197-.341-3.231 1.629-5.416 4.786-5.803 8.384-.384 3.499-.981 6.997-1.728 10.667-20.885 94.784-62.827 140.885-128.256 140.885h-96c-5.062.009-9.42 3.574-10.432 8.533l-32 149.995-5.717 38.187c-3.287 17.365 8.125 34.107 25.489 37.394 1.915.362 3.858.549 5.807.558h64.213c14.718.045 27.55-10 31.04-24.299l25.941-103.701h55.659c65.685 0 111.083-52.373 127.829-147.477 11.054-45.286-7.234-92.668-45.845-118.785z" />
                                                    <path fill="#283593" d="M405.339 38.017C384.261 14.108 354.012.286 322.139.001h-176.64C119.064-.141 96.558 19.2 92.721 45.355L37.873 411.243c-2.627 17.477 9.41 33.774 26.887 36.402 1.586.239 3.189.357 4.793.356h81.92c5.062-.009 9.42-3.574 10.432-8.533l30.187-140.8h87.467c75.904 0 126.059-53.056 149.099-157.867.926-4.178 1.638-8.4 2.133-12.651 5.348-32.335-3.981-65.372-25.452-90.133z" />
                                                </svg>
                                                PayPal
                                            </div>
                                        </td>
                                        <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-[#262626] md:table-cell hidden">Subscription renewal</td>
                                        <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-[#262626] text-red-500">- $120.00</td>
                                        <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-[#262626]">
                                            <div className="flex items-center">
                                                <div className="sm:flex hidden flex-col">
                                                    24.12.2020
                                                    <div className="text-gray-400 text-xs">11:16 AM</div>
                                                </div>
                                                <button className="w-8 h-8 inline-flex items-center justify-center text-gray-400 ml-auto">
                                                    <svg viewBox="0 0 24 24" className="w-5" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <circle cx={12} cy={12} r={1} />
                                                        <circle cx={19} cy={12} r={1} />
                                                        <circle cx={5} cy={12} r={1} />
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                            <div className="flex w-full mt-5 space-x-2 justify-end">
                                <button className="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-[#262626] leading-none">
                                    <svg className="w-4" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="15 18 9 12 15 6" />
                                    </svg>
                                </button>
                                <button className="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-[#262626] leading-none">1</button>
                                <button className="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-[#262626] bg-gray-100 dark:bg-gray-800 dark:text-white leading-none">2</button>
                                <button className="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-[#262626] leading-none">3</button>
                                <button className="inline-flex items-center h-8 w-8 justify-center text-gray-500 rounded-md shadow border border-gray-200 dark:border-[#262626] leading-none">4</button>
                                <button className="inline-flex items-center h-8 w-8 justify-center text-gray-400 rounded-md shadow border border-gray-200 dark:border-[#262626] leading-none">
                                    <svg className="w-4" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="9 18 15 12 9 6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
