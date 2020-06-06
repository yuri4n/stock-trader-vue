<template>
  <v-app-bar app clipped-left>
    <v-app-bar-nav-icon @click.stop="changeDrawer"></v-app-bar-nav-icon>
    <v-toolbar-title>Stock Market</v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="font-weight-bold mr-2">Balance:</div>
    <div class="mr-10">{{ funds | currency }}</div>
    <v-menu v-model="isDropdownOpen" :offset-y="true">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on" class="mr-10">
          Save and Load
        </v-btn>
      </template>
      <v-list>
        <v-list-item @click="saveData">
          <v-list-item-title>Save</v-list-item-title>
        </v-list-item>
        <v-list-item @click="loadData">
          <v-list-item-title>Load</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn class="font-weight-bold mr-10 red--text" @click="endDay">
      END DAY
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Header",
  data: () => ({
    drawer: true,
    isDropdownOpen: false
  }),
  methods: {
    ...mapActions({
      randomizeStocks: "randomizeStocks",
      fetchData: "loadData"
    }),
    changeDrawer() {
      this.drawer = !this.drawer;
      this.$emit("change-drawer", this.drawer);
    },
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };

      this.$http.put("data.json", data);
    },
    loadData() {
      this.fetchData();
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>
