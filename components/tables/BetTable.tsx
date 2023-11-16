'use client'

import { useState } from "react";
import { Input } from "../ui/input";
import { Table, TableBody, TableHeader, TableRow } from "@nextui-org/table";
import { TableCell } from "@nextui-org/react";


function BettingTable() {
  const [bet1, setBet1] = useState(0);
  const [bet2, setBet2] = useState(0);

  const handleInputChange1 = (event) => {
    setBet1(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setBet2(event.target.value);
  };

  return (
    <div className="p-6">
      <form className="mb-4 flex gap-2 text-left items-center">
        <div className='flex flex-col items-center gap-2'>
          <label htmlFor="bet1" className="block text-sm font-medium text-gray-700">
            Enter your first bet
          </label>
          <Input
            type="number"
            id="bet1"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={bet1}
            onChange={handleInputChange1}
          />
        </div>
        <div className='flex flex-col items-center gap-2'>
          <label htmlFor="bet2" className="block text-sm font-medium text-gray-700">
            Enter your second bet
          </label>
          <Input
            type="number"
            id="bet2"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={bet2}
            onChange={handleInputChange2}
          />
        </div>
      </form>
      <Table className="min-w-full divide-y ">
        <TableHeader>
          <TableRow>
            <TableCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Step
            </TableCell>
            <TableCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Bet Size 1
            </TableCell>
            <TableCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Bet Size 2
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[...Array(20)].map((_, i) => (
            <TableRow key={i}>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{i + 1}</TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bet1 * Math.pow(2, i)}</TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bet2 * Math.pow(2, i)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div >
  );
}

export default BettingTable;