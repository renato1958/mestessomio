import { createRouter, createWebHistory } from "vue-router";
import Navigation from "@/views/TheNavigation";
import Libro from "@/views/Libro";
import books from "@/backend/books";

const routes = [
  {
    path: "/",
    component: Navigation
  },
  {
    path: "/libri/:slug",
    component: Libro,
    meta: {
      title: books.find((book) => book.title)
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
