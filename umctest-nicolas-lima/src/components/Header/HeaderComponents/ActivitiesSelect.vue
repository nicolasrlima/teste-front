<template>
  <div class="activity-container">
    <select name="activities" id="activities" v-model="currentActivity">
      <option value="Carregando..." disabled v-if="loading===true">Carregando...</option>
      <option
        v-for="activity in activitiesList"
        :key="activity.id"
        :value="activity.name"
      >{{activity.name}}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "ActivitiesSelect",
  data() {
    return {
      loading: true,
      activitiesList: null,
      currentActivity: "Carregando...",
    };
  },
  methods: {
    getActivities() {
      this.loading = true;

      fetch("http://localhost:3000/activities")
        .then((r) => r.json())
        .then((data) => {
          this.activitiesList = data;
          this.loading = false;
          this.currentActivity = this.activitiesList[0].name;

          this.$store.commit("CHANGE_CURRENT_ACTIVITY", this.currentActivity);
        });
    },
  },
  created() {
    this.getActivities();
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