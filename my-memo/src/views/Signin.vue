<template>
  <div>
    <h1>Signin</h1>
    <form @submit.prevent="onSubmit(userid, password)">
      <input type="text" v-model="userid" placeholder="User Id" />
      <input type="password" v-model="password" placeholder="Password" />
      <input type="submit" value="Signin" />
    </form>
    <p>
      <i>{{ message }}</i>
    </p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      userid: "",
      password: "",
      message: "",
    };
  },
  methods: {
    onSubmit(userid, password) {
      this.$store
        .dispatch("signin", { userid, password })
        .then(() => {
          this.$router.push("/");
        })
        .catch(() => {
          this.message = "Signin Failed.";
        });
    },
  },
  mounted() {
    const config = {
      headers: { Authorization: this.$store.state.accessToken },
    };
    axios
      .get("/api/memos", config)
      .then((res) => {
        this.memos = res.data;
        console.log(this.memos);
      })
      .catch(() => {
        this.$store.commit("loginFailed");
        this.$router.push("/signin");
      });
  },
};
</script>