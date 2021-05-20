<template>
  <button class="wheel-button" :class="{[`theme-${theme}`]: theme}">
    <slot/>
  </button>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
  name: 'Button',
  props: {
    theme: {
      type: String,
      default: 'button',
    },
  },
};
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>
