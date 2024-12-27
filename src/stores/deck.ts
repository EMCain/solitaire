import { defineStore } from 'pinia';

import { Card } from 'src/cards/types';
import { buildDeck, shuffle } from 'src/cards/functions';

export const useDeckStore = defineStore('deck', {
  state: () => ({
    deck: [] as Card[],
  }),
  actions: {
    printDeck() {
      console.log('deck', this.deck);
    },
    createDeck() {
      this.deck = buildDeck();
    },
    shuffleDeck() {
      this.deck = shuffle(this.deck);
    },
    draw(num = 1): Card[] {
      return this.deck.splice(0 - num, num);
    },
  },
});
