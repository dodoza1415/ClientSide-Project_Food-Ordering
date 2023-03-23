<script setup>
import { ref, computed } from "vue";
const props = defineProps({
  userCart: {
    type: Object,
    require: true,
  },
});

const amountArr = ref([]);
const indexArr = ref([]);
const calTotal = (index, amount) => {
  // console.log(index)
  // console.log(amount)
  if (indexArr.value.includes(index)) {
    amountArr.value.splice(indexArr.value.indexOf(index), 1, amount);
    // console.log(amountArr.value)
  } else {
    indexArr.value.push(index);
    amountArr.value.push(amount);
    // console.log(amountArr.value)
  }

  // console.log(amountArr.value)
};

const totalAmount = computed(() => {
  return amountArr.value.reduce((total, value) => total + value, 0);
});
</script>

<template>
  <div id="cart" class="w-[35%] h-[100%] flex flex-col">
    <!-- Text -->
    <div class="flex justify-center mt-[50px]">
      <h3 class="font-['Baloo'] text-[48px]">Your Cart</h3>
    </div>
    <!-- cart components -->

    <div class="w-full ml-[20px] font-['?????']">
      <table class="w-full">
        <thead>
          <tr class="text-left">
            <th class="w-[45%]">Menu</th>
            <th class="w-[20%]">Price</th>
            <th class="w-[35%] pl-[15px]">Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in userCart">
            <td>{{ item.name }}</td>
            <td>{{ item.price * item.quantity }} ฿</td>
            <td class="pl-[15px]">
              <button
                class="btn btn-xs btn-circle btn-ghost btn-active"
                @click="
                  item.quantity > 1 ? item.quantity-- : '';
                  calTotal(index, item.quantity * item.price);
                "
              >
                -
              </button>
              {{ item.quantity }}
              <button
                class="btn btn-xs btn-circle btn-ghost btn-active"
                @click="
                  item.quantity++;
                  calTotal(index, item.quantity * item.price);
                "
              >
                +
              </button>
            </td>
          </tr>
          <tr class="text-left">
            <th>Total Amount:</th>
            <th>{{ totalAmount }} Baht</th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
