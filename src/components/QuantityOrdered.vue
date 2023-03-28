<script setup>
import { ref } from "vue";
const props = defineProps({
  quantityOrder: {
    type: Number,
    require: true,
  },
});

defineEmits(["quantityOrdered"]);
</script>

<template>
  <button
    class="btn btn-xs btn-circle btn-ghost btn-active"
    @click="
      props.quantityOrder <= 1 ? '' : props.quantityOrder--;
      $emit('quantityOrdered', props.quantityOrder);
    "
  >
    -
  </button>
  {{ props.quantityOrder }}
  <button
    class="btn btn-xs btn-circle btn-ghost btn-active"
    @click="
      props.quantityOrder++;
      $emit('quantityOrdered', props.quantityOrder);
    "
  >
    +
  </button>
</template>

<style scoped></style>
