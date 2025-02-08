<template>
  <q-page>
    <div class="row">
      <q-btn label="shuffle" @click="shuffleDeck" />
      <q-btn label="draw" @click="drawToHand(1)" />
      <q-btn label="discard selected" @click="discardSelected" />
    </div>
    <div class="row">
      <div class="col-6">
        <p>
          hand: ({{ hand.length }} cards, {{ selectedInHand.length }} selected)
        </p>
        <div class="row q-gutter-sm">
          <PlayingCard
            v-for="card in hand"
            :key="card.id"
            :card="card"
            @click="card.selected = !card.selected"
          />
        </div>
      </div>
      <div class="col-3">
        <p>deck: ({{ deck.length }} cards)</p>
        <div class="row q-gutter-sm">
          <!-- <PlayingCard v-for="card in deck" :key="card.id" :card="card" /> -->
          <CardStack
            :cards="deck.slice(-10, -1)"
            card-shown-y="3px"
            @click="drawToHand(1)"
          />
        </div>
      </div>
      <div class="col-3">
        <p>discard: ({{ discardPile.length }} cards)</p>
        <CardSlot :cards="discardPile" name="Discard Pile" />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { mapActions, mapState } from 'pinia';

import { defineComponent } from 'vue';

import { Card } from 'src/cards/types';
import { useDeckStore } from 'src/stores/deck';

import PlayingCard from 'src/components/PlayingCard.vue';
import CardSlot from 'src/components/CardSlot.vue';
import CardStack from 'src/components/CardStack.vue';

export default defineComponent({
  name: 'IndexPage',
  components: { PlayingCard, CardSlot, CardStack },
  data() {
    return {
      HAND_LIMIT: 7,
      hand: [] as Card[],
      discardPile: [] as Card[],
    };
  },
  computed: {
    ...mapState(useDeckStore, ['deck']),
    topOfDeck(): Card | null {
      if (this.deck.length) return this.deck[0];
      return null;
    },
    selectedInHand(): Card[] {
      return this.hand.filter((card: Card) => card.selected);
    },
  },
  methods: {
    ...mapActions(useDeckStore, [
      'printDeck',
      'createDeck',
      'shuffleDeck',
      'draw',
    ]),
    drawToHand(count: number) {
      this.draw(count).forEach((card: Card) => {
        // TODO: stop looping if not necessary
        if (this.hand.length < this.HAND_LIMIT) {
          this.hand.push({ ...card, faceDown: false });
        }
      });
    },
    discardSelected() {
      this.hand.forEach((card: Card) => {
        if (card.selected) {
          this.discardPile.push({ ...card, selected: false });
        }
      });

      this.hand = this.hand.filter((card: Card) => !card.selected);
    },
  },
  mounted() {
    this.createDeck();
  },
});
</script>
