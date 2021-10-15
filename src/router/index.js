import { createRouter, createWebHistory } from "vue-router";
import Navigation from "@/views/TheNavigation";
import Libro from "@/views/Libro";
import books from "@/backend/books";

const routes = [
  {
    path: "/",
    component: Navigation,
    meta: {
      title: "Home Page"
    }
  },
  {
    path: "/libri/:slug",
    component: Libro,
    meta: {
      title: books.find(
        (book) =>
          book.title === book.slug.replace(/(\bw+)/gi, (p1) => p1.toUpperCase())
      )
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
