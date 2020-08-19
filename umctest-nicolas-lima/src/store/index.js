import Vue from "vue";
import Vuex from "vuex";
import ENUM from "./status.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sidebarStatus: false,
    currentActivity: { value: null, status: ENUM.INIT },
    currentFilter: null,
    cardsData: { value: {}, status: ENUM.INIT },
  },
  mutations: {
    CHANGE_SIDEBAR_STATUS(state) {
      state.sidebarStatus = !state.sidebarStatus;
    },
    CHANGE_CURRENT_ACTIVITY(state, payload) {
      state.currentActivity = { value: payload, status: ENUM.LOADED };
    },
    CHANGE_CURRENT_FILTER(state, payload) {
      state.currentFilter = payload;
    },
    CHANGE_CARDS_DATA(state, payload) {
      state.cardsData = { value: payload, status: ENUM.LOADED };
    },
  },
  actions: {
    changeCurrentActivity(context, payload) {
      context.state.currentActivity.status = ENUM.LOADING;
      context.commit("CHANGE_CURRENT_ACTIVITY", payload);
    },
    changeCardsData(context, payload) {
      context.state.cardsData.status = ENUM.LOADING;
      context.commit("CHANGE_CARDS_DATA", payload);
    },
  },
  modules: {},
});
