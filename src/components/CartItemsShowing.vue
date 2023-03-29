<script setup>
import { computed, provide, ref } from "vue";
const props = defineProps({
  userCart: {
    type: Object,
    require: true,
  },
});

const deleteItem = (item) => {
  item.isAdd = !item.isAdd
  item.quantity = 1
  props.userCart.splice(((props.userCart.map(x => x.name)).indexOf(item.name)), 1)
  // console.log(props.userCart)
}
</script>

<template>
  <div id="cart" class="w-[35%] h-[100%] flex flex-col">
    <!-- Your cart text -->
    <div class="flex justify-center mt-[50px]">
      <h3 class="font-['Baloo'] text-[48px]">Your Cart</h3>
    </div>
    <!-- Cart Show -->
    <div class="w-full ml-[20px] font-['Alkatra']">
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
          <tr v-for="(item, index) in props.userCart">
            <td class="pr-1">
              <button class="btn btn-xs btn-circle btn-error" @click="deleteItem(item)">
                X
              </button>
            </td>
            <td>{{ item.name }}</td>
            <td>
              {{
                item.price * item.quantity <= 0
                  ? item.price
                  : item.price * item.quantity
              }}฿
            </td>
            <td class="pl-[15px]">
              <button
                class="btn btn-xs btn-circle btn-ghost btn-active"
                @click="
                  item.quantity <= 1 ? '' : item.quantity-- ;
                "
              >
                -
              </button>
              {{ item.quantity }}
              <button
                class="btn btn-xs btn-circle btn-ghost btn-active"
                @click="
                  item.quantity++
                "
              >
                +
              </button>
            </td>
          </tr>
          <tr class="text-left" v-if="props.userCart[0]">
            <th></th>
            <th>Total Amount:</th>
            <th class="text-sm">
              {{
                userCart.reduce(
                  (total, currentValue) =>
                    total + currentValue.price * currentValue.quantity,
                  0
                )
              }}
              Baht
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
