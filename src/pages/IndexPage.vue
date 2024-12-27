<template>
  <q-page>
    <div class="row">
      <q-btn label="shuffle" @click="shuffleDeck" />
      <q-btn label="draw" @click="drawToHand(1)" />
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
      <div class="col-6">
        <p>deck: ({{ deck.length }} cards)</p>
        <div class="row q-gutter-sm">
          <!-- <PlayingCard v-for="card in deck" :key="card.id" :card="card" /> -->
          <PlayingCard
            v-if="topOfDeck"
            :card="topOfDeck"
            @click="drawToHand(1)"
          />
        </div>
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

export default defineComponent({
  name: 'IndexPage',
  components: { PlayingCard },
  data() {
    return {
      hand: [] as Card[],
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
        this.hand.push({ ...card, faceDown: false });
      });
    },
  },
  mounted() {
    this.createDeck();
  },
});
</script>
