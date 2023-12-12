'use client';
// EditTransactionForm.tsx
import React, { useState } from "react";
import { db } from "@/core/(database)/firebase";
import { updateDoc, doc } from "firebase/firestore";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface EditTransactionFormProps {
    initialTransaction: {
        id: string;
        amount?: number;
        description?: string;
    };
    collectionName: string;
}

export default function EditTransactionForm({ initialTransaction, collectionName }: EditTransactionFormProps) {
    const [values, setValues] = useState(initialTransaction);

    const handleChange = (name: string, value: any) => {
        setValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await updateDoc(doc(db, collectionName, initialTransaction.id), values);
            toast.success("Transaction updated!");
        } catch (error) {
            toast.error("Something went wrong!");
            console.error(error);
        }
    };

    return (
        <form className="flex gap-2 flex-col" onSubmit={handleSubmit}>
            <Input
                type="number"
                value={values.amount ?? ""}
                onChange={(e) => handleChange("amount", e.target.valueAsNumber)}
                placeholder="Amount"
            />
            <Input
                type="text"
                value={values.description ?? ""}
                onChange={(e) => handleChange("description", e.target.value)}
                placeholder="Description"
            />
            <button type="submit" className="btn btn-primary">
                Update Transaction
            </button>
        </form>
    );
};
