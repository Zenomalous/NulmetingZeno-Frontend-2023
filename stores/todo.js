// store/todo.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [],  // The list of todo items
  }),

  actions: {
    async fetchTodo() {
      try {
        const response = await axios.get('https://86a4h9y007.execute-api.eu-west-1.amazonaws.com/development/nulmeting/todo');
        const newTodo = response.data;

        // Check if the ID already exists
        if (this.todos.some(todo => todo.id === newTodo.id)) {
          // If the todo already exists, call the API again to get a new one
          this.fetchTodo();
        } else {
          // Add the new todo to the state
          this.todos.push(newTodo);
        }
      } catch (error) {
        console.error("Error fetching todo:", error);
      }
    }
  }
});
