<script lang="ts">
import { mapActions, mapWritableState, mapState } from 'pinia';
import { defineComponent, type PropType } from 'vue';

import { Card } from 'src/cards/types';
import { usePinochleStore } from 'src/stores/pinochle';
import CardSlot from 'src/components/CardSlot.vue';
import CardStack from 'src/components/CardStack.vue';
import PlayingCard from 'src/components/PlayingCard.vue';

export default defineComponent({
  name: 'PinochlePage',

  components: {
    PlayingCard,
    // CardSlot,
    // CardStack,
  },

  data() {
    return {};
  },

  computed: {
    ...mapState(usePinochleStore, ['deck', 'currentPlayer']),
    ...mapWritableState(usePinochleStore, ['currentPlayerNumber']),
  },
  methods: {
    ...mapActions(usePinochleStore, [
      'createDeck',
      'deal',
      'giveSelectionToTeammate',
    ]),
  },
  mounted() {
    this.createDeck();
    this.deal();
  },
});
</script>

<template>
  <div>
    <div>
      <q-select
        v-model="currentPlayerNumber"
        label="player"
        :options="[1, 2, 3, 4]"
      />
    </div>
    <div class="row">{{ currentPlayer.hand.length }} cards</div>
    <div class="row q-gutter-sm">
      <PlayingCard
        v-for="card in currentPlayer.hand"
        :key="card.id"
        :card="card"
        @click="card.selected = !card.selected"
      />
    </div>
    <div class="row q-gutter-sm">
      <q-btn
        label="give selected to teammate"
        @click="giveSelectionToTeammate"
      />
    </div>
  </div>
</template>
