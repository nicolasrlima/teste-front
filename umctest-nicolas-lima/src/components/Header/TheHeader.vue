<template>
  <div>
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
div {
  grid-row: 1;
}
</style>