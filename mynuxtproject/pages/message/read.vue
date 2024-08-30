<template lang="pug">
  div
    h1 Read Messages
    p This page uses Pug
    ul
      li(v-for="(message, index) in messages" :key="index") {{ message }}
    p
      nuxt-link(to="/message/add") Go to Add Message
    p
      nuxt-link(to="/") Back to Index
</template>

<script>
export default {
  computed: {
    messages() {
      return this.$store.getters.getMessages;
    }
  }
};
</script>
