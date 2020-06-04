<template>
  <v-navigation-drawer :value="value" @input="changeValue" app clipped>
    <v-list dense>
      <v-list-item to="/" link>
        <v-list-item-action>
          <v-icon>mdi-home-variant-outline</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item to="/portfolio" link>
        <v-list-item-action>
          <v-icon>mdi-treasure-chest</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Portfolio</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item to="/stocks" link>
        <v-list-item-action>
          <v-icon>mdi-shopping-outline</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Stocks</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Drawer",
  props: ["value"],
  methods: {
    changeValue(event) {
      this.$emit("input", event);
    }
  }
};
</script>

<style scoped></style>
