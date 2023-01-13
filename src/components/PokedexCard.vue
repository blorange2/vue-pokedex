<template>
	<li>{{ number }} - {{ displayName }}</li>
</template>

<script setup="{{props}}">
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

	console.log(props.name);

	const displayName = computed(() => {
		return props.name[0].toUpperCase() + props.name.substring(1);
	});
</script>

<style lang="scss" scoped></style>
