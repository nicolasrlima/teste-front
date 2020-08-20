<template>
  <div class="the-card-header">
    <div class="days-container" :class="status">
      <span class="days-number">{{days}}</span>
      <span class="subtext">Dias</span>
    </div>
    <div class="name-container">
      <h2 class="patient-name">{{patientName}}</h2>
      <span class="subtext">{{healthInsurance}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheCardHeader",
  props: {
    status: String,
    days: Number,
    patientName: String,
    healthInsurance: String,
  },
};
</script>

<style scoped>
.the-card-header {
  display: flex;
  flex-direction: row;
}

.days-container {
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  width: 3.8em;
  height: 3.8em;
  justify-content: center;
  align-items: center;
  color: #fff;
  line-height: 1.3em;
}

.days-number {
  font-size: 1.5em;
  font-weight: bold;
}

.DELAYED {
  background: #fe5959;
}

.WARNING {
  background: #ffc733;
}

.GOOD {
  background: #20bf6b;
}

.name-container {
  margin-left: 1em;
}

.patient-name {
  font-size: 1.3em;
  font-weight: 400;
}
</style>