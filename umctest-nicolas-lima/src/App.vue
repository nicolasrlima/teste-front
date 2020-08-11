<template>
  <div id="app">
    <NavigationSidebar />
    <TheHeader />
    <router-view />
  </div>
</template>

<script>
import NavigationSidebar from "@/components/NavigationSidebar.vue";
import TheHeader from "@/components/TheHeader.vue";

export default {
  components: {
    NavigationSidebar,
    TheHeader,
  },
};
</script>

<style>
</style>
