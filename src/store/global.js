export default {
  state: {
    connections: JSON.parse(localStorage.getItem("connections")) || [],
    currentPage: 1,
  },
  actions: {
    upVote({ state, commit }, { id, point }) {
      let connections = state.connections;
      connections.find((val) => val.id == id).point = point + 1;
      connections.find((val) => val.id == id).date = Date.now();
      commit("sortHelper", state.connections);
    },
    downVote({ state, commit }, { id, point }) {
      let connections = state.connections;
      connections.find((val) => val.id == id).point = point - 1;
      connections.find((val) => val.id == id).date = Date.now();
      commit("sortHelper", state.connections);
    },
    addConnetion({ commit }, { ...newConnection }) {
      console.log(newConnection);
      commit("pushStateForNewConnection", newConnection);
    },
    removeConnection(context, id) {
      let connections = context.state.connections;

      let findIndex = connections.findIndex((val) => val.id == id);

      connections.splice(findIndex, 1);
      console.log(connections);
      localStorage.setItem("connections", JSON.stringify(connections));
    },
  },
  mutations: {
    pushStateForNewConnection(state, payload) {
      let connections = state.connections;
      connections.unshift(payload);
      localStorage.setItem("connections", JSON.stringify(connections));
    },
    sortHelper(state, payload) {
      let connections = payload;
      console.log(connections);
      connections.sort((a, b) => {
        if (a.point === b.point) {
          return b.date - a.date;
        }
        return b.point - a.point;
      });
      localStorage.setItem("connections", JSON.stringify(connections));
      this.connections = connections;
    },
  },
  getters: {},
  namespaced: true,
};
