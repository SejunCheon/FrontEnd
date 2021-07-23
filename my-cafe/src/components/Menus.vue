<template>
  <div id="app">
    <h3>Menus</h3>
    <h1>{{ menu_name }}</h1>
    <h1>{{ searched_menu }}</h1>
    <ul>
      <li v-for="menu in menus" :key="menu.id">
        <a href="menuAddress">{{ menu.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Menus",
  data() {
    return {
      menus: [
        { id: 1, name: "바나나", price: 1000 },
        { id: 2, name: "자바쿠기", price: 2000 },
        { id: 3, name: "호박고구마", price: 3000 },
      ],
    };
  },
  methods: {
    menuAddress() {
      return "/menus/" + this.menu.id;
    },
  },
  computed: {
    menu_name() {
      const id = this.$route.params.menu_id;
      if (id == "1") {
        return "아이스 아메리카노";
      } else if (id == "2") {
        return "카라멜 마끼야또";
      } else return "";
    },
    searched_menu() {
      const id = this.$route.query.menu_id;
      if (id == 1) {
        return "申し訳ございません";
      } else if (id == 2) {
        return "Do you knwo psy?";
      } else if (id == 3) {
        return "もう一度入力してくだしい";
      } else return "";
    },
  },
};
</script>