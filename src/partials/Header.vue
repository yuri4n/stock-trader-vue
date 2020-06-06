<template>
  <v-app-bar app clipped-left>
    <v-app-bar-nav-icon @click.stop="changeDrawer"></v-app-bar-nav-icon>
    <v-toolbar-title>Stock Market</v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="font-weight-bold mr-2">Balance:</div>
    <div class="mr-10">{{ funds | currency }}</div>
    <button class="font-weight-bold mr-10 red--text" @click="endDay">
      END DAY
    </button>
  </v-app-bar>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Header",
  data: () => ({
    drawer: true
  }),
  methods: {
    ...mapActions(["randomizeStocks"]),
    changeDrawer() {
      this.drawer = !this.drawer;
      this.$emit("change-drawer", this.drawer);
    },
    endDay() {
      this.randomizeStocks();
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>
