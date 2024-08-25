export const state = () => ({
  messages: []
});

export const mutations = {
  ADD_MESSAGE(state, message) {
    state.messages.push(message);
  }
};

export const actions = {
  addMessage({ commit }, message) {
    commit('ADD_MESSAGE', message);
  }
};

export const getters = {
  getMessages(state) {
    return state.messages;
  }
};
