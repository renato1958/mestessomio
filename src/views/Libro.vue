<template>
  <h2>{{ book.title }}</h2>
  <h3>Autore: {{ book.author }}</h3>
  <h3>Nazione: {{ book.country }}</h3>
  <router-link to="/">
    <button>Torna alla Home Page</button>
  </router-link>
</template>

<script>
import books from "@/backend/books";
export default {
  name: "Libro",
  computed: {
    book() {
      return books.find((book) => book.slug === this.$route.params.slug);
    },
  },
};
</script>

