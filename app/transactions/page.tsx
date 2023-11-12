'use client';
import React, { useEffect, useCallback, useMemo, useState, Suspense } from "react";
import {
    collection,
    onSnapshot,
    addDoc,
    serverTimestamp,
    deleteDoc,
    query,
    getDocs,
    doc,
    Timestamp,
} from "firebase/firestore";
import { Transaction } from "@/lib/types/types";
import { db } from "@/lib/firebase";

const BalanceDisplay = React.lazy(() => import("@/components/transactions/Balance"));
const TransactionForm = React.lazy(() => import("@/components/transactions/TransactionForm"));
const TransactionList = React.lazy(() => import("@/components/transactions/TransactionList"));

const TransactionPage: React.FC = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [totalDeposits, setTotalDeposits] = useState(0);
    const [totalWithdrawals, setTotalWithdrawals] = useState(0);

    function generateUniqueID() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "transactions"), (snapshot) => {
            const fetchedTransactions: Transaction[] = [];
            let deposits = 0;
            let withdrawals = 0;

            snapshot.forEach((doc) => {
                const transaction = doc.data() as Transaction;
                fetchedTransactions.push(transaction);

                if (transaction.type === "deposit") {
                    deposits += transaction.amount;
                } else {
                    withdrawals += transaction.amount;
                }
            });

            setTransactions(fetchedTransactions);
            setTotalDeposits(deposits);
            setTotalWithdrawals(withdrawals);
        });

        return () => unsubscribe();
    }, []);

    const handleFormSubmit = useCallback(async (amount: number, type: "deposit" | "withdrawal", date: string) => {
        const newTransaction: Transaction = {
            id: generateUniqueID(),
            amount,
            type,
            timestamp: serverTimestamp() as Timestamp,
            date,
        };

        try {
            const docRef = await addDoc(collection(db, "transactions"), newTransaction);
            newTransaction.id = docRef.id;
            setTransactions((prevTransactions) => [newTransaction, ...prevTransactions]);

            if (type === "deposit") {
                setTotalDeposits((prevTotal) => prevTotal + amount);
            } else {
                setTotalWithdrawals((prevTotal) => prevTotal + amount);
            }
        } catch (error) {
            console.error("Error adding transaction:", error);
        }
    }, []);

    const handleClearTransaction = useCallback(async (transactionId: string) => {
        try {
            await deleteDoc(doc(db, "transactions", transactionId));
            setTransactions((prevTransactions) => prevTransactions.filter((t) => t.id !== transactionId));
        } catch (error) {
            console.error("Error clearing transaction:", error);
        }
    }, []);

    const handleClearAllTransactions = useCallback(async () => {
        try {
            const transactionsQuery = query(collection(db, "transactions"));
            const transactionsSnapshot = await getDocs(transactionsQuery);

            transactionsSnapshot.forEach((doc) => {
                deleteDoc(doc.ref);
            });

            setTransactions([]);
            setTotalDeposits(0);
            setTotalWithdrawals(0);
        } catch (error) {
            console.error("Error clearing all transactions:", error);
        }
    }, []);

    const memoizedTransactionForm = useMemo(() => (
        <Suspense fallback={<div>Loading TransactionForm...</div>}>
            <TransactionForm onSubmit={handleFormSubmit} />
        </Suspense>
    ), [handleFormSubmit]);

    const memoizedTransactionList = useMemo(() => (
        <Suspense fallback={<div>Loading TransactionList...</div>}>
            <TransactionList
                transactions={transactions}
                onClearTransaction={handleClearTransaction}
                onClearAllTransactions={handleClearAllTransactions}
            />
        </Suspense>
    ), [transactions, handleClearTransaction, handleClearAllTransactions]);

    const memoizedBalanceDisplay = useMemo(() => (
        <Suspense fallback={<div>Loading BalanceDisplay...</div>}>
            <BalanceDisplay totalDeposits={totalDeposits} totalWithdrawals={totalWithdrawals} />
        </Suspense>
    ), [totalDeposits, totalWithdrawals]);

    return (
        <div>
            <h1>Transaction Tracker</h1>
            {memoizedTransactionForm}
            {memoizedTransactionList}
            {memoizedBalanceDisplay}
        </div>
    );
};

export default TransactionPage;