'use client';
import React, { useState } from 'react';
import blackjackData from '@/lib/blackjack.json'; // Assuming the JSON file is correctly located

const BlackjackDecision = () => {
  const [playerHand, setPlayerHand] = useState('');
  const [dealerUpcard, setDealerUpcard] = useState('');
  const [decision, setDecision] = useState('');

  const handleCalculateDecision = () => {
    if (playerHand && dealerUpcard) {
      const playerHandValue = playerHand.toUpperCase();
      const dealerUpcardValue = dealerUpcard.toUpperCase();

      if (blackjackData.strategy[playerHandValue]) {
        const action = blackjackData.strategy[playerHandValue][dealerUpcardValue];
        setDecision(action);
      } else {
        setDecision('Invalid input');
      }
    } else {
      setDecision('Please enter both hands');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Blackjack Decision Maker</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium">Your Hand:</label>
        <input
          type="text"
          value={playerHand}
          onChange={(e) => setPlayerHand(e.target.value)}
          placeholder="e.g., 10 or A2"
          className="w-32 border border-gray-300 rounded py-1 px-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Dealer's Upcard:</label>
        <input
          type="text"
          value={dealerUpcard}
          onChange={(e) => setDealerUpcard(e.target.value)}
          placeholder="e.g., 6 or K"
          className="w-32 border border-gray-300 rounded py-1 px-2"
        />
      </div>
      <button
        onClick={handleCalculateDecision}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Calculate Decision
      </button>
      <div className="mt-4">
        {decision && (
          <p className="font-semibold">
            Best Decision: <span className="text-green-500">{decision}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default BlackjackDecision;

