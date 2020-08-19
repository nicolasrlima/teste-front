<template>
  <div class="header-container">
    <ActivitiesSelect />
    <CardsInfo />
    <CardsFilter />
  </div>
</template>

<script>
import ActivitiesSelect from "./HeaderComponents/ActivitiesSelect.vue";
import CardsInfo from "./HeaderComponents/CardsInfo.vue";
import CardsFilter from "./HeaderComponents/CardsFilter.vue";

export default {
  name: "TheHeader",
  components: {
    ActivitiesSelect,
    CardsInfo,
    CardsFilter,
  },
};
</script>

<style>
.header-container {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  justify-items: center;
  margin-top: 1rem;
  grid-row: 1;
  width: 70vw;
}

@media (min-width: 601px) {
  .header-container {
    width: 80vw;
  }
}

@media (min-width: 801px) {
  .header-container {
    grid-column: 1 / 4;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    font-size: 1.2em;
    width: 84vw;
  }
}
</style>