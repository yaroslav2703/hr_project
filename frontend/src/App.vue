<template>
  <div id="app">
    <component :is="layout">

    </component>
  </div>
</template>

<script>
  import MainLayout from "./layouts/MainLayout";

export default {
  name: 'App',
  computed: {
    layout() {
      return 'main-layout'
    }
  },
  components: {
    MainLayout
  }
}
</script>

<style lang="scss">
  @import '~materialize-css/dist/css/materialize.min.css';
  @import 'assets/index.css';
</style>
