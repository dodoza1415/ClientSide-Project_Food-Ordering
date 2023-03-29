<script setup>
import { ref, onMounted } from "vue";
import HomeIcon from "./assets/icons/IcOutlineHome.vue";
import TypeSelect from "./components/TypeSelect.vue";
import MenuShowing from "./components/MenuShowing.vue";
import MaterialSymbolsEditSquareOutlineRounded from "./assets/icons/MaterialSymbolsEditSquareOutlineRounded.vue";
import CartItemsShowing from "./components/CartItemsShowing.vue";
import { getItems } from "./composable/getItems";
import Reviews from "./components/Reviews.vue";
import CarbonInformation from './assets/icons/CarbonInformation.vue'
import RouterNav from "./components/RouterNav.vue";
import { RouterView } from "vue-router";

const items = ref(getItems());
// console.log(items)

const menuArr = ref(items.value[0].menu);
const updateMenuArr = (updateMenu) => {
  // console.log(updateMenu)
  menuArr.value = updateMenu;
  // console.log(menuArr.value)
};

const userCart = ref([]);
const updateUserCart = (updateCart) => {
  userCart.value = updateCart;
  // console.log(userCart.value)
};
const currentPage = ref("Home");
const changePage = (page) => {
  currentPage.value = page;
  // console.log(currentPage.value)
};
</script>

<template>
  <div id="main" class="w-full h-[100vh] pl-[50px] flex justify-center">
    <div
      id="secondary"
      class="flex flex-row w-[1336px] h-[790px] rounded-[59px] text-black"
    >
      <!-- MENU -->
      <div id="menu" class="flex flex-col w-[20%] h-[100%]">
        <!-- Profile components -->
        <div id="profile" class="flex flex-col mt-[80px]">
          <img
            id="profilepic"
            src="./assets/Dr.rash.jpg"
            alt="profilePic"
            class="rounded-lg"
          />
          <h1 id="name" class="text-center text-xl font-['Baloo'] mt-3">
            Dr. Marcus Rashford
          </h1>
        </div>
        <!-- Home page -->
        <div
          id="home"
          class="flex justify-center mt-[50px] font-['Baloo'] cursor-pointer"
          @click="changePage('Home')"
        >
          <div class="flex flex-row">
            <div
              class="w-[61px] h-[57px] bg-white rounded-[20px] shadow-lg relative pt-[10px]"
            >
              <HomeIcon id="homeIcon" class="pl-[14px] mt-[3px]" />
            </div>
            <p class="text-2xl m-auto ml-5">Home</p>
          </div>
        </div>
        <!-- Review page -->
        <div
          id="review"
          class="flex justify-center mt-[50px] font-['Baloo'] cursor-pointer"
          @click="changePage('Review')"
        >
          <div class="flex flex-row">
            <div
              class="w-[61px] h-[57px] bg-white rounded-[20px] shadow-lg relative pt-[10px] pl-[16.5px]"
            >
              <MaterialSymbolsEditSquareOutlineRounded />
            </div>
            <p class="text-2xl m-auto pl-2">Review</p>
          </div>
        </div>
        
        <div
          class="flex justify-center mt-[50px] font-['Baloo'] cursor-pointer ml-[-20px]"
          @click="changePage('Info')"
        >
        <div class="flex flex-row">
            <div
              class="w-[61px] h-[57px] bg-white rounded-[20px] shadow-lg relative pt-[14px] pl-[17px]"
            >
              <CarbonInformation/>
            </div>
            <p class="text-2xl m-auto ml-5">Info</p>
          </div>
      </div>
      </div>
      <!-- ORDER -->
      <div
        id="order"
        class="flex flex-row w-[80%] h-[91%] bg-white rounded-[59px] mt-10 mr-6"
        v-if="currentPage === 'Home'"
      >
        <!-- Type & Order Selections -->
        <div id="selection" class="flex flex-col w-[65.14%] h-[100%]">
          <!-- type  -->
          <TypeSelect :items="items" @updateMenuArr="updateMenuArr" />

          <!-- แสดง MENU -->
          <MenuShowing :menuArr="menuArr" @currentUserCart="updateUserCart" />

          <!-- Search Bar components -->

          <!-- <div class="w-full flex justify-end">
                <div class="w-[45px] h-[45px] flex flex-row mt-3 bg-gray-200 rounded-xl shadow-lg">
                  <button @click="search = !search" class="mt-[5px] ml-[10px]">
                    <MaterialSymbolsSearchRounded />
                  </button>
                </div>
                <input @input="isActive(typeNum)" v-show="search" v-model.trim="userKeywords" type="text"
                  placeholder="Type keyword..."
                  class="w-[10em] h-8 rounded-md ml-3 mt-5 p-2 bg-white border border-gray-500" />
              </div> -->
          <!-- Menu Grid -->
          <!-- menu components -->
        </div>
        <!-- cart -->
        <CartItemsShowing :userCart="userCart" />
      </div>
      <div
        class="w-[80%] h-[91%] bg-white rounded-[59px] mt-10 mr-6 overflow-scroll"
        v-if="currentPage === 'Review'"
      >
        <Reviews />
      </div>
      <div
        class="w-[80%] h-[91%] bg-white rounded-[59px] mt-10 mr-6 overflow-scroll"
        v-if="currentPage === 'Info'"
      >
      <div class="flex flex-row m-10 gap-2">
        <RouterNav/>
      </div>
      <RouterView/>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Baloo:wght@400");
@import url("https://fonts.googleapis.com/css2?family=Alkatra:wght@600&display=swap");

#main {
  background: conic-gradient(
    from 260.41deg at 69.86% 79.2%,
    #ffffff 0deg,
    #f76e21 120deg,
    #f76e21 240deg,
    #ffffff 360deg
  );
}

#secondary {
  background: conic-gradient(
    from 270deg at 102.36% 100%,
    rgba(255, 255, 255, 0.5) 0deg,
    rgba(203, 203, 203, 0.5) 90deg,
    rgba(207, 205, 205, 0.5) 180deg,
    rgba(255, 251, 250, 0.5) 270deg,
    rgba(253, 235, 221, 0.5) 360deg
  );
}

#profilepic {
  width: 50px;
  height: 50px;
  margin: auto;
}
</style>
