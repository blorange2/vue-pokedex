import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import UrlShortenView from '../views/UrlShortener.vue';
import PokemonView from '../views/PokemonView.vue';
import PokemonIndividualView from '../views/PokemonIndividualView.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomeView
	},
	{
		path: '/about',
		name: 'About',
		component: AboutView
	},
	{
		path: '/pokemon',
		name: 'Pokemon',
		component: PokemonView
	},
	{
		path: '/pokedex/:name',
		name: 'PokemonIndividual',
		component: PokemonIndividualView
	},
	{
		path: '/url-shorten',
		name: 'UrlShortener',
		component: UrlShortenView
	}
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes
});

export default router;
