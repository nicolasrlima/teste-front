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
  watch: {
    $route() {
      this.$store.state.currentActivity = null;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body,
ul,
li,
h1,
h2,
h3,
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

/*general styles */
.light-grey {
  color: #a1acc9;
}
</style>
