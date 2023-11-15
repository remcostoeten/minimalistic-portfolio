import React, { useState, useEffect } from 'react';
import { Input } from '../ui/input';
import TableSkeleton from '../loaders/Skeleton';
import { CardBody } from '@nextui-org/react';
import { Card } from '../ui/card';

type Row = {
  round: number;
  bet: any;
  totalCost: number;
};

const BetTable = ({ startingBet, rounds }) => {
  const [rows, setRows] = useState<Row[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const newRows: Row[] = [];
    let totalCost = 0;
    let bet = startingBet;

    for (let i = 0; i < rounds; i++) {
      totalCost += bet;
      newRows.push({ round: i + 1, bet, totalCost });
      bet *= 2;
    }

    setRows(newRows);
    setIsLoading(false);
  }, [startingBet, rounds]);

  return (
    <div className='fade'>
      {isLoading ? (
        <TableSkeleton />
      ) : (
        <table className="min-w-full divide-y shadow-md text-white">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Round</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Bet</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Total Cost</th>
            </tr>
          </thead>
          <tbody className="bg-gray-800 divide-y divide-gray-700">
            {rows.map((row, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{row.round}</td>
                <td className="px-6 py-4 whitespace-nowrap">{row.bet}</td>
                <td className="px-6 py-4 whitespace-nowrap">{row.totalCost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const BetCalculationTable = () => {
  const [bet1, setBet1] = useState(1);
  const [bet2, setBet2] = useState(1);
  const [rounds, setRounds] = useState(20);

  return (
    <Card className="p-10 text-white">
      <Input type="number" value={bet1} onChange={e => setBet1(e.target.value)} className="bg-gray-800 text-white" />
      <BetTable startingBet={bet1} rounds={rounds} />
      <Input type="number" value={bet2} onChange={e => setBet2(e.target.value)} className="bg-gray-800 text-white" />
      <BetTable startingBet={bet2} rounds={rounds} />
      <Input type="number" value={rounds} onChange={e => setRounds(e.target.value)} className="bg-gray-800 text-white" />
    </Card>
  );
};

export default BetCalculationTable;