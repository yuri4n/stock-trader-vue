<template>
  <v-col cols="6">
    <v-card class="mx-auto" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">
            {{ stock.name }}
          </v-list-item-title>
          <v-list-item-subtitle>
            <span class="font-weight-bold">Price: </span>
            {{ stock.price | currency }}
          </v-list-item-subtitle>
          <v-text-field
            min="0"
            v-model="quantity"
            type="number"
            label="Amount to buy"
          ></v-text-field>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions>
        <v-btn
          text
          @click="buyStock"
          color="warning"
          :disabled="disableButton"
          >{{ insufficientFunds ? "Insufficient Funds" : "Buy" }}</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "Stock",
  props: {
    stock: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    quantity: 0
  }),
  methods: {
    buyStock() {
      if (parseInt(this.quantity) === 0) {
        return;
      }

      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };

      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    disableButton() {
      return (
        parseInt(this.quantity) === 0 ||
        !Number.isInteger(parseFloat(this.quantity)) ||
        this.insufficientFunds
      );
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  }
};
</script>

<style scoped></style>
