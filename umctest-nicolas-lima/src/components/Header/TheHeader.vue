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

<style scoped>
.header-container {
  margin-top: 1rem;
}

div {
  grid-row: 1;
  display: flex;
  flex-direction: column;
  width: 60vw;
}

@media (min-width: 801px) {
  div {
    width: 80vw;
  }
}
</style>