import React from 'react'
import Abstra from './abstraction';
import { CategoriesList } from './DisplayCategory';
export default function page() {
    return (
        <><Abstra transactions={[]} collectionName={''} /><CategoriesList /></>
    )
}
