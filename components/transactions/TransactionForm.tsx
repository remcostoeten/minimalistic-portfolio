'use client';
import React, { useState, useCallback } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface TransactionFormProps {
    onSubmit: (amount: number, type: "deposit" | "withdrawal", date: string, group: string) => void;
}

interface TransactionFormState {
    amount: string;
    transactionType: "deposit" | "withdrawal";
    selectedDate: string;
    group: string;
}

const initialFormState: TransactionFormState = {
    amount: "",
    transactionType: "deposit",
    selectedDate: new Date()?.toLocaleDateString() || "",
    group: "",
};

const TransactionForm: React.FC<TransactionFormProps> = ({ onSubmit }) => {
    const [form, setForm] = useState<TransactionFormState>(() => initialFormState);

    const handleChange = useCallback(({ target: { name, value } }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm(prevForm => ({ ...prevForm, [name]: value }));
    }, []);

    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!form.amount) {
            return;
        }
        onSubmit(parseFloat(form.amount), form.transactionType, form.selectedDate, form.group);
        setForm(initialFormState);
    }, [form, onSubmit]);

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Amount:
                <input name="amount" type="number" value={form.amount} onChange={handleChange} />
            </label>
            <label>
                Type:
                <select name="transactionType" value={form.transactionType} onChange={handleChange}>
                    <option value="deposit">Deposit</option>
                    <option value="withdrawal">Withdrawal</option>
                </select>
            </label>
            <label>
                Date:
                <input name="selectedDate" type="date" value={form.selectedDate} onChange={handleChange} />
            </label>
            <label>
                Group:
                <Input name="group" type="text" value={form.group} onChange={handleChange} />
            </label>
            <Button type="submit">Submit</Button>
        </form>
    );
};

export default TransactionForm;
