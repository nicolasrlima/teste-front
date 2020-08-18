<template>
  <div class="cards-container">
    <div class="cards-list">
      <TheCard v-for="card in cardsData" :key="card.id" :actualCard="card" />
      <CardsListPagination />
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
  // async created() {
  //   console.log(this.loading);
  //   await this.getCardsData();
  //   console.log(this.loading);
  // },
  watch: {
    async currentActivity() {
      await this.getCardsData();
    },
    async currentFilter() {
      await this.getCardsData();
      console.log(this.cardsData);
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

.cards-list {
  display: flex;
  flex-direction: row;
}

@media (min-width: 801px) {
  .cards-container {
    grid-column: 1 / 4;
  }
}
</style>
