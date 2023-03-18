<script setup>
import { ref } from "vue";

let quantity = ref(1);
const increment = () => {
   quantity.value++
//    console.log(quantity.value)
}

const decrement = () => {
    if(quantity.value === 1){
        return ''
    }else{
        quantity.value--
    }
    // console.log(quantity.value)
}

defineEmits(['quantityOrdered'])
</script>

<template>
  <button class="btn btn-xs btn-circle btn-ghost btn-active" @click="decrement(); $emit('quantityOrdered', quantity)">-</button>
  {{ quantity }}
  <button class="btn btn-xs btn-circle btn-ghost btn-active" @click="increment(); $emit('quantityOrdered', quantity)">+</button>
</template>

<style scoped></style>
