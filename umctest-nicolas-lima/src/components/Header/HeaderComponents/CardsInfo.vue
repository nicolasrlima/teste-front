<template>
  <div class="info-container">
    <div class="details-container">
      <div v-for="(cardsNumber, key) in cardsCount" :id="key" :key="key">
        <span class="status-number">{{cardsNumber}}</span>
        <span class="desktop">Cards</span>
      </div>
    </div>
    <div class="total">
      <span class="light-grey">Total:</span>
      <div class="total-number">
        <span>{{totalCards}}</span>
        <span class="desktop">Cards</span>
      </div>
    </div>
  </div>
</template>

<script>
import ENV from "../../../config.js";

export default {
  name: "CardsInfo",
  data() {
    return {
      cardsCount: {
        delayed: null,
        warning: null,
        good: null,
      },
    };
  },
  computed: {
    currentActivity() {
      return this.$store.state.currentActivity.value;
    },
    totalCards() {
      return (
        this.cardsCount.delayed + this.cardsCount.warning + this.cardsCount.good
      );
    },
  },
  methods: {
    async getCardsCount(activityID) {
      try {
        const dataResponse = await fetch(`${ENV.URL}activities/${activityID}`);
        const data = await dataResponse.json();

        this.cardsCount = data.cardsCount;
      } catch (error) {
        alert(`Houve um problema no servidor\nERRO: ${error}`);
      }
    },
  },
  watch: {
    currentActivity(newActivity) {
      this.getCardsCount(newActivity);
    },
  },
};
</script>

<style scoped>
.info-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-self: center;
}

.details-container {
  display: flex;
  flex-direction: row;
}

.details-container .status-number {
  margin-right: 0.2em;
}

.light-grey {
  margin-right: 0.2em;
}

.desktop {
  display: none;
}

.total {
  display: flex;
  flex-direction: row;
  margin-left: 0.5em;
}

.total-number {
  font-size: 0.8em;
}

#delayed::before,
#warning::before,
#good::before {
  content: "\2022";
  display: inline-block;
  width: 0.75em;
  font-weight: bold;
}

#delayed::before {
  color: #fe5959;
}

#warning::before {
  color: #ffc733;
}

#good::before {
  color: #20bf6b;
}

@media (min-width: 1025px) {
  .info-container {
    grid-column: 2;
    flex-direction: column;
  }

  .desktop {
    display: inline-block;
    margin-right: 1em;
  }

  .total {
    margin-left: 0;
  }
}
</style>