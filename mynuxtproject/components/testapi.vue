<template>
  <div>
    <button @click="makeApiCall">Make API Call</button>
  </div>
</template>

<script>
const axios = require('axios');

export default {
  methods: {
    makeApiCall() {
      let data = JSON.stringify({
        "echo": {
          "hoi": "doei"
        }
      });

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://86a4h9y007.execute-api.eu-west-1.amazonaws.com/development/echo',
        headers: { 
          'Content-Type': 'application/json', 
          'x-api-key': process.env.apiKey
        },
        data : data
      };

      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }
}
</script>