import { createRouter, createWebHistory } from "vue-router";
import AboutUs from "../views/AboutUs.vue";
import Members from "../views/Members.vue";
import Member from "../views/Member.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/aboutus",
      name: "AboutUs",
      component: AboutUs,
    },
    {
      path: "/members",
      name: "Members",
      component: Members,
    },
    {
      path: "/member/:stdId",
      name: "Member",
      component: Member,
    },
  ],
  linkExactActiveClass: "text-pink-500",
});

export default router;
