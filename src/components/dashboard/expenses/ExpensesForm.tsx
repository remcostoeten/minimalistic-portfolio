import { FirebaseForm } from "./FirebaseForm";

type Field = {
    name?: string;
    type?: string;
    placeholder?: string;
    options?: { id: string, name: string }[];
}

export function CreateExpense() {
    const fields: Field[] = [
        { name: 'amount', type: 'number', placeholder: 'Amount' },
        { name: 'description', type: 'text', placeholder: 'Description' },
        { name: 'category', type: 'select', options: [{ id: 'categories', name: 'Categories' }] },
    ]

    return <FirebaseForm fields={fields} collectionName="expenses" />
}

export function CreateIncome() {
    const fields: Field[] = [
        { name: 'amount', type: 'number', placeholder: 'Amount' },
        { name: 'source', type: 'text', placeholder: 'Source' },
    ]

    return <FirebaseForm fields={fields} collectionName="income" />
}