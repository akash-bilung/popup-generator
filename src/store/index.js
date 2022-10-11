import { createStore } from "vuex";

import state from "./state";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

import popupModule from "./modules/popup";

export default createStore({
  state,
  getters,
  actions,
  mutations,
  modules: {
    popup: popupModule,
  },
});
