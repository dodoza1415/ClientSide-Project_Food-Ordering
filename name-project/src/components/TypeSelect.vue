<script setup>
const props = defineProps({
  item: {
    type: Object,
    require: true,
  },
  typeId: {
    type: Number,
    require: true
  },
  index: {
    type: Number,
    require: true
  }
});

defineEmits(['typeSelect']);
</script>

<template>
  <div class="text-center mt-[20px]" @click="$emit('typeSelect', index)">
    <img :src="item.iconURL" class="ml-[10px]" />
    <p :class="typeId === index ? 'text-white' : 'text-black'">{{ item.type }}</p>
  </div>
</template>

<style scoped></style>
