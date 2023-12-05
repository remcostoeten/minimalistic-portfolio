
export function CreateExpense() {
    const fields: Field[] = [
        { name: 'amount', type: 'number', placeholder: 'Amount' },
        { name: 'description', type: 'text', placeholder: 'Description' },
        { name: 'category', type: 'select', options: [{ id: 'categories', name: 'Categories' }] },
    ]

    return <GenericForm fields={fields} collectionName="expenses" />
}

export function CreateIncome() {
    const fields: Field[] = [
        { name: 'amount', type: 'number', placeholder: 'Amount' },
        { name: 'source', type: 'text', placeholder: 'Source' },
    ]

    return <GenericForm fields={fields} collectionName="income" />
}