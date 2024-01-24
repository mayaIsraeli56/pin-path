// modules/navigation
export default {
    namespaced: true,
    state: {
        isPathOpen: false
    },
  
    mutations: {
        togglePath(state ) {
            state.isPathOpen = !state.isPathOpen
        },

    },

    actions: {
        togglePath({ commit }) {
            commit("togglePath");
        },
    },
  };
  