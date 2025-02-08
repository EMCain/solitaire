import { defineStore } from 'pinia';

import { Card } from 'src/cards/types';

import { buildDeck, shuffle } from 'src/cards/functions';
import { newPlayer } from 'src/players/function';
import { Player } from 'src/players/types';

export const usePinochleStore = defineStore('pinochleDeck', {
  state: () => ({
    deck: [] as Card[],
    player1: newPlayer('p1'),
    player2: newPlayer('p2'),
    player3: newPlayer('p3'),
    player4: newPlayer('p4'),
    currentPlayerNumber: 1 as 1 | 2 | 3 | 4,
  }),
  getters: {
    players(state) {
      return [state.player1, state.player2, state.player3, state.player4];
    },
    currentPlayer(state): Player {
      if (state.currentPlayerNumber === 1) return state.player1;
      if (state.currentPlayerNumber === 2) return state.player2;
      if (state.currentPlayerNumber === 3) return state.player3;
      if (state.currentPlayerNumber === 4) return state.player4;
      throw new Error('no player selected');
    },
  },
  actions: {
    createDeck() {
      const standardDeck = buildDeck();
      standardDeck.forEach((c: Card) => {
        if (c.rank.value >= 9 || c.rank.value === 1) {
          this.deck.push({ ...c, faceDown: false }, { ...c, faceDown: false });
        }
      });
      shuffle(this.deck);
    },
    deal() {
      this.players.forEach((p: Player) => {
        p.hand = this.deck.splice(0, 12);
      });
    },
    draw(num = 1): Card[] {
      return this.deck.splice(0 - num, num);
    },
  },
});
