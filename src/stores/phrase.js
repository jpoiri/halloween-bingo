import { defineStore } from 'pinia'
import { ref, computed } from 'vue';

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const usePhraseStore = defineStore('phrase', () => {
    const phrases = ref([
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
		"Is a night owl"
	]);

	const shuffle = (array) => { 
		for (let i = array.length - 1; i > 0; i--) { 
		  const j = Math.floor(Math.random() * (i + 1)); 
		  [array[i], array[j]] = [array[j], array[i]]; 
		} 
		return array; 
	};

	const randomPhrases = computed(() => {
		return shuffle(phrases.value);
	});

	return { phrases, randomPhrases };
});


