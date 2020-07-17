<template>
  <div id="app">
    <component :is="layout">

    </component>
  </div>
</template>

<script>
  import EmptyLayout from '@/layouts/EmptyLayout';
  import HrLayout from "@/layouts/HRLayout";
  import MemberLayout from "@/layouts/MemberLayout";

export default {
  name: 'App',
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  components: {
    EmptyLayout, HrLayout, MemberLayout
  }
}
</script>

<style lang="scss">
  @import '~materialize-css/dist/css/materialize.min.css';
  @import 'assets/index.css';
</style>
