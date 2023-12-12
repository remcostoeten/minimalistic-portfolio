'use client';

import { db } from "@/core/(database)/firebase";
import exp from "constants";
import { onSnapshot, collection } from "firebase/firestore";
import { useState, useEffect } from "react";

const ExpenseCategoriesOverview = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'expenses'), (snapshot) => {
            const expensesData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setExpenses(expensesData);
        });

        return () => unsubscribe();
    }, []);

    const expensesByCategory = expenses.reduce((acc, expense) => {
        const category = expense.category;
        acc[category] = (acc[category] || 0) + expense.amount;
        return acc;
    }, {});

    return (
        <div>
            <h2>Expense Categories Overview</h2>
            <ul>
                {Object.entries(expensesByCategory).map(([category, totalAmount]) => (
                    <li key={category}>{`${category}: $${(totalAmount as number).toFixed(2)}`}</li>
                ))}
            </ul>
        </div>
    );
}
export default ExpenseCategoriesOverview;