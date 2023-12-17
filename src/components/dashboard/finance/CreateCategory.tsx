import { FirebaseForm } from "./FirebaseForm";

export function CreateCategory() {
    const fields = [
        { name: 'categoryName', type: 'text', placeholder: 'Category Name' },
    ];

    return (
        <FirebaseForm fields={fields} collectionName="categories" />
    );
}