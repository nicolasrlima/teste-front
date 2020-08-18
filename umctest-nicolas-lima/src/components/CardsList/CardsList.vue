<template>
  <div class="cards-container">
    <div class="cards-list" v-if="getStatus === 3">
      <TheCard v-for="card in cardsData" :key="card.id" :cardNumber="card.id" />
    </div>
    <span v-else>CARREGANDO...</span>
    <CardsListPagination />
  </div>
</template>

<script>
import ENV from "../../config.js";
import TheCard from "./CardsListComponents/TheCard.vue";
import CardsListPagination from "./CardsListComponents/CardsListPagination.vue";

export default {
  name: "CardsList",
  components: {
    TheCard,
    CardsListPagination,
  },
  props: ["cardNumber"],
  computed: {
    currentActivity() {
      return this.$store.state.currentActivity.value;
    },
    currentActivityStatus() {
      return this.$store.state.currentActivity.status;
    },
    currentFilter() {
      return this.$store.state.currentFilter;
    },
    cardsData() {
      return this.$store.state.cardsData.value;
    },
    getStatus() {
      return this.$store.state.cardsData.status;
    },
  },
  methods: {
    async getCardsData() {
      this.loading = true;

      try {
        const dataResponse = await fetch(`${ENV.URL}cards`);

        const dataJSON = await dataResponse.json();

        const filteredData = this.activityFilter(dataJSON);

        const organizedData = this.organizeByFilter(filteredData);

        this.$store.commit("CHANGE_CARDS_DATA", organizedData);
      } catch (error) {
        alert(`Houve um problema no servidor\nERRO: ${error}`);
      }

      this.loading = false;
    },
    activityFilter(data) {
      const filteredData = data.filter(
        (el) => el.activityId === this.currentActivity
      );
      return filteredData;
    },
    organizeByFilter(data) {
      let sortedData;
      if (parseInt(this.currentFilter) === 0) {
        data.sort((a, b) => b.days - a.days);

        sortedData = data;
      } else {
        sortedData = data.filter((el) => el.hasPendingDocument === true);
      }
      return sortedData;
    },
  },
  watch: {
    currentActivity() {
      this.getCardsData();
    },
    currentFilter() {
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
