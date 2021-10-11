<template>
  <h1>Rassegna di libri</h1>
  <div id="navigation" v-for="book in books" :key="book.id">
    <router-link :to="`/libri/${book.url}`">
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