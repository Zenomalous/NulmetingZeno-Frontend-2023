let axios = require('axios');

axios.get('https://inwerk-files.s3-eu-west-1.amazonaws.com/opdracht3.json')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error fetching the JSON file:', error);
    });
