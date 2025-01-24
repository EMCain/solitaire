import { CardName, Rank, Suit } from './types';

export const SUITS: Suit[] = [
  {
    initial: 's',
    name: 'spade',
    emoji: '\u2660',
    color: 'black',
  },
  {
    initial: 'h',
    name: 'heart',
    emoji: '\u2665',
    color: 'red',
  },
  {
    initial: 'c',
    name: 'club',
    emoji: '\u2663',
    color: 'black',
  },
  {
    initial: 'd',
    name: 'diamond',
    emoji: ' \u2666',
    color: 'red',
  },
];

export const RANKS: Rank[] = [
  {
    value: 1,
    name: 'ace',
  },
  {
    value: 2,
    name: 2,
  },
  {
    value: 3,
    name: 3,
  },
  {
    value: 4,
    name: 4,
  },
  {
    value: 5,
    name: 5,
  },
  {
    value: 6,
    name: 6,
  },
  {
    value: 7,
    name: 7,
  },
  {
    value: 8,
    name: 8,
  },
  {
    value: 9,
    name: 9,
  },
  {
    value: 10,
    name: 10,
  },
  {
    value: 11,
    name: 'jack',
  },
  {
    value: 12,
    name: 'queen',
  },
  {
    value: 13,
    name: 'king',
  },
].map(({ name, value }) => ({
  name: name as CardName,
  value,
  shortName: typeof name === 'string' ? name[0] : `${name}`,
}));
