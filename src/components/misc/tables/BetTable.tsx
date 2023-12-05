'use client'

import React, { useState } from "react";
import { Input } from "@c/ui/input";
import { Button } from "@c/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@c/ui/tooltip";

function BettingTable() {
  const [bet1, setBet1] = useState(0);
  const [bet2, setBet2] = useState(0);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [multiplier1, setMultiplier1] = useState(1);
  const [multiplier2, setMultiplier2] = useState(1);

  const handleInputChange1 = (event: { target: { value: React.SetStateAction<number>; }; }) => {
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

  const handleMultiplierChange1 = (event: { target: { value: React.SetStateAction<number>; }; }) => {
    setMultiplier1(event.target.value);
  };

  const handleMultiplierChange2 = (event: { target: { value: React.SetStateAction<number>; }; }) => {
    setMultiplier2(event.target.value);
  };

  const LabeledInput = ({ id, label, value, onChange }) => (
    <div className='flex flex-col  gap-2 justify-between w-[30%]'>
      <label htmlFor={id} className="block text-sm font-medium text-gray-200">
        {label}
      </label>
      <Input
        type="number"
        id={id}
        className="mt-1 block w-full py-2 px-3 border-shad text-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        value={value}
        onChange={onChange} />
    </div>
  );

  const clearAll = () => {
    setBet1(0);
    setBet2(0);
    setWins(0);
    setLosses(0);
    setMultiplier1(1);
    setMultiplier2(1);
  }

  return (
    <TooltipProvider>
      <div className="p-6 border-shad border text-white flex flex-col gap-4">
        <p className="border-b border-shad ">Dubble down calculator. Two seperate collumns to compare strategies.</p>
        <form className="mb-4 flex gap-2 text-left flex-wrap ">
          <LabeledInput id="bet1" label="Enter your first bet" value={bet1} onChange={handleInputChange1} />
          <LabeledInput id="bet2" label="Enter your second bet" value={bet2} onChange={handleInputChange2} />
          <LabeledInput id="wins" label="Enter number of wins" value={wins} onChange={handleWinsChange} />
          <LabeledInput id="losses" label="Enter number of losses" value={losses} onChange={handleLossesChange} />
          <LabeledInput id="multiplier1" label="Enter your multiplier for bet 1" value={multiplier1} onChange={handleMultiplierChange1} />
          <LabeledInput id="multiplier2" label="Enter your multiplier for bet 2" value={multiplier2} onChange={handleMultiplierChange2} />
        </form>
        <Button className="w-fit" onClick={clearAll}>Clear all</Button>
        <p>Total Wins: €{totalWinnings.toLocaleString()},-</p>
        <p>Total losses: €{totalLosses.toLocaleString()},-</p>
        <table className="min-w-full divide-y text-white">
          <thead className="">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text uppercase tracking-wider">
                <Tooltip>
                  <TooltipTrigger>Round</TooltipTrigger>
                  <TooltipContent>
                    <p className="lowercase">amount of rounds</p>
                  </TooltipContent>
                </Tooltip>
              </th>

              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text uppercase tracking-wider">
                <Tooltip>
                  <TooltipTrigger>Bet 1</TooltipTrigger>
                  <TooltipContent>
                    <p className="lowercase">Money you're betting in strategy #1</p>
                  </TooltipContent>
                </Tooltip>              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text uppercase tracking-wider">
                <Tooltip>
                  <TooltipTrigger>Bet 2</TooltipTrigger>
                  <TooltipContent>
                    <p className="lowercase">Money you're betting in strategy #2</p>
                  </TooltipContent>
                </Tooltip>
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text uppercase tracking-wider">
                Individual Win Titration
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-600">
            {[...Array(20)].map((_, i) => (
              <tr key={i}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-text" >{i + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-text" >{(bet1 * Math.pow(multiplier1, i)).toLocaleString()},-</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-text" >€{(bet2 * Math.pow(multiplier2, i)).toLocaleString()},-</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-text" >{(wins * Math.pow(2, i)).toLocaleString()},-</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </TooltipProvider>);
}

export default BettingTable;