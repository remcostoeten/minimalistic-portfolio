import React, { useState, useEffect } from 'react';

const BetTable = ({ startingBet, rounds }) => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    let bet = startingBet;
    let totalCost = 0;
    let newRows = [];

    for (let i = 0; i < rounds; i++) {
      totalCost += bet;
      newRows.push({ round: i + 1, bet, totalCost });
      bet *= 2;
    }

    setRows(newRows);
  }, [startingBet, rounds]);

  return (
    <table className="min-w-full divide-y divide-gray-200 shadow-md">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Round</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bet</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Cost</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {rows.map((row, index) => (
          <tr key={index}>
            <td className="px-6 py-4 whitespace-nowrap">{row.round}</td>
            <td className="px-6 py-4 whitespace-nowrap">{row.bet}</td>
            <td className="px-6 py-4 whitespace-nowrap">{row.totalCost}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const BetCalculation = () => {
  const [bet1, setBet1] = useState(1);
  const [bet2, setBet2] = useState(1);
  const [rounds, setRounds] = useState(20);

  return (
    <div className="p-10">
      <input type="number" value={bet1} onChange={e => setBet1(e.target.value)} />
      <BetTable startingBet={bet1} rounds={rounds} />
      <input type="number" value={bet2} onChange={e => setBet2(e.target.value)} />
      <BetTable startingBet={bet2} rounds={rounds} />
      <input type="number" value={rounds} onChange={e => setRounds(e.target.value)} />
    </div>
  );
};

export default BetCalculation;