<template>
  <div>
    <h1>Read Messages</h1>
    <ul>
      <li v-for="(message, index) in messages" :key="index">{{ message }}</li>
    </ul>
	<p><nuxt-link to="/message/add">Go to Add Message</nuxt-link></p>
    <p><nuxt-link to="/">Back to Index</nuxt-link></p>
  </div>
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
