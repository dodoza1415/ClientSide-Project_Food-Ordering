<script setup>
import { getReviews } from "../composable/getReviews";
import { ref, onMounted } from "vue";
import WriteEditReviews from "./WriteEditReviews.vue";
const reviews = ref([]);
onMounted(async () => {
  reviews.value = await getReviews();
  // console.log(reviews.value);
});

const currentComponent = ref("Review");
const changeComponent = (component) => {
  currentComponent.value = component;
  //   console.log(currentComponent.value)
};

const addReview = async (newReview) => {
  // console.log(newReview)
  try {
    const res = await fetch("http://localhost:5001/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    });
    if (res.status === 201) {
      console.log("added sucessfully");
      const addReview = await res.json();
      reviews.value.push(addReview);
      changeComponent("Review");
    } else throw new Error("cannot add");
  } catch (error) {
    console.log(error);
  }
};

const editReview = ref(undefined);
const editMode = (reviews) => {
  currentComponent.value = "Write";
  editReview.value = reviews;
};

const modifyReview = async (updateReview) => {
  // console.log(updateReview)
  try {
    const res = await fetch(
      `http://localhost:5001/reviews/${updateReview.id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateReview),
      }
    );
    if (res.status === 200) {
      console.log('edit sucessfully')
      reviews.value = reviews.value.map((r) => {
        if (r.id === updateReview.id) {
          r.topic = updateReview.topic;
          r.description = updateReview.description;
          editReview.value = undefined
          changeComponent("Review");
        }
        return r;
      });
    }else throw new Error('cannot edit')
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="flex flex-row ml-7 mt-10 gap-3">
    <button class="btn btn-sm" @click="changeComponent('Review')">
      Review List
    </button>
    <button class="btn btn-sm" @click="changeComponent('Write')">
      Write Review
    </button>
  </div>
  <div v-if="currentComponent === 'Review'">
    <div class="w-full">
      <div
        v-for="review in reviews"
        :key="review.id"
        class="flex flex-col m-10 border border-black rounded-md p-3 w-[45em] h-fit "
      >
        <h1 class="font-['Baloo'] text-xl">
          <span>{{ review.topic }}</span>
        </h1>
        <p class="h-[10em] overflow-scroll">{{ review.description }}</p>
        <div class="flex justify-end">
          <button class="btn btn-sm w-[3em]" @click="editMode(review)">
            Edit
          </button>
        </div>
      </div>
    </div>
  </div>
  <WriteEditReviews
    v-if="currentComponent === 'Write'"
    @add="addReview"
    :reviews="editReview"
    @edit="modifyReview"
  />
</template>

<style scoped></style>
