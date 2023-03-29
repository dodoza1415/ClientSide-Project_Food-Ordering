<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  reviews: {
    type: Object,
    require: true,
  },
  
});

const updateReview = ref({});
onMounted(() => {
  if (props.reviews === undefined) {
    updateReview.value = {
      topic: "",
      description: "",
    };
  } else if (props.reviews !== undefined) {
    updateReview.value = props.reviews;
    // console.log(updateReview.value)
  }
});

defineEmits(["add", "edit"]);
</script>

<template>
  <div class="flex flex-col m-5">
    <span class="font-bold text-xl">Topic: </span
    ><input
      type="text"
      placeholder="Your Topic"
      class="input input-bordered w-max"
      v-model="updateReview.topic"
    /><br />
    <span class="font-bold text-xl">Description: </span
    ><textarea
      placeholder="write description..."
      class="textarea textarea-bordered w-[25em]"
      v-model="updateReview.description"
    ></textarea>
    <button
      class="btn btn-success w-[15em] mt-4"
      @click="$emit('edit', updateReview)"
      v-if="updateReview.id"
    >
      Edit
    </button>
    <button
      class="btn btn-success w-[15em] mt-4"
      @click="$emit('add', updateReview)"
      v-else
    >
      Write Your Review
    </button>
  </div>
</template>

<style scoped></style>
