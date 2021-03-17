<template>
  <div>
    <div id="header"></div>

    <div id="main-container">
      <h2>Todos</h2>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Search from "./components/Search";
import Todos from "./components/Todos";
import TodoAdd from "./components/TodoAdd";

export default {
  name: "App",
  components: {
    Search,
    Todos,
    TodoAdd,
  },
  data() {
    return {
      todos: [
        {
          id: 0,
          title: "comprar la cena",
          completed: false,
        },
        {
          id: 1,
          title: "sacar a pasear al perro",
          completed: false,
        },
        {
          id: 0,
          title: "ir a buscar al ropa",
          completed: false,
        },
      ],
      copyTodos: [],
    };
  },
  created() {
    this.copyTodos = [...this.todos];
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Arial, Helvetica, sans-serif;
  font-size: 1.5em;
  padding: 0;
  margin: 0;
}

#main-container{
  border: solid 1px #ccc;
  width: 600px;
  margin: 100px auto;
}

#header {
  background: #333;
  padding: 10px;;
}

h2 {
  padding: 0 10px;
}
</style>
