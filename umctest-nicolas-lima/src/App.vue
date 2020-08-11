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
body,
ul,
li,
h1,
h2,
p {
  margin: 0px;
  padding: 0px;
}

ul {
  list-style: none;
}

body {
  background-color: #f6f7fb;
  color: #1a284d;
}
</style>
