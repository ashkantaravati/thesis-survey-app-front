
import { createStore } from "vuex";


import { state } from "./state";
import getters from "@/store/getters";
import actions from "@/store/actions";
import mutations from "@/store/mutations";


const store = createStore({
  state,
  getters,
  actions,
  mutations
});

export default store;
