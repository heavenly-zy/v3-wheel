<template>
  <h1>示例1</h1>
  <Tabs>
    <Tab title="导航1"></Tab>
    <Tab title="导航2"></Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';

export default {
  name: 'TabsDemo',
  components: {Tabs, Tab},
};
</script>

<style scoped>

</style>
