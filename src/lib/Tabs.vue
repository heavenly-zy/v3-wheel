<template>
  <div class="wheel-tabs">
    <div class="wheel-tabs-nav">
      <div class="wheel-tabs-nav-item"
           v-for="(t, index) in titles"
           :key="index"
           @click="select(t)"
           :class="{selected: t===selected}"
      >{{ t }}
      </div>
    </div>
    <div class="wheel-tabs-content">
      <!-- 注意这里需要提供一个 key，否则组件内容不会被更新，详见 https://github.com/vuejs/vue-next/issues/2013#issuecomment-685001660 -->
      <component class="wheel-tabs-content-item" :is="current" :key="selected"/>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue';
import {computed} from 'vue';

export default {
  name: 'Tabs',
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach(tag => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab');
      }
    });
    const titles = defaults.map(tag => {
      return tag.props.title;
    });
    const current = computed(() => {
      return defaults.filter(tag => {
        return tag.props.title === props.selected;
      })[0];
    });
    const select = (title: string) => {
      context.emit('update:selected', title);
    };
    return {defaults, titles, current, select};
  },
};
</script>

<style lang="scss" scoped>
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.wheel-tabs {

  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
