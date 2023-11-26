'use client';
import { Card } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

// Define the Transaction interface
interface Transaction {
    type: 'deposit' | 'withdrawal';
    amount: number;
    paidOff: boolean;
}

// Define the Casino component
const Casino = () => {
    // State variables for the component
    const [totalDebt, setTotalDebt] = useState<number>(0);
    const [totalSessionDeposited, setTotalSessionDeposited] = useState<number>(0);
    const [totalSessionWithdrawn, setTotalSessionWithdrawn] = useState<number>(0);
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    // Load transactions from localStorage when component mounts
    useEffect(() => {
        console.log('Saving transactions to localStorage:', transactions);
        localStorage.setItem('transactions', JSON.stringify(transactions));
    }, [transactions]);

    // Load transactions from localStorage when component mounts
    useEffect(() => {
        const savedTransactions = localStorage.getItem('transactions');
        console.log('Retrieved transactions from localStorage:', savedTransactions);
        if (savedTransactions) {
            const parsedTransactions = JSON.parse(savedTransactions);
            console.log('Parsed transactions:', parsedTransactions);
            setTransactions(parsedTransactions);
        }
    }, []);

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Calculate total debt
        const newTotalDebt = totalDebt + totalSessionDeposited - totalSessionWithdrawn;
        setTotalDebt(newTotalDebt);

        // Add transactions
        if (totalSessionDeposited > 0) {
            setTransactions((prev) => [...prev, { type: 'deposit', amount: totalSessionDeposited, paidOff: false }]);
        }
        if (totalSessionWithdrawn > 0) {
            setTransactions((prev) => [...prev, { type: 'withdrawal', amount: totalSessionWithdrawn, paidOff: false }]);
        }

        // Reset form values
        setTotalSessionDeposited(0);
        setTotalSessionWithdrawn(0);
        toast(newTotalDebt > 0 ? 'You are in debt!' : 'You are not in debt!');
    };

    // Handle paying off a transaction
    const handlePayOff = (index: number) => {
        if (window.confirm('Are you sure you want to pay off this transaction?')) {
            setTransactions((prev) =>
                prev.map((transaction, i) => {
                    if (i === index && transaction.type === 'deposit' && !transaction.paidOff) {
                        setTotalDebt((prevDebt) => prevDebt - transaction.amount);
                        return { ...transaction, paidOff: true };
                    }
                    return transaction;
                })
            );
        }
    };

    // Calculate session difference
    const sessionDifference = totalSessionDeposited - totalSessionWithdrawn;

    // Render the component
    return (
        <Card className="container mx-auto mt-8 p-10">
            <h1 className="text-4xl text-[#eee] font-semibold mb-4">Casino Statistics</h1>
            <p>Total Debt: {totalDebt} €</p>
            <p>Session Difference: {sessionDifference} €</p>

            <form className="mt-8" onSubmit={handleSubmit}>
                <label className="block mb-2" htmlFor="totalSessionDeposited">
                    Total Session Deposited (€):
                    <input
                        type="number"
                        id="totalSessionDeposited"
                        value={totalSessionDeposited}
                        onChange={(e) => setTotalSessionDeposited(Number(e.target.value))}
                        className="w-full p-2 border rounded"
                    />
                </label>

                <label className="block mb-2" htmlFor="totalSessionWithdrawn">
                    Total Session Withdrawn (€):
                    <input
                        type="number"
                        id="totalSessionWithdrawn"
                        value={totalSessionWithdrawn}
                        onChange={(e) => setTotalSessionWithdrawn(Number(e.target.value))}
                        className="w-full p-2 border rounded"
                    />
                </label>

                <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">
                    Submit
                </button>
            </form>

            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-2">Transactions</h2>
                {transactions.map((transaction, index) => (
                    <div key={index} className="mb-2">
                        <p>
                            {transaction.type === 'deposit' ? 'Deposited' : 'Withdrew'}: {transaction.amount} €
                            {transaction.type === 'deposit' && !transaction.paidOff && (
                                <button onClick={() => handlePayOff(index)} className="ml-2 p-1 bg-green-500 text-white rounded">
                                    Pay Off
                                </button>
                            )}
                        </p>
                        {transaction.paidOff && <p>Paid off</p>}
                    </div>
                ))}
            </div>
        </Card>
    );
};

// Export the component
export default Casino;
