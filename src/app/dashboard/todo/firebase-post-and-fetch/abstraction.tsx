'use client'
'use client'
import Link from "next/link";
import { auth } from "@/core/(database)/firebase";
import CreateExpense from "@/components/dashboard/finance/ExpensesForm";
import { ConfirmDialog } from "@/components/dashboard/finance/ConfirmDialaog";
import EditTransactionForm from "@/components/dashboard/finance/EditTransactionForm";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { CreateCategory } from "@/components/dashboard/finance/CreateCategory";
import GoalSetting from "@/components/dashboard/finance/goal/CreateGoal";
import DisplayGoal from "@/components/dashboard/finance/goal/DisplayGoal";

interface Transaction {
    id?: string;
    amount?: number;
    description?: string;
}

interface ParentComponentProps {
    transactions?: Transaction[];
    collectionName?: string;
}

export default function Abstra({
    transactions,
    collectionName,
}: ParentComponentProps) {
    const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(
        null
    );
    const [deletingTransaction, setDeletingTransaction] = useState<Transaction | null>(
        null
    );

    const handleEdit = (transaction: Transaction) => {
        setEditingTransaction(transaction);
    };

    const handleCancelEdit = () => {
        setEditingTransaction(null);
    };

    const handleConfirmDelete = () => {
        // Perform deletion logic here using deletingTransaction details
        // ...

        // Once deleted, reset deletingTransaction state
        setDeletingTransaction(null);
    };

    const handleCancelDelete = () => {
        setDeletingTransaction(null);
    };

    const user = auth.currentUser;
    const admin = user?.email === 'stoetenremco.rs@gmail.com';

    if (admin) {
        return (
            <div className="flex flex-col items-center ">
                <h1 className="text-2xl font-bold">You are not authorized to access this page.</h1>
                <Link href="/dashboard" className="text-blue-500 hover:underline">Go back to dashboard</Link>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-2">

            <GoalSetting />
            <CreateCategory />
            <CreateExpense />
            <DisplayGoal />
            <div>
                {transactions && transactions.map((transaction) => (
                    <div key={transaction.id}>
                        <p>Amount: {transaction.amount}</p>
                        <p>Description: {transaction.description}</p>
                        <Button onClick={() => handleEdit(transaction)}>Edit</Button>
                        <Button onClick={() => setDeletingTransaction(transaction)}>Delete</Button>
                    </div>
                ))}


                {deletingTransaction && (
                    <ConfirmDialog
                        onConfirm={handleConfirmDelete}
                        onCancel={handleCancelDelete}
                    />
                )}
            </div>
        </div>
    );
}
