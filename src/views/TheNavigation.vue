<template>
  <h1>Rassegna di libri</h1>
  <div id="navigation">
    <router-link
      v-for="book in books"
      :key="book.id"
      :to="`/libri/${book.slug}`"
    >
      <h3>{{ book.title }}</h3>
    </router-link>
  </div>
</template>

<script>
import books from "@/backend/books";
export default {
  name: "Navigation",
  data() {
    return {
      books,
    };
  },
};
</script>