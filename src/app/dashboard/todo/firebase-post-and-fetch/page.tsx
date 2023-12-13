import React from 'react'
import Abstra from './abstraction';
import { CategoriesList } from './DisplayCategory';
import FinanceCards from '@/components/dashboard/finance/shell/Blocks';
export default function page() {
    return (
        <>
            <FinanceCards />
            <Abstra transactions={[]} collectionName={''} /><CategoriesList /></>
    )
}
