<script setup>
import BingoCard from '../components/BingoCard.vue'
import { useRouter } from 'vue-router'

const values = [
    "Is superstitious",
    "Carved a pumpking this year",
    "Has 2+ children",
    "Has renovated a home",
    "Has been in a haunted house",
    "Believes that there are ghosts",
    "Loves pumpkin spice",
    "Owns a black cat",
    "Loves scary/horror movies",
    "Has a birthday in October",
    "Is wearing the color black or orange",
    "Likes to decorate for Halloween",
    "Addicted to chocolate",
    "Left handed",
    "Afraid of spiders",
    "House is decorated for halloween",
    "Favorite color is orange",
    "Addicted to gummies",
    "Lives near a graveyard",
    "Made their own Halloween costume",
    "Played with a Ouija board",
    "Has watch a zombie movie this month",
    "Halloween favorite holiday",
    "Is a night owl",
];

const router = useRouter();

function onGameOver() {
  router.push('/gameover');
}

</script>

<template>
  <main>
    <h1>Halloween bingo</h1>

    <BingoCard :values="values" @on-bingo="onGameOver()">
      <img width="100" src="../assets/freespace.png"/>
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
  }
</style>
