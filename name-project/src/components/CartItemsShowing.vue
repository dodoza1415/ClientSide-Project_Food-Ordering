<script setup>
import { computed, provide, ref } from "vue";
import QuantityOrdered from "./QuantityOrdered.vue";
defineProps({
  userCart: {
    type: Object,
    require: true,
  },
});

const quantity = ref(1)
const getQuantityOrdered = (quantityOrdered) => {
    quantity.value = quantityOrdered
    console.log(quantity.value)
}

</script>

<template>
  <table class="w-full">
    <thead>
      <tr class="text-left">
        <th></th>
        <th class="w-[45%]">Menu</th>
        <th class="w-[20%]">Price</th>
        <th class="w-[35%] pl-[15px]">Quantity</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in userCart">
        <td class="pr-1">
          <button
            class="btn btn-xs btn-circle btn-ghost btn-active"
          >
            x
          </button>
        </td>
        <td>{{ item.name }}</td>
        <td>{{ item.price * quantity <= 0 ? item.price : item.price * quantity }}฿</td>
        <td class="pl-[15px]">
          <QuantityOrdered @quantityOrdered="getQuantityOrdered"/>
        </td>
      </tr>
      <tr class="text-left">
        <th></th>
        <th>Total Amount:</th>
        <th>{{ userCart.reduce((total, currentValue) => total + currentValue.price * quantity, 0) }} Baht</th>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
