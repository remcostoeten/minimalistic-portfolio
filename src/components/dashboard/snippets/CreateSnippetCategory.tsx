'use client';
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/core/(database)/firebase';
import { Button } from '@nextui-org/react';
import { Input } from '@/components/ui/input';

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