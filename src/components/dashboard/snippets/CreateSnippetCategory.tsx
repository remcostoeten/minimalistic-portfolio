'use client';
import { Input } from '@/components/ui/input';
import { useFirestoreAdd } from '@/hooks/useFirestoreAdd';
import { Button } from '@nextui-org/react';
import React, { useState } from 'react';
import { toast } from 'sonner';

function CategoryForm() {
    const [categoryName, setCategoryName] = useState("");
    const addData = useFirestoreAdd();

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const data = {
            categoryName,
        };

        const docId = await addData("snippet-categories", data);
        toast.success("Category added successfully");
        setCategoryName("");
    };

    return (
        <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
            <Input
                type="text"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                placeholder="Category name"
            />
            <Button variant='ghost' type="submit">Add Category</Button>
        </form>
    );
}

export default CategoryForm;