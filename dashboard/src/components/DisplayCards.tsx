'use client';
import React from 'react';
import StatisticsCards from './StatisticsCards';
import useFetchFirestore from '@/core/hooks/useFetchFirestore';

export default function DisplayCards() {
    const { data, error, loading } = useFetchFirestore('expenses');

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    console.log('Data from Firestore:', data); // Log the data to the console

    return (
        <div className="grid-container grid-cols-3">
            {data.map((item) => (
                <div key={item.id} className="grid-item">
                    {item.amount !== undefined && item.description !== undefined && (
                        <StatisticsCards title={item.description} amount={parseFloat(item.amount)} />
                    )}
                    {item.category !== undefined && item.date !== undefined && (
                        <div>
                            <p>Category: {item.category}</p>
                            <p>Date: {item.date.seconds}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
