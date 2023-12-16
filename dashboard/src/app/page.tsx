import { CreateCategory } from '@/components/create-firebase-data/CreateCategory'
import { CreateExpense } from '@/components/create-firebase-data/CreateExpense'
import { CreateIncome } from '@/components/create-firebase-data/CreateIncome'
import DisplayCards from '@/components/DisplayCards';
import ContainerShell from '@/components/layout/ContainerShell'
import StatisticsCards from '@/components/StatisticsCards';
export default function Home() {
  return (
    <>
      <ContainerShell padding='py-4'>
        <div className='flex justify-between gap-2 items-center'>
          <DisplayCards />
        </div>
        <CreateCategory />
        <CreateExpense />
        <CreateIncome />
      </ContainerShell>
    </>
  )
}
