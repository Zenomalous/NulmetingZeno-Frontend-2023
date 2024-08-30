import axios from 'axios';

export const state = () => ({
  messages: [],
  echoResponse: null
});

export const mutations = {
  ADD_MESSAGE(state, message) {
    state.messages.push(message);
  },
  setEchoResponse(state, response) {
    state.echoResponse = response;
  }
};

export const actions = {
  addMessage({ commit }, message) {
    commit('ADD_MESSAGE', message);
  },
  async sendEcho({ commit }, payload) {
    try {
      const data = {
        echo: payload
      };
      const response = await axios.post('https://86a4h9y007.execute-api.eu-west-1.amazonaws.com/development/echo', data, {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.apiKey
        }
      });
      commit('setEchoResponse', response.data);
    } 
	catch (error) {
      console.error('API call error:', error.response ? error.response.data : error.message);
    }
  }
};


export const getters = {
  getMessages(state) {
    return state.messages;
  },
  getEchoResponse(state) {
    return state.echoResponse;
  }
};
