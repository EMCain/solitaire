import { Card } from 'src/cards/types';

export interface Player {
  name: string;
  hand: Card[];
  score: number;
}
