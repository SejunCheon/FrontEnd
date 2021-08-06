<template>
  <div>
    <h1>Signiup</h1>
    <v-container>
      <v-row>
        <form @submit.prevent="onSignup(name, userid, password)">
          <input type="name" v-model="name" placeholder="Name" />
          <input type="text" v-model="userid" placeholder="User Id" />
          <input type="password" v-model="password" placeholder="Password" />
          <input type="submit" value="Signup" />
        </form>
      </v-row>
    </v-container>
  </div>
</template>



<script>
// import axios from "axios";

export default {
  data() {
    return {
      name: "",
      userid: "",
      password: "",
      users: { name: "", id: "", ps: "" },
    };
  },
  methods: {
    onSignup(name, userid, password) {
      this.name = name;
      this.userid = userid;
      this.password = password;

      //   axios.post('/api/users')
      //   .then((res) => {
      //       this.
      //   })
    },
  },
};
</script>