<script setup>
import { ref } from "vue";
import MaterialSymbolsSearchRounded from "../assets/icons/MaterialSymbolsSearchRounded.vue";

const search = ref(false)
</script>

<template>
  <div class="w-full flex justify-end">
    <div
      class="w-[45px] h-[45px] flex flex-row mt-3 bg-gray-200 rounded-xl shadow-lg"
    >
      <button @click="search = !search" class="mt-[5px] ml-[10px]">
        <MaterialSymbolsSearchRounded />
      </button>
    </div>
    <input
      v-show="search"
      type="text"
      placeholder="Type keyword..."
      class="w-[10em] h-8 rounded-md ml-3 mt-5 p-2 bg-white border border-gray-500"
    />
  </div>
</template>

<style scoped></style>
