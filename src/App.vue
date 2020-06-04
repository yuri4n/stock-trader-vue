<template>
  <v-app id="inspire">
    <app-drawer v-model="drawer"></app-drawer>
    <app-header @change-drawer="drawer = $event"></app-header>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import Header from "./partials/Header";
import Drawer from "./partials/Drawer";
import Footer from "./partials/Footer";

export default {
  name: "App",
  components: {
    appHeader: Header,
    appDrawer: Drawer,
    appFooter: Footer
  },
  props: {
    source: String
  },
  created() {
    this.$vuetify.theme.dark = true;
    this.$store.dispatch("initStocks");
  },
  data: () => ({
    drawer: null
  })
};
</script>
