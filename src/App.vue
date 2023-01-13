<template>
	<h1>Pokedex</h1>
	<p>Filter text: {{ filterText }}</p>

	<input type="text" name="" id="" v-model="filterText" />

	<ul>
		<PokedexCard v-for="(pokemon, index) in filteredPokemonList" :key="`poke-${index}`" :number="pokemon.entry_number" :name="pokemon.pokemon_species.name" />
	</ul>
</template>

<style scoped></style>

<script setup>
	import { ref, computed, onMounted } from 'vue';
	import PokedexCard from './components/PokedexCard.vue';

	const pokemonList = ref([]);
	const filterText = ref('');

	const filteredPokemonList = computed(() => {
		return pokemonList.value.filter((pokemon) => {
			return pokemon.pokemon_species.name.includes(filterText.value);
		});
	});

	onMounted(async () => {
		const pokeData = await fetch('https://pokeapi.co/api/v2/pokedex/2/')
			.then((result) => result.json())
			.catch((err) => {
				console.log(err);
			});

		pokemonList.value = pokeData.pokemon_entries;
	});

	// export default{
	// 	data(){
	// 		return{
	// 			pokemonList: []
	// 		}
	// 	},
	// 	async mounted(){
	// 		const pokeData = await fetch('https://pokeapi.co/api/v2/pokedex/2/')
	// 			.then((result) => result.json())
	// 			.catch((err) => {
	// 				console.log(err)
	// 			});

	// 			this.pokemonList = pokeData.pokemon_entries;
	// 	}
	// }
</script>
