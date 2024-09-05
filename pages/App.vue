<template>
  <div class="container">
    <NuxtLink to="/" class="index-link">Index</NuxtLink>
    <button @click="addTodo" class="todo-button">Add Todo</button>
    <TodoTable />
  </div>
</template>

<script setup>
import { useTodoStore } from '../stores/todo';

const todoStore = useTodoStore();

const addTodo = () => {
  todoStore.fetchTodo();
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  padding-top: 10vh;
}

.index-link {
  font-size: 24px;
  text-decoration: none;
  color: #3498db;
  margin-bottom: 20px;
}

.todo-button {
  font-size: 18px;
  padding: 10px 20px;
  background-color: #2ecc71;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 30px;
}

.todo-button:hover {
  background-color: #27ae60;
}

table {
  width: 80%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  padding: 10px;
  text-align: center;
  border: 1px solid #ddd;
}

thead {
  background-color: #f5f5f5;
}
</style>
