<template>
  <div class="activity-container">
    <select name="activities" id="activities" v-model="currentActivity">
      <option disabled value v-if="loading===true">Carregando...</option>
      <option
        v-for="activity in activitiesList"
        :key="activity.id"
        :value="{id: activity.id, name: activity.name}"
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
      currentActivity: { id: -1, name: "Carregando..." },
    };
  },
  methods: {
    async getActivities() {
      this.loading = true;

      try {
        const dataResponse = await fetch(`${ENV.URL}activities`);
        const dataJSON = await dataResponse.json();

        this.activitiesList = dataJSON;
        this.loading = false;
        this.currentActivity = {
          id: this.activitiesList[0].id,
          name: this.activitiesList[0].name,
        };
      } catch (error) {
        alert(`Houve um problema no servidor\nERRO: ${error}`);
      }
    },
  },
  created() {
    this.getActivities();
    this.$store.commit("CHANGE_CURRENT_ACTIVITY", this.currentActivity.id);
  },
  updated() {
    this.$store.commit("CHANGE_CURRENT_ACTIVITY", this.currentActivity.id);
  },
};
</script>

<style scoped>
select {
  width: fit-content;
  -webkit-padding-end: 20px;
  -moz-padding-end: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url("../../../assets/arrow.svg") no-repeat right;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

select:focus {
  outline: none;
}

@media (min-width: 801px) {
  .activity-container {
    grid-column: 1;
    justify-self: start;
  }
}
</style>