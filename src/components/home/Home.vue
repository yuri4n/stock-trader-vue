<template>
  <div>
    <h1 class="display-4 font-weight-black">Welcome, Julian</h1>
    <h2 class="font-weight-light">Trade with the best</h2>
    <h2 class="font-weight-light">
      <router-link
        to="/stocks"
        tag="span"
        class="font-weight-black blue--text text--lighten-1"
        style="cursor: pointer; text-decoration: underline"
        >Buy</router-link
      >
      or
      <router-link
        to="/portfolio"
        tag="span"
        class="font-weight-black blue--text text--lighten-1"
        style="cursor: pointer; text-decoration: underline"
        >View </router-link
      >your portfolio
    </h2>
    <h2 class="font-weight-light mb-10">
      <button @click="endDay" class="font-weight-black red--text">
        END DAY
      </button>
    </h2>
    <h2 class="font-weight-light">
      Your founds: <span class="display-1">{{ funds | currency }}</span>
    </h2>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Home",
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions(["randomizeStocks"]),
    endDay() {
      this.randomizeStocks();
    }
  }
};
</script>

<style scoped></style>
