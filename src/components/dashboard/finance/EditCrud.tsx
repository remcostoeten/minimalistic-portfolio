import { Input } from '@/components/ui/input'
import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from "@/core/(database)/firebase";
import { useEditData } from '@/hooks/useEditData';

interface EditDocumentFormProps {
    collectionName: string;
    docId: string;
    initialFormValues: any;
    onClose: () => void;
}

const EditDocumentForm: React.FC<EditDocumentFormProps> = ({ collectionName, docId, initialFormValues, onClose }) => {
    const [formValues, setFormValues] = useState(initialFormValues);
    const editDocument = useEditData(collectionName);

    useEffect(() => {
        const fetchDocument = async () => {
            const docSnapshot = await getDoc(doc(db, collectionName, docId));
            if (docSnapshot.exists()) {
                setFormValues(docSnapshot.data());
            }
        };

        fetchDocument();
    }, [collectionName, docId]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { updateData } = useEditData(collectionName);

        try {
            await updateData(docId, formValues);
            onClose();
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            {Object.keys(formValues).map((key) => (
                <input
                    key={key}
                    name={key}
                    value={formValues[key]}
                    onChange={handleChange}
                />
            ))}
            <button type="submit">Save</button>
        </form>
    );
};

export default EditDocumentForm;