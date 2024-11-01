<script setup>
import BingoCard from '../components/BingoCard.vue';
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { usePhraseStore } from '@/stores/phrase';

const store = usePhraseStore();
const router = useRouter();
const route = useRoute();

const gameMode = ref('line');

if (route.query.gameMode) {
    gameMode.value = route.query.gameMode;
}

if (route.query.alternatePhrases === 'true') {
    store.useAlternate(true);  
}

function onBingo() {
    router.push('/bingo');
}

</script>

<template>
  <main>
    <h1>Halloween bingo</h1>

    <BingoCard :values="store.randomPhrases" :game-mode="gameMode" @on-bingo="onBingo()">
      <img alt="free space" src="../assets/freespace.png"/>
    </BingoCard>
  </main>
</template>

<style scoped>
  h1 {
    text-align: center;
    font-size: 4rem;
    margin: 10px;
  }
  img {
    background-color: black;
    width: 100%;
  }
</style>
