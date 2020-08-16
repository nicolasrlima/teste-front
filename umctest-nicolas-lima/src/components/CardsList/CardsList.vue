<template>
  <div class="cards-container">
    <TheCard />
    <CardsListPagination />
    {{cardsData}}
  </div>
</template>

<script>
import TheCard from "./CardsListComponents/TheCard.vue";
import CardsListPagination from "./CardsListComponents/CardsListPagination.vue";

export default {
  name: "CardsList",
  components: {
    TheCard,
    CardsListPagination,
  },
  computed: {
    currentActivity() {
      return this.$store.state.currentActivity.value;
    },
    currentFilter() {
      return this.$store.state.currentFilter.value;
    },
    cardsData() {
      return this.$store.state.cardsData.value;
    },
  },
  methods: {
    async getCardsData() {
      this.loading = true;

      fetch(`http://localhost:3000/cards`)
        .then((r) => r.json())
        .then((data) => {
          const filteredData = data.filter((el) => {
            return el.activityId === this.currentActivity;
          });

          this.$store.commit("CHANGE_CARDS_DATA", filteredData);
        });
    },
  },
  watch: {
    currentActivity() {
      this.getCardsData();
    },
  },
};
</script>

<style>
.cards-container {
  grid-row: 2;
  display: flex;
  align-content: center;
}

@media (min-width: 801px) {
  .cards-container {
    grid-column: 1 / 4;
  }
}
</style>