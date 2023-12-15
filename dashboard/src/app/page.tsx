import { CreateCategory } from '@/components/create-firebase-data/CreateCategory'
import { CreateExpense } from '@/components/create-firebase-data/CreateExpense'
import { CreateIncome } from '@/components/create-firebase-data/CreateIncome'
import ContainerShell from '@/components/layout/ContainerShell'

export default function Home() {
  return (
    <>
      <ContainerShell padding='py-4'>
        <CreateCategory />
        <CreateExpense />
        <CreateIncome />
      </ContainerShell>
    </>
  )
}
