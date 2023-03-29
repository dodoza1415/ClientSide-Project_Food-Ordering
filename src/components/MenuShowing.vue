<script setup>
import { ref, computed } from "vue";
import MaterialSymbolsSearchRounded from "../assets/icons/MaterialSymbolsSearchRounded.vue";
const props = defineProps({
  menuArr: {
    type: Object,
    require: true,
  }
});

// console.log(props.menuArr)
const userCart = ref([]);
const addToCart = (menu) => {
  // console.log(menu);
  menu.isAdd = true;
  userCart.value.push(menu);
  // console.log(userCart.value)
};


const search = ref(false)
const userKeywords = ref('')
const filterFood = computed(() => {
  return props.menuArr.filter((arr) =>
      arr.name.toLowerCase().includes(userKeywords.value.toLowerCase())
    );
})

defineEmits(["currentUserCart"]);
</script>

<template>
  <div id="item" class="w-[100%] h-[50%] flex flex-col">
    <!-- Menu + Search -->
    <div class="flex flex-row h-[20%]">
      <div class="w-full flex justify-center">
        <p class="font-['Baloo'] text-[48px]">Menus</p>
      </div>
      <div class="w-full flex justify-end">
        <div
          class="w-[45px] h-[45px] flex flex-row mt-3 bg-gray-200 rounded-xl shadow-lg"
        >
          <button @click="search = !search" class="mt-[5px] ml-[10px]">
            <MaterialSymbolsSearchRounded />
          </button>
        </div>
        <input
            @input="searchBar()"
            v-show="search"
            v-model.trim="userKeywords"
            type="text"
            placeholder="Type keyword..."
            class="w-[10em] h-8 rounded-md ml-3 mt-5 p-2 input input-bordered max-w-xs"
          />
      </div>
    </div>
    <!-- Menu Show -->
    <div class="grid grid-cols-3 justify-items-center gap-y-4 overflow-scroll">
      <div
        v-for="(menu, index) in filterFood"
        class="w-[180px] h-[237px] rounded-[31px] bg-white shadow-lg flex flex-col"
      >
        <div class="flex justify-center">
          <img :src="menu.picURL" class="w-[120px] h-[120px] rounded-[30px]" />
        </div>
        <p class="font-['Baloo'] text-lg self-center">{{ menu.name }}</p>
        <p class="font-['Baloo'] text-lg self-center">{{ menu.price }} ฿</p>

        <button
          class="btn btn-success btn-md w-[100px] self-center font-['Baloo']"
          @click="
            addToCart(menu);
            $emit('currentUserCart', userCart);
          "
          :disabled="menu.isAdd"
        >
          {{ menu.isAdd ? "Added" : "Add" }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
