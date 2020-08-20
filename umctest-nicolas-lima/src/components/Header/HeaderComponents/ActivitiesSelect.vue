<template>
  <div class="activity-container">
    <select name="activities" id="activities" v-model="currentActivity">
      <option disabled value v-if="loading===true">Carregando...</option>
      <option
        v-for="activity in activitiesList"
        :key="activity.id"
        :value="activity.id"
      >{{activity.name}}</option>
    </select>
  </div>
</template>

<script>
import ENV from "../../../config.js";

export default {
  name: "ActivitiesSelect",
  data() {
    return {
      loading: true,
      activitiesList: null,
      currentActivity: "",
    };
  },
  computed: {
    currentActivityStatus() {
      return this.$store.state.currentActivity.status;
    },
  },
  methods: {
    async getActivities() {
      this.loading = true;

      try {
        const dataResponse = await fetch(`${ENV.URL}activities`);
        const dataJSON = await dataResponse.json();

        this.activitiesList = dataJSON;
        this.currentActivity = this.activitiesList[0].id;
        this.loading = false;
      } catch (error) {
        alert(`Houve um problema no servidor\nERRO: ${error}`);
      }
    },
  },
  created() {
    this.getActivities();
    this.$store.dispatch("changeCurrentActivity", this.currentActivity);
  },
  updated() {
    this.$store.dispatch("changeCurrentActivity", this.currentActivity);
  },
};
</script>

<style scoped>
select {
  -webkit-padding-end: 20px;
  -moz-padding-end: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url("../../../assets/arrow.svg") no-repeat right;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  outline: none;
}

@media (min-width: 1025px) {
  .activity-container {
    grid-column: 1;
    justify-self: start;
  }

  select {
    font-size: 1.8rem;
  }
}
</style>