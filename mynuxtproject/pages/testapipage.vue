<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input v-model="input1" placeholder="Input 1" />
      <input v-model="input2" placeholder="Input 2" />
      <input v-model="input3" placeholder="Input 3" />
      <button type="submit">Submit</button>
    </form>
    <div v-if="echoResponse">
      <h3>API Response:</h3>
      <p>output1: {{ echoResponse.echo.input1 }}</p>
      <p>output2: {{ echoResponse.echo.input2 }}</p>
      <p>output3: {{ echoResponse.echo.input3 }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      input1: '',
      input2: '',
      input3: ''
    };
  },
  computed: {
    ...mapState(['echoResponse'])
  },
  methods: {
    ...mapActions(['sendEcho']),
    handleSubmit() {
      const data = {
        input1: this.input1, // Adjust the keys as needed
        input2: this.input2,
        input3: this.input3
      };
      this.sendEcho(data);
    }
  }
};
</script>
