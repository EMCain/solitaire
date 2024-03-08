<template>
  <q-page>
    <div class="row">
      <q-btn
      label="shuffle"
      @click="shuffleDeck"
    />
    <q-btn
      label="draw"
      @click="hand.push(...draw())"
    />
    </div>
    <div class="row">
      <div class="col-6">
        <p>hand: ({{ hand.length }} cards)</p>
    <ul>
      <li
        v-for="(card, index) in hand" :key="index"
        :color="card.suit.color"
        >
        {{ card.rank.name }} of {{ card.suit.name }}s
      </li>
    </ul>

      </div>
      <div class="col-6">
        <p>deck: ({{ deck.length }} cards)</p>
    <ul>
      <li
        v-for="(card, index) in deck" :key="index"
        :color="card.suit.color"
        >
        {{ card.rank.name }} of {{ card.suit.name }}s
      </li>
    </ul>
      </div>

    </div>



  </q-page>
</template>

<script lang="ts">
import { mapActions, mapState } from 'pinia';

import { defineComponent } from 'vue';

import { Card } from 'src/cards/types';
import { useDeckStore } from 'src/stores/deck';

export default defineComponent({
  name: 'IndexPage',
  data () {
    return {
      hand: [] as Card[]
    }
  },
  computed: {
    ...mapState(useDeckStore, ['deck'])
  },
  methods: {
    ...mapActions(useDeckStore, ['printDeck','createDeck', 'shuffleDeck', 'draw'])
  },
  mounted () {
    this.createDeck();
  }
});
</script>
