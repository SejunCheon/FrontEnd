<template>
  <div id="app">
    <h1>상세메뉴</h1>
    <ul>
      <li v-for="menu in menus" :key="menu.id">
        <a href="'/menu/' + menu.id">{{ menu.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "menuItem",
  data() {
    return {
      menus: [
        { id: 1, name: "바나나", price: 1000 },
        { id: 1, name: "자바쿠기", price: 2000 },
        { id: 1, name: "호박고구마", price: 3000 },
      ],
    };
  },
  computed: {
    // menu_details() {
    //   const id = this.$route.params.menu_id;
    //   if (id == 1) {
    //     return this.detail.forEach((i) => document.write(i, " "));
    //   } else {
    //     return "";
    //   }
    // },
  },
};
</script>