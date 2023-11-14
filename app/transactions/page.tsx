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
} from "firebase/firestore";
import { Transaction } from "@/lib/types/types";
const BalanceDisplay = React.lazy(() => import("@/components/transactions/Balance"));
const TransactionForm = React.lazy(() => import("@/components/transactions/TransactionForm"));
const TransactionList = React.lazy(() => import("@/components/transactions/TransactionList"));
import { toast } from 'sonner'
import autoAnimate from "@formkit/auto-animate";
import { Card } from "@/components/ui/card";
import { TransactionsTableShell } from "@/components/data-table/TableShell";
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
        let unsubscribe;
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
        <><Card className="p-10" ref={parentRef}>
            <h1>Transaction Tracker</h1>
            {memoizedTransactionList}
            {memoizedBalanceDisplay}
        </Card><TransactionsTableShell data={transactions} /></>

    );
};

export default TransactionPage;