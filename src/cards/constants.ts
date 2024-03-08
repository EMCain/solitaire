import { Rank, Suit } from './types'

export const SUITS: Suit[] = [
    {
        initial: 's',
        name: 'spade',
        emoji: 'U+2660',
        color: 'black'
    },
    {
        initial: 'h',
        name: 'heart',
        emoji: 'U+2665',
        color: 'red'
    },
    {
        initial: 'c',
        name: 'club',
        emoji: 'U+2663',
        color: 'black'
    },
    {
        initial: 'd',
        name: 'diamond',
        emoji: ' U+2666',
        color: 'red'
    }
]

export const RANKS: Rank[] = [
    {
        value: 1,
        name: 'ace'
    },
    {
        value: 2, 
        name: 2
    },
    {
        value: 3,
        name: 3
    },
    {
        value: 4,
        name: 4
    },
    {
        value: 5,
        name: 5
    },
    {
        value: 6,
        name: 6
    },
    {
        value: 7,
        name: 7
    },
    {
        value: 8,
        name: 8
    },
    {
        value: 9,
        name: 9
    },
    {
        value: 10,
        name: 10
    },
    {
        value: 11,
        name: 'jack'
    },
    {
        value: 12,
        name: 'queen'
    },
    {
        value: 13,
        name: 'king'
    }
]