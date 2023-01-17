<template>
	<div>
		<div class="input-area">
			<input type="text" name="" id="" v-model="url" />
			<button @click.prevent="shortenUrl" type="submit">Submt</button>
			<br />
			<p v-show="url.length > 0" class="obtuse">You entered {{ url }}</p>
			<br />
			<p v-show="error">{{ error }}</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				url: '',
				shortenedUrl: '',
				token: 'fd0de79acdc23123fb150d58853e014dea7901b4',
				error: null
			};
		},
		methods: {
			shortenUrl() {
				const options = {
					method: 'POST',
					headers: {
						Authorization: `Bearer ${this.token}`,
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						long_url: this.url,
						domain: 'bit.ly'
					})
				};

				fetch('https://api-ssl.bitly.com/v4/shorten', options)
					.then((response) => response.json())
					.then((data) => {
						if (data.message == 'INVALID_ARG_LONG_URL') {
							this.error = 'INVALID_ARG_LONG_URL';
							return;
						}
					})
					.catch((error) => {
						this.error = error;
					});
			}
		}
	};
</script>

<style lang="scss" scoped>
	.input-area {
		max-width: 600px;
		margin: 0 auto;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		color: #fff;
	}

	input[type='text'],
	select {
		width: 100%;
		padding: 12px 20px;
		margin: 8px 0;
		display: inline-block;
		border: 1px solid #ccc;
		border-radius: 4px;
		box-sizing: border-box;
	}

	button[type='submit'] {
		width: 100%;
		background-color: #4caf50;
		color: white;
		padding: 14px 20px;
		margin: 8px 0;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	.obtuse {
		font-size: 2rem;
		color: #4caf50;
	}
</style>
