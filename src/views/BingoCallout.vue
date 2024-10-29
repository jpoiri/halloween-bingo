<script setup>
import { ref } from 'vue';
import { usePhraseStore } from "@/stores/phrase";
import { useRoute } from 'vue-router';

const store = usePhraseStore();
const route = useRoute();

if (route.query.alternatePhrases) {
    store.useAlternate(true);  
}

const phrases = [...store.randomPhrases];

let phrase = ref();

function nextPhrase() {
	phrase.value = phrases.pop();
}

nextPhrase();
</script>

<template>
  <main>
	<div class="container">
  		<div class="item">
			<template v-if="phrase">
				<p>{{phrase}}</p>
    			<button @click="nextPhrase()">Next</button>
			</template>
			<template v-else>
				<p>Game over!</p>
			</template>
    	</div>
	</div>
  </main>
</template>

<style scoped>
.container {
	display: grid;
	height: 800px;
    place-items: center;
}

.item {
	text-align: center;
}

button {
	font-size: 1.9rem;
    border: none;
    background-color: black;
    color: white;
    padding: 10px 20px;
	outline: blue;
}

p {
	font-size: 6rem;
}
</style>
