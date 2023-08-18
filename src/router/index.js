import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Stores from "../views/Stores.vue";
import ShoeModels from "../views/ShoeModels.vue";
import Profile from "../views/Profile.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/inventory", // this will be sign in after
  },
  {
    path: "/inventory",
    name: "Live Inventory",
    component: Home,
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
    path: "/insights",
    name: "Insights",
    component: Stores,
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
