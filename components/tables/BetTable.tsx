'use client'

import { useState } from "react";
import { Input } from "../ui/input";
import React from "react";

function BettingTable() {
  const [bet1, setBet1] = useState(0);
  const [bet2, setBet2] = useState(0);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);

  const handleInputChange1 = (event) => {
    setBet1(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setBet2(event.target.value);
  };

  const handleWinsChange = (event) => {
    setWins(event.target.value);
  };

  const handleLossesChange = (event) => {
    setLosses(event.target.value);
  };

  const totalWinnings = wins * bet1;
  const totalLosses = losses * bet2;

  return (
    <div className="p-6 bg-gray-800 text-white">
      <form className="mb-4 flex gap-2 text-left items-center">
        <div className='flex flex-col items-center gap-2'>
          <label htmlFor="bet1" className="block text-sm font-medium text-gray-200">
            Enter your first bet
          </label>
          <Input
            type="number"
            id="bet1"
            className="mt-1 block w-full py-2 px-3 border border-gray-700 bg-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={bet1}
            onChange={handleInputChange1} />
        </div>
        <div className='flex flex-col items-center gap-2'>
          <label htmlFor="bet2" className="block text-sm font-medium text-gray-200">
            Enter your second bet
          </label>
          <Input
            type="number"
            id="bet2"
            className="mt-1 block w-full py-2 px-3 border border-gray-700 bg-gray-700 text-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={bet2}
            onChange={handleInputChange2} />
        </div>
      </form>
      <table className="min-w-full divide-y divide-gray-700 text-white">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Step
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Bet 1
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Bet 2
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-700 divide-y divide-gray-600">
          {[...Array(20)].map((_, i) => (
            <tr key={i}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{i + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{(bet1 * Math.pow(2, i)).toLocaleString()},-</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">€{(bet2 * Math.pow(2, i)).toLocaleString()},-</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BettingTable;