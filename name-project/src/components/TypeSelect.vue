<script setup>
import { ref } from "vue";
const props = defineProps({
  items: {
    type: Object,
    require: true,
  },
});

// console.log(props.items)
const menuArr = ref(props.items[0].menu)
// console.log(menuArr)
const refId = ref(0);
const isSelected = (index = 0) => {
  refId.value = index;
  menuArr.value = props.items[index].menu
  // console.log(index)
  // console.log(refId.value)
  // console.log(menuArr.value)
};

defineEmits(['updateMenuArr'])
</script>

<template>
  <ul class="flex flex-row ml-[50px] gap-3 h-[50%]">
    <li 
    v-for="(item, index) in items"
    :key="index"
    class="w-[89px] h-[130px] rounded-[59px] text-black shadow-xl font-['?????'] cursor-pointer"
    @click="isSelected(index); $emit('updateMenuArr', menuArr)"
    :class="refId === index ? 'bg-black' : 'bg-white'"
    >
    <div class="text-center mt-[20px]">
      <img :src="item.iconURL" class="ml-[10px]" />
      <p :class="refId === index ? 'text-white' : 'text-black'">
        {{ item.type }}
      </p>
    </div>
    </li>
  </ul>
</template>

<style scoped></style>
