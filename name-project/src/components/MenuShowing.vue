<script setup>
import { ref } from 'vue';

const props = defineProps({
  menu: {
    type: Object,
    require: true,
  },
});

defineEmits(['passCartItem'])

const cartItem = ref([])
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

  <div class="flex flex-row">
    <div class="w-full flex justify-center mt-7">
      <p class="font-['Baloo'] text-lg">{{ menu.price }}฿</p>
    </div>
    <div class="w-full">
      <input
        type="checkbox"
        :id="menu.name"
        :value="menu"
        v-model="cartItem"
        class="checkbox checkbox-success checkbox-md ml-8 mt-7"
        @change ="$emit('passCartItems', cartItem, $event.target.checked, $event.target.id)"
      />
    </div>
  </div>
</template>

<style scoped></style>
