<script lang="ts">
import { Card } from 'src/cards/types';
import { PropType } from 'vue';
import PlayingCard from './PlayingCard.vue';

export default {
  name: 'CardSlot',
  components: { PlayingCard },
  props: {
    cards: {
      type: Array as PropType<Card[]>,
      required: true,
    },
    max: {
      type: Number,
      default: null,
    },
    name: {
      type: String,
      default: null,
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
  <div class="card-slot">
    <q-tooltip>
      {{ name }}
    </q-tooltip>
    <div v-if="!cards.length && name?.length" class="text-white">
      {{ name }}
    </div>
    <!--todo - get stacking card effect working -->
    <PlayingCard
      v-for="(card, index) in cards"
      :key="card.id"
      :card="card"
      @click="selectUpTo(index)"
    />
  </div>
</template>

<style lang="scss">
.card-slot {
  border: 2px solid darkslategray;
  background-color: lightslategray;
  padding: 2px;

  // stacking card effect; adapted from Stacked Cards Smooth Show on Hover by Zed Dash https://codepen.io/z-/full/eYPLWWL
  --card-shown-x: 0rem;
  --card-shown-y: 1.5rem;
  --card-size-x: 12rem;
  --card-size-y: 8rem;
  --card-padding: 1rem;
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
