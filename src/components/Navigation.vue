<template>
	<header :class="{ 'scrolled-nav': scrolledPosition }">
		<nav>
			<div class="branding">
				<img src="../assets/logo.svg" alt="" />
			</div>

			<!-- Desktop nav -->
			<ul v-show="!mobileDisplay" class="navigation">
				<li>
					<router-link class="link" :to="{ name: 'Home' }">Home</router-link>
				</li>
				<li>
					<router-link class="link" :to="{ name: 'About' }">About</router-link>
				</li>
				<li>
					<router-link class="link" :to="{ name: 'Pokemon' }">Pokemon List</router-link>
				</li>
				<li>
					<router-link class="link" :to="{ name: 'UrlShortener' }">Shortener</router-link>
				</li>
			</ul>

			<div @click="toggleMobileNav" class="icon" v-show="mobileDisplay">
				<i class="fas fa-bars" :class="{ 'icon-active': mobileNav }"></i>
			</div>

			<transition name="mobile-nav">
				<ul v-show="mobileNav" class="dropdown-nav">
					<li>
						<router-link class="link" :to="{ name: 'Home' }">Home</router-link>
					</li>
					<li>
						<router-link class="link" :to="{ name: 'About' }">About</router-link>
					</li>
					<li>
						<router-link class="link" :to="{ name: 'Pokemon' }">Pokemon List</router-link>
					</li>
					<li>
						<router-link class="link" :to="{ name: 'UrlShortener' }">Shortener</router-link>
					</li>
				</ul>
			</transition>
		</nav>
	</header>
</template>

<script>
	import { ref, onMounted, onBeforeUnmount } from 'vue';

	export default {
		data() {
			return {
				scrolledPosition: null,
				windowWidth: null,
				mobileNav: false,
				mobileDisplay: false
			};
		},
		mounted() {
			window.addEventListener('resize', this.checkScreen);
			this.checkScreen();

			window.addEventListener('scroll', this.updateScroll);
		},
		methods: {
			checkScreen() {
				this.windowWidth = window.innerWidth;

				if (this.windowWidth <= 750) {
					this.mobileDisplay = true;
					return;
				}

				this.mobileDisplay = false;
				this.mobileNav = false;
				return;
			},
			toggleMobileNav() {
				this.mobileNav = !this.mobileNav;
			},
			updateScroll() {
				const scrolledPosition = window.scrollY;

				if (scrolledPosition > 50) {
				}
			}
		}
	};
</script>

<style lang="scss" scoped>
	header {
		background-color: rgba($color: #000000, $alpha: 0.8);
		z-index: 99;
		width: 100%;
		position: fixed;
		color: #fff;

		nav {
			position: relative;
			display: flex;
			flex-direction: row;
			padding: 12px 0 12px 0;
			transition: 0.5s ease all;
			width: 90%;
			margin: 0 auto;
			@media (min-width: 1140px) {
				max-width: 1140px;
			}
		}

		ul,
		.link {
			font-weight: 500;
			color: white;
			list-style: none;
			text-decoration: none;
		}

		li {
			padding: 16px;
			margin-left: 16px;
		}

		.link {
			font-size: 14px;
			border-bottom: 1px solid transparent;

			&:hover {
				color: #00afea;
				border-color: #00afea;
			}
		}

		.branding {
			display: flex;
			align-items: center;

			img {
				width: 50px;
			}
		}

		.navigation {
			display: flex;
			align-items: center;
			justify-content: end;
			flex: 1;
		}

		.icon {
			display: flex;
			align-items: center;
			position: absolute;
			top: 0;
			right: 24px;
			height: 100%;

			i {
				cursor: pointer;
				font-size: 24px;
			}
		}

		.icon-active {
			transform: rotate(180deg);
		}

		.dropdown-nav {
			display: flex;
			flex-direction: column;
			position: fixed;
			width: 100%;
			max-width: 250px;
			background-color: white;
			height: 100%;
			top: 0;
			left: 0;

			li {
				margin-left: 0;

				.link {
					color: #000000;
				}
			}
		}
	}

	.scrolled-nav {
		background-color: #000000;
		box-shadow: #000000;

		.nav {
			padding: 8px 0;
		}

		.branding {
			img {
				width: 40px;
			}
		}
	}
</style>
