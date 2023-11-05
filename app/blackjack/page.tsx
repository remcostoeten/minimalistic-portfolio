'use client';
import React, { useState } from 'react';
import blackjackData from '@/lib/blackjack.json';
import { Button } from '@nextui-org/react';

const Page = () => {
  const [playerCard1, setPlayerCard1] = useState('');
  const [playerCard2, setPlayerCard2] = useState('');
  const [dealerUpcard, setDealerUpcard] = useState('');
  const [decision, setDecision] = useState('');

  const handleCalculateDecision = () => {
    if (playerCard1 && playerCard2 && dealerUpcard) {
      const cardValuesMap = { 'A': 1, 'J': 10, 'Q': 10, 'K': 10 };
      const card1Value = isNaN(Number(playerCard1)) ? cardValuesMap[playerCard1] : parseInt(playerCard1);
      const card2Value = isNaN(Number(playerCard2)) ? cardValuesMap[playerCard2] : parseInt(playerCard2);
      const playerHandValue = (card1Value + card2Value).toString().toUpperCase();
      const dealerUpcardValue = dealerUpcard.toUpperCase();

      if (blackjackData.strategy[playerHandValue]) {
        const action = blackjackData.strategy[playerHandValue][dealerUpcardValue];
        setDecision(action);
      } else {
        setDecision('Invalid input');
      }
    } else {
      setDecision('Please enter all hands');
    }
  };

  const cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '0', '10', 'A'];

  return (
    <div className='p-10 rounded-lg border border-zinc-200 bg-white text-zinc-950 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 mb-4 flex gap-4 flex-col w-full' >
      <h1 className="text-2xl font-bold mb-4">Blackjack Decision Maker</h1>
      <div className="flex flex-col md:flex-row gap-8 w-full">
        <div className='rounded-lg border border-zinc-200 bg-white text-zinc-950 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 mb-4 flex gap-4 flex-col w-full' >
          <label className="block text-sm font-medium">Your First Card:</label>
          <div className="grid grid-cols-4 gap-2">
            {cardValues.map((value) => (
              <button
                key={value}
                onClick={() => setPlayerCard1(value)}
                className="px-2 py-1 bg-indigo-900 text-white rounded"
              >
                {value}
              </button>
            ))}
          </div>
          <span>Selected: {playerCard1}</span>
        </div>
        <div className='rounded-lg border border-zinc-200 bg-white text-zinc-950 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 mb-4 flex gap-4 flex-col w-full' >
          <label className="block text-sm font-medium">Your Second Card:</label>
          <div className="grid grid-cols-4 gap-2">
            {cardValues.map((value) => (
              <button
                key={value}
                onClick={() => setPlayerCard2(value)}
                className="px-2 py-1 bg-indigo-500 text-white rounded"
              >
                {value}
              </button>
            ))}
          </div>
          <span>Selected: {playerCard2}</span>
        </div>
        <div className='rounded-lg border border-zinc-200 bg-white text-zinc-950 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 mb-4 flex gap-4 flex-col w-full' >
          <label className="block text-sm font-medium">Dealer's Card:</label>
          <div className="grid grid-cols-4 gap-2">
            {cardValues.map((value) => (
              <button
                key={value}
                onClick={() => setDealerUpcard(value)}
                className="px-2 py-1 bg-red-950 text-white rounded"
              >
                {value}
              </button>
            ))}
          </div>
          <span>Selected: {dealerUpcard}</span>
        </div>
      </div>
      <Button onClick={handleCalculateDecision}>Calculate Decision</Button>
      <div>Decision: {decision}</div>
    </div>
  );
};

export default Page;