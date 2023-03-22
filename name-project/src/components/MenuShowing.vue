<script setup>
import { ref } from 'vue';
const props = defineProps({
  menuArr: {
    type: Object,
    require: true,
  },
});

console.log(props.menuArr)


const userCart = ref([])
const addToCart = (menu) => {
  // console.log(menu);
  menu.isAdd = true
  userCart.value.push(menu)
  console.log(userCart.value)
};
</script>

<template>
  <div class="grid grid-cols-3 justify-items-center gap-y-4 overflow-scroll">
    <div
      v-for="(menu, index) in menuArr"
      class="w-[180px] h-[237px] rounded-[31px] bg-white shadow-lg flex flex-col"
    >
      <div class="flex justify-center">
        <img :src="menu.picURL" class="w-[120px] h-[120px] rounded-[30px]" />
      </div>

      <p class="font-['Baloo'] text-lg self-center">{{ menu.price }}฿</p>

      <button
        class="btn btn-success btn-md w-[100px] self-center mt-2 font-['Baloo']"
        @click="addToCart(menu)"
        :disabled="menu.isAdd"
      >
        Add
      </button>
    </div>
  </div>
</template>

<style scoped></style>
