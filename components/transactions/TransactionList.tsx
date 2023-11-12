import { Timestamp } from "firebase/firestore";
import React from "react";

interface Transaction {
    id?: string;
    amount?: number;
    type?: "deposit" | "withdrawal"; // Corrected typo here
    timestamp?: Timestamp;
    date?: string;
}

interface TransactionListProps {
    transactions: Transaction[];
    onClearTransaction: (transactionId: string) => void;
    onClearAllTransactions: () => void;
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions, onClearTransaction, onClearAllTransactions }) => {
    const groupedTransactions: { [date: string]: Transaction[] } = {};

    transactions.forEach((transaction) => {
        if (transaction.date) {
            const dateKey = transaction.date;

            if (!groupedTransactions[dateKey]) {
                groupedTransactions[dateKey] = [];
            }

            groupedTransactions[dateKey].push(transaction);
        }
    });
    return (
        <div>
            <h2>Transactions</h2>
            {Object.entries(groupedTransactions).map(([date, transactionsForDate]) => (
                <div key={date}>
                    <h3>{date}</h3>
                    <ul>
                        {transactionsForDate.map((transaction) => (
                            <li key={transaction.id}> {/* Use transaction.id as the key */}
                                {transaction.type === "deposit" ? "Deposit" : "Withdrawal"}: ${transaction.amount} -{" "}
                                {transaction.timestamp && typeof transaction.timestamp.toDate === 'function' ? new Date(transaction.timestamp.toDate()).toLocaleString() : 'N/A'}
                                {transaction.id && <button onClick={() => transaction.id && onClearTransaction(transaction.id)}>Clear</button>}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            <button onClick={onClearAllTransactions}>Clear All Transactions</button>
        </div>
    );
};

export default TransactionList;