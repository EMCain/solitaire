<script lang="ts">
import { Card } from 'src/cards/types';
import { PropType } from 'vue';
import PlayingCard from './PlayingCard.vue';

export default {
  name: 'CardStack',
  components: { PlayingCard },
  props: {
    cards: {
      type: Array as PropType<Card[]>,
      required: true,
    },
    cardSizeX: {
      type: String,
      default: '1rem',
    },
    cardSizeY: {
      type: String,
      default: '8rem',
    },
    cardShownX: {
      type: String,
      default: '0',
    },
    cardShownY: {
      type: String,
      default: '1.5rem',
    },
  },
  emits: ['update:cards'],
  methods: {
    selectUpTo(index: number) {
      const unselected = this.cards.slice(0, index);
      const selected = this.cards.slice(index);
      this.$emit('update:cards', [
        ...unselected.map((card: Card) => ({ ...card, selected: false })),
        ...selected.map((card: Card) => ({ ...card, selected: true })),
      ]);
    },
  },
};
</script>

<template>
  <div
    :style="{
      '--card-size-x': cardSizeX,
      '--card-size-y': cardSizeY,
      '--card-shown-x': cardShownX,
      '--card-shown-y': cardShownY,
    }"
    class="card-stack"
  >
    <PlayingCard
      v-for="(card, index) in cards"
      :key="card.id"
      :card="card"
      @click="selectUpTo(index)"
    />
  </div>
</template>

<style lang="scss">
.card-stack {
  // stacking card effect; adapted from Stacked Cards Smooth Show on Hover by Zed Dash https://codepen.io/z-/full/eYPLWWL
  display: flex;
  flex-direction: column;
  padding-right: calc(
    var(--card-size-x) - var(--card-shown-x) + 2 * var(--card-padding)
  );
  padding-bottom: calc(
    var(--card-size-y) - var(--card-shown-y) + 2 * var(--card-padding)
  );
  .card-container {
    position: relative;
    margin-left: calc((var(--num) - 1) * var(--card-shown-x));
    width: var(--card-shown-x);
    height: var(--card-shown-y);

    .playing-card {
      position: absolute;
      gap: 0.5rem;
    }
  }
}
</style>
