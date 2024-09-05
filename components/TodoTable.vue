<template>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="todo in todos" :key="todo.id">
        <td>{{ todo.id }}</td>
        <td>{{ todo.description }}</td>
        <td>{{ formatDate(todo.dueDateTime) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { useTodoStore } from '../stores/todo';

// Access the Pinia store
const todoStore = useTodoStore();
const todos = todoStore.todos;

// Function to format the date properly
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString();
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
  border: 1px solid #ddd;
}

thead {
  background-color: #f5f5f5;
}
</style>
