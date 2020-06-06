<template>
  <v-app id="inspire">
    <app-drawer v-model="drawer"></app-drawer>
    <app-header @change-drawer="drawer = $event"></app-header>
    <v-content>
      <v-container fluid>
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
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

<style lang="scss">
.slide-enter-active {
  animation: slide-in 300ms ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 300ms ease-in forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-30%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30%);
    opacity: 0;
  }
}
</style>
