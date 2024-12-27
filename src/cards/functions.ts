import { Card, Suit, Rank } from './types';
import { SUITS, RANKS } from './constants';

export const buildDeck = (): Card[] => {
  return SUITS.reduce((deck: Card[], suit: Suit): Card[] => {
    const cards: Card[] = RANKS.map((rank: Rank): Card => {
      return {
        rank,
        suit,
        faceDown: true,
        id: `${rank.name}-${suit.name}`,
        selected: false,
      };
    });
    return [...deck, ...cards];
  }, [] as Card[]);
};

export const shuffle = (cards: Card[]): Card[] => {
  return cards.sort(() => 0.5 - Math.random());
};
