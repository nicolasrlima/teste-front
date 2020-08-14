<template>
  <div class="info-container">
    <div class="details-container">
      <span id="red" class="mobile">4</span>
      <span id="red" class="desktop">4 cards</span>

      <span id="yellow" class="mobile">7</span>
      <span id="yellow" class="desktop">7 cards</span>

      <span id="green" class="mobile">43</span>
      <span id="green" class="desktop">43 cards</span>
    </div>
    <div id="total">
      <span class="light-grey">Total:</span>
      <span class="mobile">54</span>
      <span class="desktop">54 contas</span>
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

@media (min-width: 801px) {
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