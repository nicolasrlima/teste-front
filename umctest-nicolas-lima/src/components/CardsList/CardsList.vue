<template>
  <div class="cards-container">
    <TheCard v-for="card in cardsData" :key="card.id">
      <template v-slot:days>
        <span>{{card.days}}</span>
      </template>

      <template v-slot:patientName>
        <h2>{{card.patientName}}</h2>
      </template>

      <template v-slot:accountLabel>
        <h3>{{card.billSources[0].label}}</h3>
      </template>

      <template v-slot:account>
        <span>{{card.billSources[0].value}}</span>
      </template>

      <template v-slot:attendanceLabel>
        <h3>{{card.billSources[1].label}}</h3>
      </template>

      <template v-slot:attendance>
        <span>{{card.billSources[1].value}}</span>
      </template>

      <template v-slot:shippingLabel>
        <h3>{{card.billSources[2].label}}</h3>
      </template>

      <template v-slot:shipping>
        <span>{{card.billSources[2].value}}</span>
      </template>

      <template v-slot:lotLabel>
        <h3>{{card.billSources[3].label}}</h3>
      </template>

      <template v-slot:lot>
        <span>{{card.billSources[3].value}}</span>
      </template>

      <template v-slot:value>
        <span>{{card.value}}</span>
      </template>

      <template v-slot:pendencies>
        <span>{{card.pendencies}}</span>
      </template>
    </TheCard>
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
