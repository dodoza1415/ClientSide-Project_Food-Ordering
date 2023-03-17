<script setup>
import { computed, provide, ref } from "vue";

defineProps({
  cartItems: {
    type: Object,
    require: true,
  },
});


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
      <tr v-for="(item, index) in cartItems">
        <td class="pr-1">
          <button
            class="btn btn-xs btn-circle btn-ghost btn-active"
          >
            x
          </button>
        </td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}฿</td>
        <td class="pl-[15px]">
          <button class="btn btn-xs btn-circle btn-ghost btn-active">-</button>
          1
          <button class="btn btn-xs btn-circle btn-ghost btn-active">+</button>
        </td>
      </tr>
      <tr class="text-left">
        <th></th>
        <th>Total Amount:</th>
        <th>{{ totalAmount }} Baht</th>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
