'use client';
import React, { useEffect, useCallback, useMemo, useState, Suspense, useRef } from "react";
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
    Unsubscribe,
    DocumentData,
    DocumentReference,
    Transaction,
    QuerySnapshot,
} from "firebase/firestore";
const BalanceDisplay = React.lazy(() => import("@/components/transactions/Balance"));
const TransactionForm = React.lazy(() => import("@/components/transactions/TransactionForm"));
const TransactionList = React.lazy(() => import("@/components/transactions/TransactionList"));
import { toast } from 'sonner'
import autoAnimate from "@formkit/auto-animate";

import { Card } from "@/components/ui/card";
import CategoryForm from "@/components/transactions/CategoryForm";
let db;

const loadDb = async () => {
    if (!db) {
        const module = await import('@/lib/firebase');
        db = module.db;
    }
    return db;
};

const TransactionPage: React.FC = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [totalDeposits, setTotalDeposits] = useState(0);
    const [totalWithdrawals, setTotalWithdrawals] = useState(0);
    const parentRef = useRef(null);

    useEffect(() => {
        if (parentRef.current) {
            autoAnimate(parentRef.current);
        }
    }, []); // Empty dependency array means this effect runs once when the component mounts


    function generateUniqueID() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    useEffect(() => {
        let unsubscribe: Unsubscribe | undefined;
        loadDb().then(db => {
            unsubscribe = onSnapshot(collection(db, "transactions"), (snapshot: QuerySnapshot<DocumentData>) => {
                const fetchedTransactions: Transaction[] = [];
                let deposits = 0;
                type Transaction = {
                    id: string;
                    amount: number;
                    type: "deposit" | "withdrawal";
                    timestamp: Timestamp;
                    date: string;
                };

                let withdrawals = 0;

                setTotalWithdrawals(withdrawals);
            });
        });

        return () => unsubscribe && unsubscribe();
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
            const docRef: DocumentReference<DocumentData> = await addDoc(collection(db, "transactions"), newTransaction);
            newTransaction.id = docRef.id;
            setTransactions((prevTransactions) => [newTransaction, ...prevTransactions]);

            if (type === "deposit") {
                setTotalDeposits((prevTotal) => prevTotal + amount);
                toast.success('Deposit added!');
            } else {
                setTotalWithdrawals((prevTotal) => prevTotal + amount);
                toast.success('Withdrawal added!');
            }
        } catch (error) {
            console.error("Error adding transaction :", error);
            toast.error('Error adding transaction!');
        }
    }, []);

    const handleCreateCategory = async (category: string) => {
        try {
            await addDoc(collection(db, "categories"), { name: category });
            console.log("Category added successfully");
        } catch (error) {
            console.error("Error adding category: ", error);
        }
    };

    const handleClearTransaction = useCallback(async (transactionId: string) => {
        try {
            await deleteDoc(doc(db, "transactions", transactionId));
            setTransactions((prevTransactions) => prevTransactions.filter((t) => t.id !== transactionId));

            const transactionToDelete = transactions.find(t => t.id === transactionId);
            if (transactionToDelete) {
                if (transactionToDelete.type === "deposit") {
                    setTotalDeposits((prevTotal) => prevTotal - transactionToDelete.amount);
                } else {
                    setTotalWithdrawals((prevTotal) => prevTotal - transactionToDelete.amount);
                }
            }
        } catch (error) {
            console.error("Error clearing transaction:", error);
        }
    }, [transactions]);

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
        <Card className="p-10" ref={parentRef}>
            <h1>Transaction Tracker</h1>
            {memoizedTransactionForm}
            {memoizedTransactionList}
            {memoizedBalanceDisplay}
            <CategoryForm onSubmit={handleCreateCategory} />
        </Card>
    );
};

export default TransactionPage;