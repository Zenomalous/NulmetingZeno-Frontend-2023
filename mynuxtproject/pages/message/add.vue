<template lang="pug">
  div
    h1 Add Message
    p This page uses Pug
    input(v-model="newMessage" placeholder="Type your message here")
    button(@click="addMessage") Add
    p
      nuxt-link(to="/") Back to Index
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
