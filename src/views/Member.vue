<script setup>
import { useRoute } from "vue-router";

const { params } = useRoute();
const studentId = params.stdId;
console.log(studentId);
</script>

<template>
  <div v-if="studentId === '64130500072'" class="text-[2em] ml-10">
    <p class="font-['Baloo']">
      Name: <span class="text-orange-300">Wathanyu Comsri</span>
    </p>
    <p class="font-['Baloo']">
      Nickname: <span class="text-orange-300">Boat</span>
    </p>
    <p class="font-['Baloo']">
      Date of Birth: <span class="text-orange-300">10 August 2002</span>
    </p>
    <p class="font-['Baloo']">
      Instagram:
      <a
        href="https://instagram.com/uuuuuu_ou?igshid=YmMyMTA2M2Y="
        target="_blank"
        class="text-orange-300 hover:text-pink-200 p-1 rounded-md"
        >uuuuuu_ou</a
      >
    </p>
  </div>

  <div v-if="studentId === '64130500087'" class="text-[2em] ml-10">
    <p class="font-['Baloo']">
      Name: <span class="text-emerald-400">Surachet Pichaiwattanaporn</span>
    </p>
    <p class="font-['Baloo']">
      Nickname: <span class="text-emerald-400">Lemon</span>
    </p>
    <p class="font-['Baloo']">
      Date of Birth: <span class="text-emerald-400">6 March 2003</span>
    </p>
    <p class="font-['Baloo']">
      Instagram:
      <a
        href="https://www.instagram.com/l.lemon14/"
        target="_blank"
        class="text-emerald-400 hover:text-pink-200 p-1 rounded-md"
        >l.lemon14</a
      >
    </p>
  </div>

  <div v-if="studentId === '64130500111'" class="text-[2em] ml-10">
    <p class="font-['Baloo']">
      Name: <span class="text-purple-700">Supakorn Chat-anothai</span>
    </p>
    <p class="font-['Baloo']">
      Nickname: <span class="text-purple-700">James</span>
    </p>
    <p class="font-['Baloo']">
      Date of Birth: <span class="text-purple-700">28 November 2002</span>
    </p>
    <p class="font-['Baloo']">
      Instagram:
      <a
        href="https://www.instagram.com/jmsz_/"
        target="_blank"
        class="text-purple-700 hover:text-pink-200 p-1 rounded-md"
        >jmsz_</a
      >
    </p>
  </div>

  <div v-if="studentId === '64130500122'" class="text-[2em] ml-10">
    <p class="font-['Baloo']">
      Name: <span class="text-yellow-500">Wachirawit Jitphitthayakul</span>
    </p>
    <p class="font-['Baloo']">
      Nickname: <span class="text-yellow-500">Por</span>
    </p>
    <p class="font-['Baloo']">
      Date of Birth: <span class="text-yellow-500">24 June 2003</span>
    </p>
    <p class="font-['Baloo']">
      Instagram:
      <a
        href="https://instagram.com/wachipor?igshid=YmMyMTA2M2Y="
        target="_blank"
        class=" text-yellow-500 hover:text-pink-200 p-1 rounded-md"
        >wachipor</a
      >
    </p>
  </div>
</template>

<style scoped></style>
