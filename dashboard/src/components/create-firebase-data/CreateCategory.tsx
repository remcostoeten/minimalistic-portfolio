'use client';
import { useState } from 'react';
import { FirebaseForm } from '../FirebaseForm';

export function CreateCategory() {
    const [categoryName, setCategoryName] = useState('');

    const fields = [
        { name: 'categoryName', type: 'text', placeholder: 'Category Name' },
    ];

    return (
        <FirebaseForm fields={fields} collectionName="categories" />
    );
}