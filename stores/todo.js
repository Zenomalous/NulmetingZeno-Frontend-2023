import { defineStore } from 'pinia';
import axios from 'axios';
import { useRuntimeConfig } from '#app';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [] 
  }),

  actions: {
    async fetchTodo() {
      const config = useRuntimeConfig();
      const apiKey = config.public.apiKey;

      try {
        const response = await axios.get(
          'https://86a4h9y007.execute-api.eu-west-1.amazonaws.com/development/nulmeting/todo',
          {
            headers: {
              'x-api-key': apiKey
            }
          }
        );
        
        const newTodo = response.data.todo;

        if (this.todos.some(todo => todo.id === newTodo.id)) {
          this.fetchTodo();
        } else {
          this.todos.push(newTodo);
        }
      } catch (error) {
        console.error('Error fetching todo:', error);
      }
    }
  }
});
