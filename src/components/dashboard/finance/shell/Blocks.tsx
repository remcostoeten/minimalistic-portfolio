'use client';
import { CardContent, Card } from "@/components/ui/card"
import { useFirestoreCollection } from "@/hooks/useFirestoreData"

type FinanceCardProps = {
    title?: string
    amount?: number
    percentage?: number
    color?: string
    width?: string
    percentageColor?: string
}

function FinanceCard({ title, amount, percentage, percentageColor = 'text-green-500', width = 'w-[350px]' }: FinanceCardProps) {
    return (
        <Card className={`${width} grid--grey grid--card rounded-lg shadow`}>
            <CardContent className="p-4">
                <div className="text-sm font-semibold text-gray-600">{title}</div>
                <div className="text-2xl font-bold text-gray-800">€{amount},-</div>
                <div className={`text-sm font-semibold ${percentageColor}`}>{percentage}</div>
            </CardContent>
        </Card>
    )
}

export default function FinanceCards() {
    const expenses = useFirestoreCollection('expenses');
    const income = useFirestoreCollection('income');
    const goals = useFirestoreCollection('goals');

    const totalIncome = income.reduce((total, incomeItem) => total + incomeItem.amount, 0);
    const totalGoals = goals.reduce((total, goal) => total + (typeof goal.targetAmount === 'number' ? goal.targetAmount : 0), 0);
    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

    console.log(totalExpenses)
    console.log(goals)
    return (
        <div>
            <h2>Expenses</h2>
            <FinanceCard
                title="Your total expenses"
                amount={totalExpenses}
            />

            <h2>Income</h2>
            <FinanceCard
                title="Your total income"
                amount={totalIncome}
            />

            <h2>Goals</h2>
            <FinanceCard
                title="Your total goals"
                amount={totalGoals}
            />
        </div>
    );
}