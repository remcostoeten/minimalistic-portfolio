'use client'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useFirestoreCollection } from '@/hooks/useFirestoreCollection'
import { useState, useEffect } from 'react'

export default function FinacneHeader() {
    const incomes = useFirestoreCollection("incomes");
    const expenses = useFirestoreCollection("expenses");

    const incomeAmoun = incomes.reduce((acc, cur) => acc + cur.amount, 0)
    const expenseAmount = expenses.reduce((acc, cur) => acc + cur.amount, 0)
    console.log(expenseAmount, incomeAmoun)
    return (
        <>
            <div className="flex w-full items-center">
                <div className="flex items-center text-3xl text-gray-900 dark:text-white">
                    Expenses overview
                </div>
                <div className="ml-auto sm:flex hidden items-center justify-end">
                    <div className="text-right">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger><div className="text-xs text-gray-400 dark:text-gray-400">Total balance:</div>
                                </TooltipTrigger>
                                <TooltipContent className='text-black'>
                                    Total income minus the expenses.
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <div className="text-gray-900 text-lg dark:text-white">€{incomeAmoun} </div>
                    </div>
                    <button className="w-8 h-8 ml-4 text-gray-400 shadow dark:text-gray-400 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-700">
                        <svg viewBox="0 0 24 24" className="w-4" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx={12} cy={12} r={1} />
                            <circle cx={19} cy={12} r={1} />
                            <circle cx={5} cy={12} r={1} />
                        </svg>
                    </button>
                </div>
            </div >
        </>
    )
}
1