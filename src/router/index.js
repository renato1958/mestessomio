import { createRouter, createWebHistory } from "vue-router";
import Navigation from "@/views/TheNavigation";
import Libro from "@/views/Libro";

const routes = [
  {
    path: "/",
    component: Navigation
  },
  {
    path: "/libri/:url",
    component: Libro
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
