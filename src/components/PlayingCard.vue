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
  <div class="card-container">
    <div :class="cardClass" v-if="card.faceDown" />
    <div :class="cardClass" v-else>
      <span>
        {{ card.rank.shortName }}
        {{ card.suit.emoji }}
      </span>
      <span class="bottom-right">
        {{ card.rank.shortName }}
        {{ card.suit.emoji }}
      </span>
    </div>
  </div>
</template>

<style lang="scss">
.playing-card {
  border: 2px solid black;
  border-radius: 5px;
  height: 8rem;
  width: 5rem;
  padding: 2px;
  background-color: white;

  display: flex;
  justify-content: space-between;

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
    background-image: url('assets/image/Mosaico_nazarí_(hueso).svg');
    background-size: 200%;
  }

  .bottom-right {
    justify-self: end;
    align-self: end;
    transform: rotate(180deg);
  }
}
</style>
