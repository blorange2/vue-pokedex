<template>
	<div>
		<nav class="subnav">
			<div class="subnav__top">
				<div class="subnav__left">
					<a class="subnav__title" href="">{{ title }}</a>
					<div class="subnav__links">
						<li v-for="(page, pageIndex) in chunkedPages" :key="pageIndex" class="subnav__link">
							<a href="">
								{{ page.name }}
								<span class="pl-2" v-if="page.subpages.length">
									<i class="fa fa-caret-down"></i>
								</span>
							</a>

							<div v-if="page.subpages.length" class="subnav__dropdown">
								<div v-for="subpageChunk in page.subpageChunks" :key="subpageChunk" class="subnav__column">
									<a class="subnav__dropdown-item" v-for="subpage in subpageChunk" :key="subpage.name">
										{{ subpage.name }}
									</a>
								</div>
							</div>
						</li>
					</div>
				</div>

				<div class="subnav__right">
					<span>
						{{ callToAction }} <br />
						{{ action }}
					</span>
				</div>

				<a class="ml-4 btn btn-subnav" href="">{{ buttonOptions.text }}</a>
			</div>

			<div class="subnav__bottom">
				<div v-for="(point, index) in keyPoints" :key="index" class="subnav__bottom-item">
					<svg xmlns="http://www.w3.org/2000/svg" xmlns:v="https://vecta.io/nano" width="24" height="24" id="svg-replaced-4" class="style-svg replaced-svg svg-replaced-4">
						<path
							d="M12 0c3.427 0 6.652 1.465 8.929 4.01h0l-.928.953C17.973 2.658 15.076 1.333 12 1.333 6.119 1.333 1.333 6.119 1.333 12S6.119 22.667 12 22.667 22.667 17.881 22.667 12a10.64 10.64 0 0 0-1.307-5.101h0l.971-.997C23.42 7.745 24 9.847 24 12c0 6.617-5.383 12-12 12S0 18.617 0 12 5.383 0 12 0zm6.09 7.333l1.133 1.163-8.071 8.281L6 11.493l1.133-1.163 2.585 2.653c.012.013.024.025.036.037a2 2 0 0 0 2.829-.037h0l5.507-5.65z"
							fill="#21b5fc"
							fill-rule="evenodd"
						></path>
					</svg>
					<div class="pl-2">
						<span>{{ point }}</span>
					</div>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
	function chunkArray(arr, chunkSize) {
		let chunks = [];

		// Slice array according to chunk size
		for (let i = 0; i < arr.length; i += chunkSize) {
			chunks.push(arr.slice(i, i + chunkSize));
		}

		return chunks;
	}
	export default {
		data() {
			return {
				title: 'Finance',
				callToAction: 'Need help?',
				action: 'Call 07743327933',
				buttonOptions: {
					text: 'Apply for Finance'
				},
				keyPoints: ['Get a decision within 48 hours', 'Market leading rates and terms', 'Trustpilot rating'],
				itemsPerRow: 5,
				pages: [
					{
						name: 'Property Finance',
						url: 'https://google.co.uk',
						subpages: [
							{
								name: 'Mansion',
								url: 'https://google.co.uk'
							},
							{
								name: 'House',
								url: 'https://google.co.uk'
							},
							{
								name: 'Flat',
								url: 'https://google.co.uk'
							},
							{
								name: 'Castle',
								url: 'https://google.co.uk'
							},
							{
								name: 'Caravan',
								url: 'https://google.co.uk'
							},
							{
								name: 'Tent',
								url: 'https://google.co.uk'
							},
							{
								name: 'Cave Dwelling',
								url: 'https://google.co.uk'
							}
						]
					},
					{
						name: 'Business Finance',
						subpages: [
							{
								name: 'Clothing'
							},
							{
								name: 'Gaming'
							},
							{
								name: 'Gardening'
							},
							{
								name: 'B2B'
							},
							{
								name: 'Gambling'
							},
							{
								name: 'Sport'
							},
							{
								name: 'Freight'
							}
						]
					},
					{
						name: 'Intermediary partnerships',
						subpages: []
					},
					{
						name: 'Case studies',
						subpages: []
					}
				]
			};
		},
		computed: {
			chunkedPages() {
				return this.pages.map((page) => {
					return {
						...page,
						subpageChunks: chunkArray(page.subpages, this.itemsPerRow)
					};
				});
			}
		}
	};
</script>

<style lang="scss" scoped>
	.subnav {
		&__top {
			width: 100%;
			margin: 0 auto;
			display: flex;
			align-items: center;
			background-color: #22558b;
			padding: 0.5rem 1rem;
		}

		&__left {
			display: flex;
			align-items: center;
		}

		&__title {
			color: #fff;
			font-size: 30px;
			font-weight: 900;
			padding: 1rem 1rem 1rem 1rem;
			text-decoration: none;
		}

		&__links {
			display: flex;

			ul,
			li {
				list-style-type: none;
			}
		}

		&__link {
			> a {
				padding: 1rem 0rem 1rem 1rem;
				color: #fff;
				font-size: 1.2rem;
				text-decoration: none;

				&:hover,
				&:focus {
					color: #fff;
					text-decoration: underline;
				}
			}

			&:hover {
				.subnav__dropdown {
					display: flex;
				}
			}
		}

		&__dropdown {
			display: none;
			position: absolute;
			background-color: #f6f6f6;
			margin: 0.75rem 0 0 0;
			padding: 0.5rem 0;
			width: 100%;
			max-width: 250px;
			box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

			&-item {
				display: block;
				width: 100%;
				padding: 0.5rem 1.5rem;
				clear: both;
				color: #22558b;
				font-weight: 400;

				&:hover {
					background-color: #22558b;
					color: #fff;
				}
			}
		}

		&__column {
			flex: 0 0 50%;
			max-width: 50%;
		}

		&__right {
			margin-left: auto;
			color: #fff;

			span {
				font-size: 1rem;
			}
		}

		&__bottom {
			display: flex;
			justify-content: space-around;
			padding: 0.8rem;
			background-color: #083b71;
			color: #fff;

			&-item {
				display: flex;
				align-items: center;
			}

			&-item-seperator {
				width: 1.2px;
				background-color: #fff;
				height: 20px;
			}
		}
	}

	.btn {
		display: inline-block;
		font-weight: 400;
		color: #212529;
		text-align: center;
		vertical-align: middle;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		background-color: transparent;
		border: 1px solid transparent;
		padding: 0.375rem 0.75rem;
		font-size: 1rem;
		line-height: 1.5;
		transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

		&-subnav {
			font-size: 1rem;
			padding: 1rem;
			background-color: #feea78;
			color: #214f7d;
		}
	}

	.m-0 {
		margin: 0;
	}

	.mt-0 {
		margin-top: 0;
	}

	.mr-0 {
		margin-right: 0;
	}

	.mb-0 {
		margin-bottom: 0;
	}

	.ml-0 {
		margin-left: 0;
	}

	// Classes for setting margin values

	.m-1 {
		margin: 0.25rem;
	}

	.m-2 {
		margin: 0.5rem;
	}

	.m-3 {
		margin: 1rem;
	}

	.m-4 {
		margin: 2rem;
	}

	// Classes for setting margin values on specific sides

	.mt-1 {
		margin-top: 0.25rem;
	}

	.mr-1 {
		margin-right: 0.25rem;
	}

	.mb-1 {
		margin-bottom: 0.25rem;
	}

	.ml-1 {
		margin-left: 0.25rem;
	}

	.ml-2 {
		margin-left: 0.5rem;
	}

	.ml-4 {
		margin-left: 1rem;
	}

	.pl-2 {
		padding-left: 0.5rem;
	}
</style>
