<script setup>
import { computed, inject, ref } from "vue";

const props = defineProps({
  menu: {
    type: Object,
    require: true,
  },
});

defineEmits(['checkedMenu'])
const cartItems = ref([])
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
    <input
      type="checkbox"
      :id="menu.name"
      :value="menu"
      v-model="cartItems"
      class="checkbox checkbox-success checkbox-md"
      @change="$emit('checkedMenu', cartItems[0], $event.target.checked, $event.target.id)"
    />
  </div>
</template>

<style scoped>
</style>
