import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sidebarStatus: false,
    currentActivity: null,
  },
  mutations: {
    CHANGE_SIDEBAR_STATUS(state) {
      state.sidebarStatus = !state.sidebarStatus;
    },
    CHANGE_CURRENT_ACTIVITY(state, payload) {
      state.currentActivity = payload;
    },
  },
  actions: {},
  modules: {},
});
