'use client';
import React, { useEffect, useState } from "react"
import { db } from "@/core/(database)/firebase"
import { addDoc, collection, onSnapshot } from "firebase/firestore"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Field = {
    name: string;
    type: 'text' | 'number' | 'select';
    placeholder?: string;
    optionsCollection?: string;
}

type FormProps = {
    fields: Field[] | any[];
    collectionName: string;
}

export function FirebaseForm({ fields, collectionName }: FormProps) {
    const [values, setValues] = useState<{ [key: string]: any }>({});

    useEffect(() => {
        fields.forEach((field) => {
            if (field.type === 'select' && field.optionsCollection) {
                const unsubscribe = onSnapshot(collection(db, field.optionsCollection), (snapshot) => {
                    const options: { id: string; categoryName: string }[] = [];
                    snapshot.forEach((doc) => {
                        const option = doc.data() as { id: string; categoryName: string };
                        option.id = doc.id;
                        options.push(option);
                    });
                    field.options = options;
                }); a
                return () => unsubscribe();
            }
        });
    }, [fields]);

    const handleChange = (name: string, value: any) => {
        setValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, collectionName), values);
            setValues({});
            toast.success('Item added!');
        } catch (error) {
            toast.error('Something went wrong!');
            console.error(error);
        }
    };

    return (
        <form className="flex gap-2 flex-col" onSubmit={handleSubmit}>
            <h2>Create a {collectionName}</h2>
            {fields.map((field) => {
                switch (field.type) {
                    case 'select':
                        return (
                            <select className="select select-secondary w-full max-w-xs" key={field.name} onChange={(e) => handleChange(field.name, e.target.value)}>
                                <option disabled selected>Select a category</option>
                                {field.options?.map((option) => (
                                    <option key={option.id} value={option.id}>
                                        {option.categoryName}
                                    </option>
                                ))}
                            </select>
                        );
                    case 'date':
                        return (
                            <Input
                                key={field.name}
                                type="date"
                                value={values[field.name] ?? ''}
                                onChange={(e) => handleChange(field.name, new Date(e.target.value))}
                                placeholder={field.placeholder}
                            />
                        );
                    default:
                        return (
                            <Input
                                key={field.name}
                                type={field.type}
                                value={values[field.name] ?? ''}
                                onChange={(e) => handleChange(field.name, field.type === 'number' ? e.target.valueAsNumber : e.target.value)}
                                placeholder={field.placeholder}
                            />
                        );
                }
            })}
            <button type="submit" className="btn btn-primary">
                Add Item
            </button>
        </form>
    );
}