<template>
	<h2>OG Pokemon (first 151)</h2>
	<div class="cards">
		<div v-for="(pokemon, index) in pokemonList" :key="index" class="card">
			<router-link
				class="clean-link"
				:to="{
					name: 'PokemonIndividual',
					params: { name: pokemon.name }
				}"
			>
				<PokemonCard :pokemon="pokemon" />
			</router-link>
		</div>

		<br />

		<a @click.prevent="loadMorePokemon" href="">Load more</a>
	</div>
</template>

<script>
	import axios from 'axios';
	import PokemonCard from '@/components/PokemonCard.vue';

	export default {
		components: {
			PokemonCard
		},
		data() {
			return {
				pokemonList: []
			};
		},
		mounted() {
			this.fetchPokemon();
		},
		methods: {
			async fetchPokemon() {
				const endpoint = 'https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0';

				const response = await axios.get(endpoint);

				this.pokemonList = response.data.results;
			},
			async loadMorePokemon() {
				let offset = this.pokemonList.length;

				const endpoint = `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`;

				const response = await axios.get(endpoint);

				console.log(response.data.results);

				this.pokemonList.push(...response.data.results);
			},
			handleScroll() {
				const bottom = this.$el.scrollHeight - this.$el.scrollTop === this.$el.clientHeight;

				if (bottom) {
					this.loadMorePokemon();
				}
			}
		},
		computed() {}
	};
</script>

<style lang="scss" scoped>
	.cards {
		margin-top: 1rem;
		display: flex;
		flex-wrap: wrap;
	}

	.card {
		border: 1px solid orange;
		padding: 0.5rem;
	}
</style>
