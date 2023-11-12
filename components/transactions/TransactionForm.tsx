// TransactionForm.tsx
import React, { useState } from "react";

interface TransactionFormProps {
    onSubmit: (amount: number, type: "deposit" | "withdrawal", date: string) => void;
}

const TransactionForm: React.FC<TransactionFormProps> = ({ onSubmit }) => {
    const [amount, setAmount] = useState("");
    const [transactionType, setTransactionType] = useState<"deposit" | "withdrawal">("deposit");
    const [selectedDate, setSelectedDate] = useState<string>(new Date().toLocaleDateString());

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!amount) {
            // You can add validation here if needed
            return;
        }
        onSubmit(parseFloat(amount), transactionType, selectedDate);
        setAmount("");
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
            <button type="submit">Submit</button>
        </form>
    );
};

export default TransactionForm;
