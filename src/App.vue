<script setup>
import { ref, onMounted, computed, watch } from "vue";

const todos = ref([]);
const input_content = ref("");

const todos_asc = computed(() =>
  todos.value.sort((a, b) => {
    return b.createdAt - a.createdAt;
  })
);

const addTodos = () => {
  if (input_content.value.trim() === "") {
    return;
  }

  todos.value.push({
    content: input_content.value,
    done: false,
    createdAt: new Date().getTime(),
  });

  input_content.value = "";
};

const removeTodo = (todo) => {
  todos.value = todos.value.filter((t) => t !== todo);
};

watch(
  todos,
  (newVal) => {
    localStorage.setItem("todos", JSON.stringify(newVal));
  },
  { deep: true }
);

onMounted(() => {
  todos.value = JSON.parse(localStorage.getItem("todos"));
});
</script>

<template>
  <section class="create-todo">
    <div class="todocontainer">
      <h3>Use the button to create a To-do list:</h3>
      <div class="new-task">
        <form @submit.prevent="addTodos">
          <input
            class="new-todo"
            type="text"
            placeholder="New Task"
            v-model="input_content"
          />
          <input class="enter-todo" type="submit" value="+ADD" />
          <br />
        </form>
      </div>
    </div>
  </section>

  <section class="todos_list">
    <div class="listcontainer">
      <h4>Your To-do List:</h4>
      <div class="list">
        <div
          v-for="todo in todos_asc"
          :class="`todo-item ${todo.done && 'done'}`"
        >
          <label>
            <input class="checkbox" type="radio" v-model="todo.done" />
          </label>
          <div class="todo-content">
            <input class="todocontent" type="text" v-model="todo.content" />
          </div>
          <div class="action">
            <button class="delete" @click="removeTodo(todo)">delete</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
