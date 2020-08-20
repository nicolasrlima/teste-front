<template>
  <div class="info-container">
    <div class="details-container">
      <span id="delayed" class="mobile">{{cardsCount.delayed}}</span>
      <span id="delayed" class="desktop">{{cardsCount.delayed}} cards</span>

      <span id="warning" class="mobile">{{cardsCount.warning}}</span>
      <span id="warning" class="desktop">{{cardsCount.warning}} cards</span>

      <span id="good" class="mobile">{{cardsCount.good}}</span>
      <span id="good" class="desktop">{{cardsCount.good}} cards</span>
    </div>
    <div id="total">
      <span class="light-grey">Total:</span>
      <span class="mobile">{{totalCards}}</span>
      <span class="desktop">{{totalCards}} contas</span>
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

.details-container span {
  margin-right: 0.5em;
}

.light-grey {
  margin-right: 0.2em;
}

.mobile {
  display: inline-block;
}

.desktop {
  display: none;
}

#total {
  display: inline-block;
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
    justify-content: space-around;
  }

  .mobile {
    display: none;
  }

  .desktop {
    display: inline-block;
  }

  #total {
    display: block;
    font-size: 0.8em;
  }
}
</style>