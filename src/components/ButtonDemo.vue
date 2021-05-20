<template>
  <Button @click="onClick" @focus="onClick" @mouseover="onClick" size="small">你好</Button>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  name: 'ButtonDemo',
  components: {Button},
  setup() {
    const onClick = () => {
      console.log('xxx');
    };
    return {onClick};
  },
};
</script>

<style scoped>

</style>
