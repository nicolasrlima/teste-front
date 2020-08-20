<template>
  <div class="activities-container">
    <TheHeader />
    <CardsList />
  </div>
</template>

<script>
import TheHeader from "@/components/Header/TheHeader.vue";
import CardsList from "@/components/CardsList/CardsList.vue";

export default {
  name: "MinhasAtividades",
  components: {
    TheHeader,
    CardsList,
  },
};
</script>

<style>
.activities-container {
  display: grid;
  grid-template-rows: 100px 1fr;
  gap: 1em;
  justify-content: center;
}

@media (min-width: 1025px) {
  .activities-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    justify-items: center;
  }
}
</style>
