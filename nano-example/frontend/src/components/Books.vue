<template>
  <div id="app">
    <v-container>
      <v-row
        ><h1>
          {{ book.title }} <span style="color: gray">{{ book.subtitle }}</span>
        </h1>
      </v-row>
      <v-row>
        <v-img :src="book.cover" max-height="250" contain></v-img>
      </v-row>
      <v-row>
        <h3>{{ book.author }} {{ book.translator }} {{ book.publisher }}</h3>
        <p>{{ book.page }} {{ book.price }} {{ book.ISBN }}</p>
        <p>{{ book.info }}</p>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Books",
  data() {
    return { book: [] };
  },
  mounted() {
    const id = this.$route.params.bookId;
    axios
      .get(`/api/books/${id}`)
      .then((res) => {
        console.log(res);
        this.book = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>