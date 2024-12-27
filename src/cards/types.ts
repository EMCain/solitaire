export interface Suit {
  initial: string;
  name: string;
  emoji: string;
  color: 'red' | 'black';
  imagePath?: string;
}

export type CardName = 'ace' | 'jack' | 'queen' | 'king';

export interface Rank {
  value: number;
  name: number | CardName;
}

// this doesn't support Jokers yet
export interface Card {
  suit: Suit;
  rank: Rank;
  faceDown: boolean;
  id: string; // e.g. 'ace-spades', '2-hearts'
  selected: boolean;
}
