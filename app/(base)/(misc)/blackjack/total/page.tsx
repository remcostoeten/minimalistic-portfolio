'use client'
import { Card } from '@nextui-org/react';
import { useState } from 'react';

const Casino = () => {
  const [totalDebt, setTotalDebt] = useState<number>(0);
  const [totalSessionDeposited, setTotalSessionDeposited] = useState<number>(0);
  const [totalSessionWithdrawn, setTotalSessionWithdrawn] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Calculate total debt
    const newTotalDebt = totalDebt + totalSessionDeposited - totalSessionWithdrawn;
    setTotalDebt(newTotalDebt);

    // Reset form values
    setTotalSessionDeposited(0);
    setTotalSessionWithdrawn(0);
  };

  const sessionDifference = totalSessionDeposited - totalSessionWithdrawn;

  return (
    <Card className="container mx-auto mt-8 text-white geistOldp-10">
      <h1 className="text-3xl font-bold mb-4">Casino Statistics</h1>

      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-4 md:col-span-2 lg:col-span-1">
          <h2 className="text-xl font-semibold mb-2">Total Debt</h2>
          <p className="text-2xl font-bold">{totalDebt} €</p>
        </div>

        <div className="col-span-4 md:col-span-2 lg:col-span-1">
          <h2 className="text-xl font-semibold mb-2">Total Session Deposited</h2>
          <p className="text-2xl font-bold">{totalSessionDeposited} €</p>
        </div>

        <div className="col-span-4 md:col-span-2 lg:col-span-1">
          <h2 className="text-xl font-semibold mb-2">Total Session Withdrawn</h2>
          <p className="text-2xl font-bold">{totalSessionWithdrawn} €</p>
        </div>

        <div className="col-span-4 md:col-span-2 lg:col-span-1">
          <h2 className="text-xl font-semibold mb-2">Session Difference</h2>
          <p className="text-2xl font-bold">{sessionDifference} €</p>
        </div>
      </div>

      <form className="mt-8" onSubmit={handleSubmit}>
        <label className="block mb-2" htmlFor="totalSessionDeposited">
          Total Session Deposited (€):
          <input
            type="number"
            id="totalSessionDeposited"
            value={totalSessionDeposited}
            onChange={(e) => setTotalSessionDeposited(Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </label>

        <label className="block mb-2" htmlFor="totalSessionWithdrawn">
          Total Session Withdrawn (€):
          <input
            type="number"
            id="totalSessionWithdrawn"
            value={totalSessionWithdrawn}
            onChange={(e) => setTotalSessionWithdrawn(Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </label>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
        >
          Add Values
        </button>
      </form>
    </Card>
  );
};

export default Casino;

