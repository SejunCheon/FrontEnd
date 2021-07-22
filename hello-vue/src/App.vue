<template>
  <div id="app">
    <h1>My Todo App!</h1>
    <TodoList></TodoList>
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    TodoList,
  },
};
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

#app {
  max-width: 400px;
  margin: 0 auto;
  line-height: 1.4;
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  -webkit-font-something: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #32485f;
}

h1 {
  text-align: center;
}
</style>

