<template>
  <div class="wheel-tabs">
    <div class="wheel-tabs-nav" ref="container">
      <div class="wheel-tabs-nav-item"
           v-for="(t, index) in titles"
           :key="index"
           @click="select(t)"
           :class="{selected: t===selected}"
           :ref="el => {if(t===selected) {selectedItem = el}}"
      >{{ t }}
      </div>
      <div class="wheel-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="wheel-tabs-content">
      <!-- 注意这里需要提供一个 key，否则组件内容不会被更新，详见 https://github.com/vuejs/vue-next/issues/2013#issuecomment-685001660 -->
      <component class="wheel-tabs-content-item" :is="current" :key="current.props.title"/>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue';
import {computed, ref, watchEffect} from 'vue';

export default {
  name: 'Tabs',
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    /**
     * watchEffect 在 DOM 被挂载或更新之前就会执行；使用选项 flush: 'post' 表示让 watchEffect 在 DOM 更新后运行副作用。
     * 详见：https://v3.cn.vuejs.org/guide/composition-api-template-refs.html#%E4%BE%A6%E5%90%AC%E6%A8%A1%E6%9D%BF%E5%BC%95%E7%94%A8
     **/
    watchEffect(
      () => {
        const {width, left: left2} = selectedItem.value.getBoundingClientRect();
        const {left: left1} = container.value.getBoundingClientRect();
        const left = left2 - left1;
        indicator.value.style.width = `${width}px`;
        indicator.value.style.left = `${left}px`;
      },
      {flush: 'post'},
    );
    // 用 JS 获取插槽的内容，注意 default 后要加括号
    const defaults = context.slots.default();
    // 判断插槽传入的组件是否为 Tab 组件
    defaults.forEach(tag => {
      if (tag.type.name !== Tab.name) {
        throw new Error('Tabs 子标签必须是 Tab');
      }
    });
    const titles = defaults.map(tag => {
      return tag.props.title;
    });
    // 当前选中的 content
    const current = computed(() => {
      return defaults.find(tag => tag.props.title === props.selected);
    });
    // 更新选中的 title
    const select = (title: string) => {
      context.emit('update:selected', title);
    };
    return {defaults, titles, current, select, selectedItem, indicator, container};
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
    position: relative;

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

    &-indicator {
      position: absolute;
      width: 100px;
      height: 3px;
      background-color: $blue;
      left: 0;
      bottom: -1px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
