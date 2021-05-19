<template>
  <Switch :value="checked" @input="checked = $event"/>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue';
import {ref} from 'vue';

export default {
  name: 'SwitchDemo',
  components: {Switch},
  setup() {
    const checked = ref(false);
    return {checked};
  },
};
</script>

<style scoped>

</style>
