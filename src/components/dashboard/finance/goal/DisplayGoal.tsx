
'use client';
import { db } from "@/core/(database)/firebase";
import { onSnapshot, collection } from "firebase/firestore";
import { useState, useEffect } from "react";

const DisplayGoal = () => {
    const [goals, setGoals] = useState([]);
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const unsubscribeGoals = onSnapshot(collection(db, 'goals'), (snapshot) => {
            const goalsData = snapshot.docs.map((doc) => ({ id: doc.id, goalAmount: Number(doc.data().goalAmount) || 0, ...doc.data() }));
            setGoals(goalsData);
            console.log('Goals:', goalsData);
        });

        const unsubscribeExpenses = onSnapshot(collection(db, 'expenses'), (snapshot) => {
            const expensesData = snapshot.docs.map((doc) => ({ id: doc.id, amount: Number(doc.data().amount), ...doc.data() }));
            setExpenses(expensesData);
        });

        return () => {
            unsubscribeGoals();
            unsubscribeExpenses();
        };
    }, []);

    // Calculate total expenses
    const totalGoalAmount = goals.reduce((total, goal) => total + goal.targetAmount, 0);

    // Calculate total goal amount
    // const totalGoalAmount = goals.reduce((total, goal) => total + goal.goalAmount, 0);
    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
    
    // Calculate progress percentage
    const progress = (totalExpenses / totalGoalAmount) * 100;

    return (
        <div>
            <h2>Your Dashboard</h2>
            <p>Total Expenses: ${totalExpenses}</p>
            <p>Total Goal Amount: ${totalGoalAmount}</p>
            <p>Progress: {progress.toFixed(2)}%</p>
        </div>
    );
};

export default DisplayGoal;
