<template>
  <div id="navigation" v-for="book in books" :key="book.id">
    <h3>{{ book.title }}</h3>
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