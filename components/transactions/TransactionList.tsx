import { Button } from '@nextui-org/react';
import React, { useState } from 'react'
import { Card } from '../ui/card';

interface Transaction {
    id?: string;
    amount?: number;
    type?: "deposit" | "withdrawal";
    timestamp?: Date;
    date?: string;
}

const TransactionRow = ({ transaction }: { transaction: Transaction }) => (
    <tr className="border-b hover:bg-orange-100 ">
        <td className="p-3 px-5">{transaction.date}</td>
        <td className="p-3 px-5">{transaction.type}</td>
        <td className="p-3 px-5">{transaction.amount}</td>
        <td className="p-3 px-5 flex justify-end">
            <Button
                type="button"
                className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            >
                Edit
            </Button>
            <Button
                type="button"
                className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            >
                Delete
            </Button>
        </td>
    </tr>
);

const TransactionList: React.FC<{ transactions: Transaction[] }> = ({ transactions }) => {
    const [filter, setFilter] = useState<"all" | "deposit" | "withdrawal">("all");

    const filteredTransactions = transactions.filter(transaction =>
        filter === "all" ? true : transaction.type === filter
    );

    const totalDeposit = filteredTransactions
        .filter(transaction => transaction.type === "deposit")
        .reduce((sum, transaction) => sum + (transaction.amount || 0), 0);

    const totalWithdrawal = filteredTransactions
        .filter(transaction => transaction.type === "withdrawal")
        .reduce((sum, transaction) => sum + (transaction.amount || 0), 0);

    const difference = totalDeposit - totalWithdrawal;
    const filteredDeposits = transactions.filter(transaction => transaction.type === "deposit");
    const filteredWithdrawals = transactions.filter(transaction => transaction.type === "withdrawal");

    // const totalDeposit = filteredDeposits.reduce((sum, transaction) => sum + (transaction.amount || 0), 0);
    // const totalWithdrawal = filteredWithdrawals.reduce((sum, transaction) => sum + (transaction.amount || 0), 0);
    return (
        <Card className="px-3 py-4 flex justify-center">
            <div>
                <h2>Deposits</h2>
                <select value={filter} onChange={(e) => setFilter(e.target.value as "all" | "deposit")}>
                    <option value="all">All</option>
                    <option value="deposit">Deposit</option>
                </select>
                <p>Total Deposit: {totalDeposit}</p>
                <table className="w-full e shadow-md rounded mb-4">
                    <tbody>
                        <tr className="border-b">
                            <th className="text-left p-3 px-5">Date</th>
                            <th className="text-left p-3 px-5">Type</th>
                            <th className="text-left p-3 px-5">Amount</th>
                            <th />
                        </tr>
                        {filteredDeposits.map((transaction, index) => (
                            <TransactionRow key={index} transaction={transaction} />
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
                <h2>Withdrawals</h2>
                <select value={filter} onChange={(e) => setFilter(e.target.value as "all" | "withdrawal")}>
                    <option value="all">All</option>
                    <option value="withdrawal">Withdrawal</option>
                </select>
                <p>Total Withdrawal: {totalWithdrawal}</p>
                <table className="w-full e shadow-md rounded mb-4">
                    <tbody>
                        <tr className="border-b">
                            <th className="text-left p-3 px-5">Date</th>
                            <th className="text-left p-3 px-5">Type</th>
                            <th className="text-left p-3 px-5">Amount</th>
                            <th />
                        </tr>
                        {filteredWithdrawals.map((transaction, index) => (
                            <TransactionRow key={index} transaction={transaction} />
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
}

export default TransactionList;