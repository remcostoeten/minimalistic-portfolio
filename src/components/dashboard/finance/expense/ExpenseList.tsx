// ExpenseList.tsx
import { db } from '@/core/(database)/firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';

const ExpenseList = () => {
    const [expenses, setExpenses] = useState([]);
    const [filter, setFilter] = useState('');
    const [sortBy, setSortBy] = useState('date');

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'expenses'), (snapshot) => {
            const expensesData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setExpenses(expensesData);
        });

        return () => unsubscribe();
    }, []);

    const filteredExpenses = expenses.filter((expense) =>
        expense.category?.toLowerCase().includes(filter.toLowerCase())
    );

    const sortedExpenses = filteredExpenses.sort((a, b) => {
        switch (sortBy) {
            case 'date':
                return new Date(b.date).getTime() - new Date(a.date).getTime() as any;
            case 'category':
                return a.category.localeCompare(b.category);
            case 'amount':
                return b.amount - a.amount as any;
            default:
                return 0 as any;
        }
    });

    return (
        <div>
            <h2>Expense List</h2>
            <label>
                Filter by Category:
                <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
            </label>

            <label>
                Sort by:
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="date">Date</option>
                    <option value="category">Category</option>
                    <option value="amount">Amount</option>
                    {/* Add more options for additional sorting criteria */}
                </select>
            </label>

            <ul>
                {sortedExpenses.map((expense) => (
                    <li key={expense.id}>
                        {`Date: ${expense.date} | Category: ${expense.category} | Amount: $${expense.amount}`}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExpenseList;
