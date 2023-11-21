'use client';
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import blackjackData from '@/lib/config/blackjack.json';
import { toast } from 'sonner'
import SingleHand from '@/components/misc/BlackjackSingleHand';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';
import BettingTable from '@/components/tables/BetTable';
// Function to get the strategy based on player's hand and dealer's card
function getStrategy(playerHand, dealerCard) {
  const strategy = blackjackData.strategy[playerHand];
  if (strategy) {
    return strategy[dealerCard];
  } else {
    throw new Error(`No strategy found for player's hand: ${playerHand}`);
  }
}

const Page = () => {
  const [playerCard1, setPlayerCard1] = useState('');
  const [playerCard2, setPlayerCard2] = useState('');
  const [dealerUpcard, setDealerUpcard] = useState('');
  const [decision, setDecision] = useState('');
  const [winChance, setWinChance] = useState(0);
  const [selectedCard1, setSelectedCard1] = useState('');
  const [selectedCard2, setSelectedCard2] = useState('');
  const [selectedDealerCard, setSelectedDealerCard] = useState('');
  const cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'Q', 'K'];
  const [playerStrategy, setPlayerStrategy] = useState();
  useEffect(() => {
    document.body.classList.add('blackjack');
    return () => {
      document.body.classList.remove('blackjack');
    };

    toast.success('Work in progress.!');
  }, []);

  useEffect(() => {
    if (playerCard1 && playerCard2 && dealerUpcard) {
      const cardValuesMap = { 'A': 11, 'J': 10, 'Q': 10, 'K': 10 };
      const card1Value = isNaN(Number(playerCard1)) ? cardValuesMap[playerCard1] : parseInt(playerCard1);
      const card2Value = isNaN(Number(playerCard2)) ? cardValuesMap[playerCard2] : parseInt(playerCard2);
      let playerHandValue;
      if (card1Value === 10 && card2Value === 10) {
        playerHandValue = 'T,T';
      } else if (playerCard1 === 'A' && playerCard2 === 'A') {
        playerHandValue = 'A,A';
      } else if (card1Value === 10 && card2Value === 11) {
        playerHandValue = 'A,T';
      } else if (card1Value === 11 && card2Value === 10) {
        playerHandValue = 'A,T';
      } else {
        playerHandValue = (card1Value + card2Value).toString().toUpperCase();
      }

      const dealerUpcardValue = dealerUpcard.toUpperCase();

      if (blackjackData.strategy[playerHandValue]) {
        const action = blackjackData.strategy[playerHandValue][dealerUpcardValue];
        setDecision(action);
      } else {
        setDecision('Invalid input');
      }
    }
  }, [playerCard1, playerCard2, dealerUpcard]);

  const calculateHandValue = (hand) => {
    const cardValuesMap = { 'A': 11, 'J': 10, 'Q': 10, 'K': 10 };
    return hand.split('').reduce((total, card) => {
      return total + (cardValuesMap[card] || parseInt(card));
    }, 0);
  };

  return (
    <>
      <BettingTable />
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Single hand (WiP)</AccordionTrigger>
          <AccordionContent>
            <SingleHand />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <span className='absolute top-1 right-1 text-xs text-white/10'><Link href='transactions'> Transactions</Link></span>
      {decision && (
        <div className={`geist shadow animated-decision inset-0 absolute z-10 pointer-events-none flex items-center justify-center ${decision.toLowerCase()}`}>
          {decision}
        </div>
      )}
      <section className=" mx-auto flex flex-col gap-2">

        <Card className="p-5 flex flex-col gap-2">
          <h2 className="text-2xl font-bold mb-4">Result:</h2>
          <p className={`text-lg ${decision === 'hit' ? 'text-green-500' : 'text-red-500'} dark:text-zinc-400`}>{decision}</p>
        </Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <Card className="p-5 flex flex-col gap-8">
            <label htmlFor="card1">Your Card 1</label>
            <Input
              id="card1"
              placeholder="Enter card value"
              value={playerCard1}
              onChange={(e) => setPlayerCard1(e.target.value)}
            />
            <div className="flex flex-wrap gap-2 mt-4">
              {cardValues.map((value) => (
                <button
                  key={value}
                  className={selectedCard1 === value ? ' transition-all  ease-in-out duration-300 flex z-50 shadow-xl rainbow-shadow scale-150' : 'scale-100 transition-all  ease-in-out duration-300'}
                  onClick={() => {
                    setPlayerCard1(value);
                    setSelectedCard1(value);
                  }}
                >
                  <img style={{ width: '120px' }} src={`/cards/${value}.svg`} alt={value} />
                </button>
              ))}
            </div>
          </Card>

          <Card className="p-5 flex flex-col gap-8">
            <label htmlFor="card2">Your Card 2</label>
            <Input
              id="card2"
              placeholder="Enter card value"
              value={playerCard2}
              onChange={(e) => setPlayerCard2(e.target.value)}
            />
            <div className="flex flex-wrap gap-2 mt-4">
              {cardValues.map((value) => (
                <button
                  key={value}
                  className={selectedCard2 === value ? ' transition-all  ease-in-out duration-300 flex shadow-xl rainbow-shadow scale-150 z-50' : 'scale-100 transition-all  ease-in-out duration-300'}
                  onClick={() => {
                    setPlayerCard2(value);
                    setSelectedCard2(value);
                  }}
                >
                  <img style={{ width: '121px' }} src={`/cards/${value}.svg`} alt={value} />
                </button>
              ))}
            </div>
          </Card>
        </div >

        <Card className="p-5 flex flex-col gap-8">
          <label htmlFor="dealerCard">Dealer's Card</label>
          <Input
            id="dealerCard"
            placeholder="Enter card value"
            value={dealerUpcard}
            onChange={(e) => setDealerUpcard(e.target.value)}
          />
          <div className="flex flex-wrap gap-2 mt-4">
            {cardValues.map((value) => (
              <button
                key={value}
                className={selectedDealerCard === value ? ' transition-all  ease-in-out duration-300 flex z-50 shadow-xl rainbow-shadow scale-150' : 'scale-100 transition-all  ease-in-out duration-300'}
                onClick={() => {
                  setDealerUpcard(value);
                  setSelectedDealerCard(value);
                }}
              >
                <img style={{ width: '121px' }} src={`/cards/${value}.svg`} alt={value} />
              </button>
            ))}
          </div>
        </Card>

      </section >
    </>
  );
};

export default Page;
