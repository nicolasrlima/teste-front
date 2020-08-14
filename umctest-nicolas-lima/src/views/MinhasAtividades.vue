<template>
  <div>
    <TheHeader />
    <CardsList />
  </div>
</template>

<script>
import TheHeader from "@/components/Header/TheHeader.vue";
import CardsList from "@/components/CardsList.vue";

export default {
  name: "MinhasAtividades",
  components: {
    TheHeader,
    CardsList,
  },
};
</script>

<style>
div {
  display: grid;
  grid-template-rows: 100px 1fr;
  justify-content: center;
}

@media (min-width: 801px) {
  div {
    display: grid;
    grid-template-rows: 150px 1fr;
  }
}
</style>
