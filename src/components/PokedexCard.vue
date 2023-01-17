<template>
	<div class="pokedex-card">{{ number }} - {{ displayName }}</div>
</template>

<script setup="props">
	import { defineProps, computed } from 'vue';

	const props = defineProps({
		number: {
			type: Number,
			required: true
		},
		name: {
			type: String,
			required: true
		}
	});

	const displayName = computed(() => {
		return props.name[0].toUpperCase() + props.name.substring(1);
	});
</script>

<style lang="css" scoped>
	.pokedex-card {
		flex: 25%;
		max-width: 25%;
		padding: 15px;
	}
</style>
