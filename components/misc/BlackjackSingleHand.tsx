'use client';
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import blackjackData from '@/core/config/blackjack.json';
import { toast } from 'sonner'

function getStrategy(playerHand, dealerCard) {
    const strategy = blackjackData.strategy[playerHand];
    if (strategy) {
        return strategy[dealerCard];
    } else {
        throw new Error(`No strategy found for player's hand: ${playerHand}`);
    }
}

const SingleHand = () => {
    const [playerCard, setPlayerCard] = useState('');
    const [dealerUpcard, setDealerUpcard] = useState('');
    const [decision, setDecision] = useState('');
    const [winChance, setWinChance] = useState(0);
    const [selectedCard, setSelectedCard] = useState('');
    const [selectedDealerCard, setSelectedDealerCard] = useState('');
    const cardValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', 'A', 'J', 'Q', 'K'];
    const [playerStrategy, setPlayerStrategy] = useState();

    useEffect(() => {
        document.body.classList.add('blackjack');
        return () => {
            document.body.classList.remove('blackjack');
        };

        toast.success('Work in progress.!');
    }, []);

    useEffect(() => {
        if (playerCard && dealerUpcard) {
            const cardValuesMap = { 'A': 11, 'J': 10, 'Q': 10, 'K': 10 };
            const cardValue = isNaN(Number(playerCard)) ? cardValuesMap[playerCard] : parseInt(playerCard);
            let playerHandValue;
            if (cardValue === 10) {
                playerHandValue = 'T';
            } else if (playerCard === 'A') {
                playerHandValue = 'A';
            } else if (cardValue === 10) {
                playerHandValue = 'T';
            } else {
                playerHandValue = cardValue.toString().toUpperCase();
            }

            const dealerUpcardValue = dealerUpcard.toUpperCase();

            if (blackjackData.strategy[playerHandValue]) {
                const action = blackjackData.strategy[playerHandValue][dealerUpcardValue];
                setDecision(action);
            } else {
                setDecision('Invalid input');
            }
        }
    }, [playerCard, dealerUpcard]);

    const calculateHandValue = (hand) => {
        const cardValuesMap = { 'A': 11, 'J': 10, 'Q': 10, 'K': 10 };
        return hand.split('').reduce((total, card) => {
            return total + (cardValuesMap[card] || parseInt(card));
        }, 0);
    };

    return (
        <>
            {decision && (
                <div className={`shadow animated-decision inset-0 absolute z-10 pointer-events-none flex items-center justify-center ${decision.toLowerCase()}`}>
                    {decision}
                </div>
            )}
            <section className=" mx-auto p-4 flex flex-col gap-2 md:p-8">

                <Card className="p-5 flex flex-col gap-2">
                    <h2 className="text-2xl font-bold mb-4">Result:</h2>
                    <p className={`text-lg ${decision === 'hit' ? 'text-green-500' : 'text-red-500'} dark:text-zinc-400`}>{decision}</p>
                </Card>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                    <Card className="p-5 flex flex-col gap-8">
                        <label htmlFor="card">Your Card</label>
                        <Input
                            id="card"
                            placeholder="Enter card value"
                            value={playerCard}
                            onChange={(e) => setPlayerCard(e.target.value)}
                        />
                        <div className="flex flex-wrap gap-2 mt-4">
                            {cardValues.map((value) => (
                                <button
                                    key={value}
                                    className={selectedCard === value ? 'selected' : ''}
                                    onClick={() => {
                                        setPlayerCard(value);
                                        setSelectedCard(value);
                                    }}
                                >
                                    <img style={{ width: '120px' }} src={`/cards/${value}.svg`} alt={value} />
                                </button>
                            ))}
                        </div>
                    </Card>

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
                                    className={selectedDealerCard === value ? 'selected' : ''}
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
                </div>

            </section>
        </>
    );
};

export default SingleHand;