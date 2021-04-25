<script>
  import { todos } from "./stores.js";

  import AddTodo from "./components/AddTodo";
  import Todo from "./components/Todo";
  import Toast from "./components/Toast";

  if (localStorage.getItem("todos")) {
    todos.local(JSON.parse(localStorage.getItem("todos")));
  }

  $: localStorage.setItem("todos", JSON.stringify($todos));
</script>

<div class="container">
  <h1 class="display-5 my-3">CRUD</h1>
  <AddTodo />
  {#each $todos as item}
    <Todo {item} />
  {/each}

  <Toast />
</div>
