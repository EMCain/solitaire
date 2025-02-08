<script lang="ts">
import { type PropType } from 'vue';
import { Card } from 'src/cards/types';
import CardStack from './CardStack.vue';

export default {
  name: 'CardSlot',
  components: { CardStack },
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
    <CardStack :cards="cards" />
  </div>
</template>

<style lang="scss">
.card-slot {
  border: 2px solid darkslategray;
  background-color: lightslategray;
  padding: 2px;
}
</style>
