import Vue from "vue";
import Vuex from "vuex";
import { INIT, LOADED } from "./status.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sidebarStatus: false,
    currentActivity: { value: null, status: INIT },
    currentFilter: null,
    cardsData: { value: null, status: INIT },
  },
  mutations: {
    CHANGE_SIDEBAR_STATUS(state) {
      state.sidebarStatus = !state.sidebarStatus;
    },
    CHANGE_CURRENT_ACTIVITY(state, payload) {
      state.currentActivity = { value: payload, status: LOADED };
    },
    CHANGE_CURRENT_FILTER(state, payload) {
      state.currentFilter = payload;
    },
    CHANGE_CARDS_DATA(state, payload) {
      state.cardsData = { value: payload, status: LOADED };
    },
  },
  actions: {},
  modules: {},
});
