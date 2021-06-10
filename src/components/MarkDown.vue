<template>
	<article class="markdown-body" v-html="content"></article>
</template>

<script lang="ts">
import {ref} from 'vue';

export default {
	name: 'MarkDown',
	props: {
		path: {
			type: String,
			required: true,
		},
	},
	setup(props) {
		const content = ref<string>('');
		// 这里用到了动态 import
		import(props.path).then(result => {
			content.value = result.default;
		});
		return {content};
	},
};
</script>

<style scoped>

</style>
