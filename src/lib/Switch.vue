<template>
  <button @click="toggle" :class="{checked: modelValue}"><span></span></button>
</template>

<script lang="ts">

export default {
  name: 'Switch',
  props: {
    modelValue: Boolean,
  },
  setup(props, {emit}) {
    const toggle = () => {
      emit('update:modelValue', !props.modelValue);
    };
    return {toggle};
  },
};
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: $h / 2;
  position: relative;

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background-color: white;
    border-radius: $h / 2;
    transition: all 250ms;
  }

  &.checked {
    background: #1890ff;

    > span {
      left: calc(100% - #{$h2} - 2px);
    }

    &:active {
      > span {
        width: $h2 +4px;
        margin-left: -4px;
      }
    }
  }

  &:active {
    > span {
      width: $h2 + 4px;
    }
  }

  &:focus {
    outline: none;
  }
}

</style>
