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
          <v-list-item-subtitle>
            <span class="font-weight-bold">Quantity: </span>
            {{ stock.quantity }}
          </v-list-item-subtitle>
          <v-text-field
            min="0"
            :max="stock.quantity"
            v-model="quantity"
            type="number"
            label="Amount to sell"
          ></v-text-field>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions>
        <v-btn
          text
          @click="sellStock"
          color="success"
          :disabled="disableButton"
          >{{ insufficientQuantity ? "Insufficient quantity" : "Sell" }}</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import { mapActions } from "vuex";

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
    ...mapActions({ placeSellOrder: "sellStock" }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };

      this.placeSellOrder(order);
      this.quantity = 0;
    }
  },
  computed: {
    disableButton() {
      return (
        parseInt(this.quantity) === 0 ||
        !Number.isInteger(parseFloat(this.quantity)) ||
        this.insufficientQuantity
      );
    },
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  }
};
</script>

<style scoped></style>
