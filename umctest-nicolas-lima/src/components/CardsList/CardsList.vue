<template>
  <div class="cards-container">
    <div class="cards-list" v-if="cardsData && cardsData.length">
      <TheCard v-for="card in cardsData" :key="card.id" :actualCard="card" />
      <CardsListPagination />
    </div>
    <div v-else-if="cardsData && cardsData.length === 0" class="no-cards-listed">
      <span>Nenhum paciente cadastrado nesta unidade!</span>
    </div>
    <div v-else class="loading-cards">
      <span>loading</span>
    </div>
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
  props: ["actualCard"],
  computed: {
    currentActivity() {
      return this.$store.state.currentActivity.value;
    },
    currentFilter() {
      return this.$store.state.currentFilter;
    },
    cardsData() {
      return this.$store.state.cardsData.value;
    },
    cardsDataStatus() {
      return this.$store.state.cardsData.status;
    },
  },
  methods: {
    async getCardsData() {
      try {
        const dataResponse = await fetch(
          `${ENV.URL}cards?activityId=${this.currentActivity}`
        );

        const dataJSON = await dataResponse.json();

        const organizedData = this.organizeByFilter(dataJSON);

        this.$store.dispatch("changeCardsData", organizedData);
      } catch (error) {
        alert(`Houve um problema no servidor\nERRO: ${error}`);
      }
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
    async currentActivity() {
      await this.getCardsData();
    },
    async currentFilter() {
      await this.getCardsData();
    },
  },
};
</script>

<style>
.cards-container {
  grid-column: 1 / 4;
  margin-top: 1.5em;
}

@media (min-width: 801px) {
  .cards-container {
    margin-top: 1em;
    width: 85vw;
  }

  .cards-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5em;
    justify-items: center;
    align-items: space-between;
  }
}
</style>
