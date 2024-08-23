<template>
  <div>
    <h1>Count Page</h1>
    <p> <Counter/> </p>
    <p> <nuxt-link to="/">Go to Index Page</nuxt-link> </p>
  </div>
</template>

<script>
import Counter from '~/components/Counter.vue';

export default {
  components: {
    Counter
  },
  name: 'CountPage'
};
</script>
