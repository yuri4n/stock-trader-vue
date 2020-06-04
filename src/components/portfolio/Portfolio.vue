<template>
  <div>
    <app-stock
      v-for="stock in stocks"
      :key="stock.id"
      :stock="stock"
    ></app-stock>
    <h1 class="display-2" v-if="stocks.length === 0">
      There are no stocks, try
      <router-link
        to="/stocks"
        tag="span"
        class="blue--text text--lighten-1"
        style="cursor: pointer; text-decoration: underline"
        >buying</router-link
      >
      some.
    </h1>
  </div>
</template>

<script>
import Stock from "./Stock";
import { mapGetters } from "vuex";

export default {
  name: "Portfolio",
  components: {
    appStock: Stock
  },
  computed: {
    ...mapGetters({ stocks: "stockPortfolio" })
  }
};
</script>

<style scoped></style>
