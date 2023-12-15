'use client';
import React, { useEffect, useState } from "react"
import { addDoc, collection, onSnapshot } from "firebase/firestore"
import { toast } from "sonner"
import { db } from "@/core/firebase";
import { Input } from "./ui/Input";
import { Button, Select, SelectItem } from "@nextui-org/react";

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
                });
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
            const valuesWithDate = { ...values, date: new Date() };
            await addDoc(collection(db, collectionName), valuesWithDate);
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
                            <Select
                                className="max-w-xs"
                            >
                                {field.options?.map((option) => (
                                    <SelectItem key={option.id} value={option.id}>
                                        {option.categoryName}
                                    </SelectItem>
                                ))}
                            </Select>
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
            <Button>Add item</Button>
        </form >
    );
}

