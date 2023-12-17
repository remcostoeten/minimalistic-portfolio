'use client';
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/core/(database)/firebase';
import { Button } from '@nextui-org/react';
import { Input } from '@/components/ui/input';

type CreateSnippet = {
    onCategoryAdded?: (newCategory: any) => void;
};

const CreateSnippetCategory = ({ onCategoryAdded }): CreateSnippet => {
    const [categoryName, setCategoryName] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const docRef = await addDoc(collection(db, 'snippet-categories'), { categoryName });
            const newCategory = { id: docRef.id, categoryName };
            setCategoryName(''); // reset the input field
            onCategoryAdded(newCategory); // callback to parent component
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };

    return (
        <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
            <label>
                Category Name:
                <Input
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                />
            </label>
            <Button variant='ghost' type="submit">Add Category</Button>
        </form>
    );
};

export default CreateSnippetCategory;
