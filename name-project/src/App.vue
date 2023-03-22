<script setup>
import { ref } from "vue";
import HomeIcon from "./assets/icons/IcOutlineHome.vue";
import TypeSelect from "./components/TypeSelect.vue";
import MenuShowing from "./components/MenuShowing.vue";
import UserCartShowing from "./components/UserCartShowing.vue";
import CartItemsShowing from "./components/CartItemsShowing.vue";
import SearchBar from "./components/SearchBar.vue";
import { getItems } from "./composable/getItems";

const items = ref(getItems());
// console.log(items)

const menuArr = ref(items.value[0].menu)
const updateMenuArr = (updateMenu) => {
  // console.log(updateMenu)
  menuArr.value = updateMenu
  // console.log(menuArr.value)
}

const userCart = ref([]);
const updateUserCart = (updateCart) => {
  userCart.value = updateCart
  // console.log(userCart.value)
}


</script>

<template>
  {{ userCart }}
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
        <!-- Menu component -->
        <div
          id="home"
          class="flex justify-center mt-[50px] font-['Baloo'] cursor-pointer"
        >
          <div id="home2" class="flex flex-row">
            <div
              class="w-[61px] h-[57px] bg-white rounded-[20px] shadow-lg relative pt-[10px]"
            >
              <HomeIcon id="homeIcon" />
            </div>
            <p class="text-2xl m-auto ml-5">Home</p>
          </div>
        </div>
      </div>
      <!-- ORDER -->
      <div
        id="order"
        class="flex flex-row w-[80%] h-[91%] bg-white rounded-[59px] mt-10 mr-6"
      >
        <!-- Type & Order Selections -->
        <div id="selection" class="flex flex-col w-[65.14%] h-[100%]">
          <!-- type  -->
          <div id="type" class="flex flex-col w-[100%] h-[50%]">
            <!-- ข้อความ -->
            <div class="flex flex-row justify-between h-[50%]">
              <div class="mt-[50px] ml-[50px]">
                <p class="font-['Baloo'] text-[48px]">Welcome to Eatland</p>
              </div>
            </div>
            <!-- type selection components-->
            <TypeSelect :items="items" @updateMenuArr="updateMenuArr"/>
            
          </div>
          <!-- แสดง MENU -->
          <div id="item" class="w-[100%] h-[50%] flex flex-col">
            <!-- MENUS + search -->
            <div class="flex flex-row h-[20%]">
              <!-- MENUS -->
              <div class="w-full flex justify-center">
                <p class="font-['Baloo'] text-[48px]">Menus</p>
              </div>
              <SearchBar/>
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
            </div>
            <!-- Menu Grid -->
            <!-- menu components -->
            <MenuShowing :menuArr="menuArr" @currentUserCart="updateUserCart"/>
          </div>
        </div>
        <!-- cart -->
        <div id="cart" class="w-[35%] h-[100%] flex flex-col">
          <!-- Text -->
          <div class="flex justify-center mt-[50px]">
            <h3 class="font-['Baloo'] text-[48px]">Your Cart</h3>
          </div>
          <!-- cart components -->
          <UserCartShowing :userCart="userCart"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url(https://fonts.googleapis.com/css2?family=Baloo:wght@400);
@import url(https://fonts.googleapis.com/css2?family=?????:wght@400);

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
