<template>
  <div class="cards-container">
    <div class="cards-list" v-if="cardsData && cardsData.length">
      <TheCard v-for="card in visibleCards" :key="card.id" :actualCard="card" />

      <div class="pagination">
        <button
          id="backwards-btn"
          :disabled="currentPage === 0"
          @click="updateCurrentPage(currentPage - 1)"
        >
          <img src="../../assets/arrow.svg" />
        </button>

        <button
          v-for="(page, pageIndex) in totalPages"
          :key="page"
          class="page-btn light-grey"
          :id="pageIndex === currentPage ? 'active-page' : ''"
          @click="updateCurrentPage(pageIndex)"
        >{{page}}</button>

        <button
          id="forwards-btn"
          :disabled="currentPage === totalPages - 1"
          @click="updateCurrentPage(currentPage + 1)"
        >
          <img src="../../assets/arrow.svg" />
        </button>
      </div>
    </div>

    <div v-else-if="cardsData && cardsData.length === 0" class="no-cards-listed">
      <span>Nenhum paciente cadastrado nesta unidade!</span>
    </div>

    <div v-else class="loading-cards">
      <div class="loading-icon"></div>
    </div>
  </div>
</template>

<script>
import ENV from "../../config.js";
import TheCard from "./CardsListComponents/TheCard.vue";

export default {
  name: "CardsList",
  components: {
    TheCard,
  },
  props: ["actualCard"],
  data() {
    return {
      currentPage: 0,
      visibleCards: [],
    };
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
    cardsDataStatus() {
      return this.$store.state.cardsData.status;
    },
    resultsPerPage() {
      return this.$store.state.resultsPerPage;
    },
    totalPages() {
      return Math.ceil(this.cardsData.length / this.resultsPerPage);
    },
  },
  methods: {
    async getCards() {
      try {
        const cardsResponse = await fetch(
          `${ENV.URL}cards?activityId=${this.currentActivity}`
        );

        const cardsJSON = await cardsResponse.json();

        const organizedCards = this.organizeByFilter(cardsJSON);

        this.$store.dispatch("changeCardsData", organizedCards);
      } catch (error) {
        alert(`Houve um problema no servidor\nERRO: ${error}`);
      }
    },
    organizeByFilter(cardsData) {
      let sortedCards;
      if (parseInt(this.currentFilter) === 0) {
        cardsData.sort((a, b) => b.days - a.days);

        sortedCards = cardsData;
      } else {
        sortedCards = cardsData.filter((el) => el.hasPendingDocument === true);
      }
      return sortedCards;
    },
    updateVisibleCards() {
      this.visibleCards = this.cardsData.slice(
        this.currentPage * this.resultsPerPage,
        this.currentPage * this.resultsPerPage + this.resultsPerPage
      );
    },
    updateCurrentPage(pageNumber) {
      this.currentPage = pageNumber;
      this.updateVisibleCards();
    },
  },
  watch: {
    async currentActivity() {
      await this.getCards();
      this.updateVisibleCards();
    },
    async currentFilter() {
      await this.getCards();
      this.updateVisibleCards();
    },
    async resultsPerPage() {
      await this.getCards();
      this.updateVisibleCards();
    },
  },
};
</script>

<style>
.no-cards-listed {
  text-align: center;
  margin-top: 5em;
}

.pagination {
  text-align: center;
  margin: 1em 0;
}

#backwards-btn,
#forwards-btn,
.page-btn {
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  user-select: none;
  padding: 0.25em 0.75em;
  font-size: 1em;
}

#backwards-btn {
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
}

#forwards-btn {
  -webkit-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  transform: rotate(-90deg);
}

#backwards-btn:disabled,
#forwards-btn:disabled {
  visibility: hidden;
}

#active-page {
  background: #2793ff;
  color: #fff;
  border-radius: 5px;
}

.loading-icon:after {
  content: "";
  position: absolute;
  left: 50%;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 6px solid #2793ff;
  border-color: #2793ff transparent #2793ff transparent;
  animation: loading-rotation 1.2s linear infinite;
}

@keyframes loading-rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media (min-width: 1025px) {
  .cards-container {
    grid-column: 1 / 4;
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

  .no-cards-listed {
    font-size: 1.2em;
  }

  .pagination {
    grid-column: 2;
  }

  .page-btn {
    margin: 0 0.5em;
  }
}
</style>
