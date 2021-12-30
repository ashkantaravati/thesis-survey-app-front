import { SITE_TITLE } from "@/constants";
import { GetterTree } from "vuex";
import { State } from "@/store/state";

const getters: GetterTree<State, State> = {
  stats: (state) => {
    return state.stats;
  },

  surveyTitle: function () {
    return SITE_TITLE;
  },
};

export default getters;
