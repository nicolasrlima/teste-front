<template>
  <div id="app">
    <NavigationSidebar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import NavigationSidebar from "@/components/NavigationSidebar/NavigationSidebar.vue";

export default {
  components: {
    NavigationSidebar,
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

a {
  text-decoration: none;
}

body {
  background-color: #f6f7fb;
  color: #1a284d;
}

div {
  display: grid;
  grid-template-rows: 200px 1fr 200px;
  justify-content: center;
}
</style>
