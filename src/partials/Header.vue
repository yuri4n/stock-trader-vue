<template>
  <v-app-bar app clipped-left>
    <v-app-bar-nav-icon @click.stop="changeDrawer"></v-app-bar-nav-icon>
    <v-toolbar-title>Stock Market</v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="font-weight-bold mr-2">Balance:</div>
    <div class="mr-10">$12.3</div>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    drawer: true
  }),
  methods: {
    changeDrawer() {
      this.drawer = !this.drawer;
      this.$emit("change-drawer", this.drawer);
    }
  }
};
</script>
