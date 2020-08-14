<template>
  <div class="info-container">
    <span id="red">4</span>

    <span id="yellow">7</span>

    <span id="green">43</span>

    <div id="total">
      <span class="light-grey">Total:</span>
      <span>54 contas</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardsInfo",
};
</script>

<style scoped>
.info-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0.5em 0;
  align-items: flex-start;
}

.light-grey {
  margin-right: 0.2em;
}

#total {
  display: inline-block;
}

#red::before,
#yellow::before,
#green::before {
  content: "\2022";
  display: inline-block;
  width: 0.75em;
  font-weight: bold;
}

#red::before {
  color: #fe5959;
}

#yellow::before {
  color: #ffc733;
}

#green::before {
  color: #20bf6b;
}
</style>