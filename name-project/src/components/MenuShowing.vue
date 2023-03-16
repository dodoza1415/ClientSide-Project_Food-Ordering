<script setup>
import { ref } from "vue";

const props = defineProps({
  menu: {
    type: Object,
    require: true,
  },
});

defineEmits(["passCartItem"]);

const addbtn = ref(null);
const isAdd = ref(false);
const add = () => {
  isAdd.value = !isAdd.value;
  isAdd.value
    ? (addbtn.value.textContent = "Added")
    : (addbtn.value.textContent = "Add to cart");
  // console.log(addbtn.value.id);
};

</script>

<template>
  <div class="flex justify-center">
    <img :src="menu.picURL" class="w-[120px] h-[120px] rounded-[30px]" />
  </div>

  <div class="flex flex-row justify-center">
    <p class="font-['Baloo'] text-[0.9em] text-center mt-3">
      {{ menu.name }}
    </p>
  </div>

  <div class="w-full flex justify-center">
    <p class="font-['Baloo'] text-lg">{{ menu.price }}฿</p>
  </div>

  <div class="w-full flex justify-center">
    <button
    type="button"
      :id="menu.name"
      class="border border-gray-300 rounded-md p-2 bg-black text-white"
      ref="addbtn"
      @click="
        $emit('passCartItems', menu, menu.name);
        add();
      "
      :class="isAdd ? 'border rounded-md p-2 bg-green-300 text-slate-600 opacity-50' : ''"
      :disabled="isAdd"
    >
    Add to Cart
  </button>
  </div>
</template>

<style scoped></style>
