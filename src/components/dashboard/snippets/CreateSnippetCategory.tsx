'use client';
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/core/(database)/firebase';

const CreateSnippetCategory = () => {
    const [categoryName, setCategoryName] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            await addDoc(collection(db, 'snippet-categories'), { categoryName });
            setCategoryName(''); // reset the input field
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Category Name:
                <input
                    type="text"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                />
            </label>
            <button type="submit">Add Category</button>
        </form>
    );
};

export default CreateSnippetCategory;