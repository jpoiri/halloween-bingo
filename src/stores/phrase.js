import { defineStore } from 'pinia'
import { ref, computed } from 'vue';

export const usePhraseStore = defineStore('phrase', () => {

	const useAlternatePhrases = ref(false);

    const phrases = ref([
		"Has read a Stephen King novel",
		"Has a costume for their pets",
		"Has shot a pumpkin out of a cannon",
		"Can read fortunes or tarot cards",
		"Visited world famous haunt spots",
		"Believes in ghosts",
		"Loves pumpkin spice",
		"Owns a black cat",
		"Horror movie fan",
		"Has a birthday in October",
		"Is wearing black or orange",
		"Won a costume contest",
		"Addicted to chocolate",
		"Hates garlic (could be a vampire)",
		"Afraid of spiders",
		"House is elaborately decorated for halloween",
		"Favorite color is orange",
		"Addicted to sour candy",
		"Lives near a cemetary",
		"Made their own Halloween costume",
		"Played with a Ouija board",
		"Has watch a zombie movie this month",
		"Afraid of the dark",
		"Is a night owl"
	]);

	const alternatePhrases = ref([
		"Loves Cilantro",
		"Watches true crime shows",
		"Doesn't like chocolate",
		"Has watch Hocus Pocus this month",
		"Afraid of Snakes",
		"Never been trick or treating",
		"Once dressed in a couple/group costume",
		"Has a costume today",
		"Got sick from eating too much candy",
		"has carved a pumpking this year",
		"Gone to work in a costume",
		"Has indoor Halloween decorations",
		"Gives out full size candy bars",
		"Celebrated Halloween in a different country",
		"Been in a haunted house this year",
		"Loves pumpkin pie",
		"Been to a corn maze recently",
		"Has a Halloween playlist",
		"Loves candy corn",
		"Has bobbed for apples",
		"Speaks more than two languages",
		"Does not drink coffee",
		"Worn inflatable costume",
		"Has a annual scary movie marathon"
	]);

	const shuffle = (array) => { 
		for (let i = array.length - 1; i > 0; i--) { 
		  const j = Math.floor(Math.random() * (i + 1)); 
		  [array[i], array[j]] = [array[j], array[i]]; 
		} 
		return array; 
	};

	const useAlternate = useAlternate => {
		useAlternatePhrases.value = useAlternatePhrases;
	}

	const randomPhrases = computed(() => {
		if (useAlternatePhrases.value) {
			return shuffle(alternatePhrases.value);	
		}
		return shuffle(phrases.value);
	});

	return { phrases, randomPhrases, useAlternate };
});


