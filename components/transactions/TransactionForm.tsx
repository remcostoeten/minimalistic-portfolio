'use client';
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { db } from "@vercel/postgres";
import { getDocs, collection } from "firebase/firestore";

interface TransactionFormProps {
    onSubmit: (amount: number, type: "deposit" | "withdrawal", date: string, group: string) => void;
}

const TransactionForm: React.FC<TransactionFormProps> = ({ onSubmit }) => {
    const [amount, setAmount] = useState("");
    const [transactionType, setTransactionType] = useState<"deposit" | "withdrawal">("deposit");
    const [selectedDate, setSelectedDate] = useState<string>(new Date().toLocaleDateString());
    const [group, setGroup] = useState<string>("");
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
     useEffect(() => {
        const fetchCategories = async () => {
            const categoryData = await getDocs(collection(db, "categories"));
            setCategories(categoryData.docs.map(doc => doc.data()));
        };

        fetchCategories();
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!amount) {
            return;
        }
        onSubmit(parseFloat(amount), transactionType, selectedDate, group);
        setAmount("");
        setGroup("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Amount:
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </label>
            <label>
                Type:
                <select
                    value={transactionType}
                    onChange={(e) => setTransactionType(e.target.value as "deposit" | "withdrawal")}
                >
                    <option value="deposit">Deposit</option>
                    <option value="withdrawal">Withdrawal</option>
                </select>
            </label>
            <label>
                Date:
                <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
            </label>
            <label>
                Group:
                <Input type="text" value={group} onChange={(e) => setGroup(e.target.value)} />
            </label>
            <Button type="submit">Submit</Button>
        </form>
    );
};

export default TransactionForm;