import { CreateCategory } from '@/components/create-firebase-data/CreateCategory'
import { CreateExpense } from '@/components/create-firebase-data/CreateExpense'

export default function Home() {
  return (
    <>
      <CreateCategory />
      <CreateExpense />
    </>
  )
}
