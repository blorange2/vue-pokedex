<template>
	<div v-if="pokemonData">
		<router-link class="clean-link" :to="'/pokemon'" :name="pokemon">Back</router-link>

		<br />
		<div class="pokemonn-card">
			<div class="pokemon-card__image">
				<img :src="pokemonData.sprites.front_default" alt="" />
			</div>

			<div class="pokemon-card__meta">
				<div class="pokemon-card__name">#{{ pokemonData.id }} | {{ pokemonData.name }}</div>
				<ul class="pokemon-card__types">
					<li v-for="(type, index) in pokemonData.types" :key="index">{{ type.type.name }}</li>
				</ul>
			</div>

			<div class="pokemon-card__size">
				<div class="pokemon-card__weight">{{ pokemonData.weight }}</div>
				<div class="pokemon-card__height">{{ pokemonData.height }}</div>
			</div>

			<div class="pokemon-card__stats">
				<ul>
					<li v-for="(stat, index) in pokemonData.stats">{{ stat.stat.name }} - {{ stat.base_stat }}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				pokemon: this.$route.params.name,
				pokemonData: null
			};
		},
		methods: {
			async getPokemonData() {
				const url = 'https://pokeapi.co/api/v2/pokemon/' + this.pokemon;
				const response = await axios.get(url);

				console.log(response.data);

				this.pokemonData = response.data;
			}
		},
		mounted() {
			this.getPokemonData();
		}
	};
</script>

<style lang="scss" scoped></style>
