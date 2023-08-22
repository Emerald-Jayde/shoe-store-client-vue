import { createRouter, createWebHistory } from "vue-router";
import Stores from "../views/Stores.vue";
import ShoeModels from "../views/ShoeModels.vue";
import Sales from "../views/Sales.vue";
import Profile from "../views/Profile.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";
import Inventory from "@/views/Inventory.vue";
import Suggestions from "@/views/Suggestions.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/inventory",
  },
  {
    path: "/inventory",
    name: "Live Inventory",
    component: Inventory,
  },
  {
    path: "/stores",
    name: "Stores",
    component: Stores,
  },
  {
    path: "/shoe-models",
    name: "Shoe Models",
    component: ShoeModels,
  },
  {
    path: "/insights/sales",
    name: "Sales",
    component: Sales,
  },
  {
    path: "/insights/suggestions",
    name: "Suggestions",
    component: Suggestions,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
