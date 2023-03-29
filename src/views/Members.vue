<script setup>
import { ref } from "vue";
import { getMembers } from "../composable/getMembers";
import { useRouter } from "vue-router";

const members = ref(getMembers());
// console.log(members.value)

const router = useRouter();
const gotoMember = (stdId) => {
  router.push({ name: "Member", params: { stdId: stdId } });
};
</script>

<template>
  <div class="flex flex-col gap-y-5 ml-10">
    <div
      v-for="member in members"
      :key="member.stdId"
      class="text-2xl font-['Alkatra']"
    >
      <button
        class="hover:bg-green-200 p-3 rounded-md"
        @click="gotoMember(member.stdId)"
      >
        {{ member.nickname }}
      </button>
    </div>
  </div>
</template>

<style scoped></style>
