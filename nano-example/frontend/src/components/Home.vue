<template>
  <div id="app">
    <v-container fluid>
      <v-row>
        <v-col cols="4" v-for="b in books" :key="b.bookId">
          <v-card>
            <v-img :src="b.cover" max-height="250" contain></v-img>
            <router-link :to="'/books/' + b.bookId">{{ b.title }}</router-link>
            <p>{{ b.author }}</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return { books: [] };
  },
  mounted() {
    axios
      .get("/api/books")
      .then((res) => {
        console.log(res);
        this.books = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>