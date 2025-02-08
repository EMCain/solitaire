import { Player } from './types';

export const newPlayer = (playerName: string): Player => ({
  name: playerName,
  score: 0,
  hand: [],
});
