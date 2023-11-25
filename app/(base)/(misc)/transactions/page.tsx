//@ts-ignore
//@ts-no-check
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
    Unsubscribe,
} from "firebase/firestore";
import { Transaction } from "@/core/types/types";
import BalanceDisplay from "@/components/transactions/Balance";
import TransactionForm from "@/components/transactions/TransactionForm";
import TransactionList from "@/components/transactions/TransactionList";
import { toast } from 'sonner';
import { db } from "@/core/(database)/firebase";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

const TransactionPage = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [totalDeposits, setTotalDeposits] = useState(0);
    const [totalWithdrawals, setTotalWithdrawals] = useState(0);

    function generateUniqueID() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    useEffect(() => {
        let unsubscribe: Unsubscribe;
        const loadDb = async () => {
            const module = await import('@/core/(database)/firebase');
            return module.db;
        };

        loadDb().then(db => {
            unsubscribe = onSnapshot(collection(db, "transactions"), (snapshot) => {
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
            const docRef = await addDoc(collection(db, "transactions"), newTransaction);
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

    const handleClearTransaction = useCallback(async (transactionId: string) => {
        try {
            await deleteDoc(doc(db, "transactions", transactionId));
            setTransactions((prevTransactions) => prevTransactions.filter((t) => t.id !== transactionId));
            toast.success('Transaction cleared!');
        } catch (error) {
            console.error("Error clearing transaction:", error);
            toast.error('Error clearing transaction!');
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
            toast.success('All transactions cleared!');
        } catch (error) {
            console.error("Error clearing all transactions:", error);
            toast.error('Error clearing all transactions!');
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
        <Card>
            <CardHeader><h1>Transaction tracker</h1></CardHeader>
            <CardBody>
                {memoizedTransactionForm}
                {memoizedTransactionList}
                {memoizedBalanceDisplay}
            </CardBody>
        </Card>
    );
};

export default TransactionPage;