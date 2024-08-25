<template>
  <div>
    <h1>Add Message</h1>
    <input v-model="newMessage" placeholder="Type your message here" />
    <button @click="addMessage">Add</button>
    <p><nuxt-link to="/">Back to Index</nuxt-link></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newMessage: ''
    };
  },
  methods: {
    addMessage() {
      if (this.newMessage.trim() !== '') {
        this.$store.dispatch('addMessage', this.newMessage);
        this.newMessage = '';
        this.$router.push('/message/read');
      }
    }
  }
};
</script>
