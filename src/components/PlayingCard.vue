<script lang="ts">
import { Card } from 'src/cards/types';
import { PropType } from 'vue';

export default {
  name: 'PlayingCard',
  props: {
    card: {
      type: Object as PropType<Card>,
      required: true,
    },
  },

  computed: {
    cardClass() {
      const cardDisplayClass = this.card.faceDown
        ? '__face-down'
        : this.card.suit.color === 'red'
        ? '__red'
        : '__black';

      return `playing-card playing-card${cardDisplayClass} ${
        this.card.selected ? 'playing-card__selected' : ''
      }`;
    },
  },
};
</script>

<template>
  <div :class="cardClass">
    <span v-if="card.faceDown" class="circle-icon"></span>
    <span v-else>
      {{ card.rank.name }}
      {{ card.suit.emoji }}
    </span>
  </div>
</template>

<style lang="scss">
.playing-card {
  border: 2px solid black;
  border-radius: 5px;
  height: 8rem;
  width: 5rem;
  padding: 2rem;
  background-color: white;

  &__selected {
    border: 3px solid lightgreen;
  }

  &__black {
    color: black;
  }

  &__red {
    color: red;
  }

  &__face-down {
    background-color: blue;
    color: white;

    .circle-icon {
      width: 1rem;
      height: 1rem;
      margin: 1rem 0;
      border-radius: 100%;
      background-color: white;
      display: block;
    }
  }
}
</style>
