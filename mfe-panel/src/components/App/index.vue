<template>
  <component :is="layout">
    <router-view />
    <slot />
  </component>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      layout: this.$route.meta.layout || 'l-default',
    };
  },
  watch: {
    '$route.meta.layout'(value) {
      this.layout = value || 'l-default';
    },
  },
};
</script>
