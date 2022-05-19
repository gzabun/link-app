import store from "@/store";

import { default as globalStore } from "../src/store/global";
import { flushPromises } from "@vue/test-utils";

describe("Global Module", () => {
  describe("state", () => {
    it("currentPage state", async () => {
      const currentPage = 1;
      const stateCurrentPage = globalStore.state.currentPage;
      expect(stateCurrentPage).toEqual(currentPage);
    });

    it("currentPage state", async () => {
      const connections = [];
      const stateConnections = globalStore.state.connections;
      expect(stateConnections).toEqual(connections);
    });
  });

  describe("actions", () => {
    it("addConnetion method", async () => {
      const commit = jest.fn();
      store.state.globalStore.connections = [
        {
          name: "helorobo",
          url: "helllo robo",
          point: 0,
          id: 8959595,
          date: 1652819703442,
        },
      ];

      let newConnection = {
        name: "HeloScope",
        url: "Hello Scope",
        point: 0,
        id: 8959595,
        date: 1652819703442,
      };
      await globalStore.actions.addConnetion({ commit }, newConnection);
      await flushPromises();
    });
  });
  describe("mutations", () => {
    it("sortHelper method", async () => {
      store.state.globalStore.connections = [
        {
          name: "helorobo",
          url: "helllo robo",
          point: 0,
          id: 8959595,
          date: 1652819703442,
        },
        {
          name: "helorobo2",
          url: "helllo robo",
          point: 2,
          id: 8959595,
          date: 1652819703442,
        },
      ];
      globalStore.mutations.sortHelper()
    });
  });
});
