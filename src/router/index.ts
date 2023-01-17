import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import UrlShortenView from '../views/UrlShortener.vue';

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
		path: '/about',
		name: 'Pokemon',
		component: AboutView
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
