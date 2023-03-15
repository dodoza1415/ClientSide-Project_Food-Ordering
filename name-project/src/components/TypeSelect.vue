<script setup>
import { computed } from "vue";
const props = defineProps({
  item: {
    type: Object,
    require: true,
  },
  typeId: {
    type: Number,
    require: true
  }
});

defineEmits(['typeSelect']);
</script>

<template>
  <div class="text-center mt-[20px]" @click="$emit('typeSelect', item.id - 1)">
    <img :src="item.iconURL" class="ml-[10px]" />
    <p :class="typeId === item.id - 1 ? 'text-white' : 'text-black'">{{ item.type }}</p>
  </div>
</template>

<style scoped></style>
