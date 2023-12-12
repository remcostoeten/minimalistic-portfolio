import { Input } from '@/components/ui/input'
import React, { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import EditDocumentForm from "../EditCrud";
import { useFirestoreCollection } from '@/hooks/useFirestoreCollection';
import { useDeleteDocument } from '@/hooks/useDeleteFirestore';

type Income = {
    id: string;
    incomeName: string;
    amount: number;
};

export function IncomeList() {
    const incomes = useFirestoreCollection("incomes");
    const [editingIncomeId, setEditingIncomeId] = useState<string | null>(null);
    const deleteIncome = useDeleteDocument('incomes');

    const handleDelete = async (incomeId: string) => {
        const { success, error } = await deleteIncome(incomeId);
        if (success) {
            toast.success("Income deleted successfully.");
        } else {
            toast.error("Something went wrong.");
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Incomes</h2>
            {incomes.map((income) => (
                <div key={income.id}>
                    <p>{income.amount}</p>
                    <Button variant='outline' onClick={() => handleDelete(income.id)}>Delete Income</Button>
                    <Button variant='outline' onClick={() => setEditingIncomeId(income.id)}>Edit Income</Button>
                </div>
            ))}
            {editingIncomeId && (
                <EditDocumentForm
                    collectionName="incomes"
                    docId={editingIncomeId}
                    initialFormValues={{ incomeName: '' }}
                    onClose={() => setEditingIncomeId(null)}
                />
            )}
        </div>
    );
}