<script setup>
import BingoCard from '../components/BingoCard.vue';
import { useRouter } from 'vue-router';
import { usePhraseStore } from '@/stores/phrase';

const store = usePhraseStore();
const router = useRouter();

function onGameOver() {
  router.push('/gameover');
}

</script>

<template>
  <main>
    <h1>Halloween bingo</h1>

    <BingoCard :values="store.randomPhrases" @on-bingo="onGameOver()">
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
