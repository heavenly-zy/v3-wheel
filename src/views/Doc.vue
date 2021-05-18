<template>
  <Topnav/>
  <div class="content">
    <aside>侧边栏</aside>
    <main>主内容</main>
  </div>
</template>

<script>
import Topnav from '../components/Topnav.vue'

export default {
  name: "Doc",
  components: {Topnav}
}
</script>

<style lang="scss" scoped>

</style>
