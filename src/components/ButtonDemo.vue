<template>
  <div>Button 示例</div>
  <h1>示例1</h1>
  <div>
    <Button>你好</Button>
    <Button theme="button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </div>
  <h1>示例2</h1>
  <div>
    <Button>普普通</Button>
    <Button size="normal">普普通</Button>
    <Button size="big">大大大</Button>
    <Button size="small">小小小</Button>
  </div>
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
