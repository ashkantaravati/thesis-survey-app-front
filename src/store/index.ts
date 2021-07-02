import { TeamInfoDto } from "@/api/contracts";
import { getTeamInfo } from "@/api/services";
import { createStore } from "vuex";

import { state, State } from "./state";

const store = createStore({
  state() {
    return state;
  },
  actions: {
    fetchTeamInfo({ commit }, teamId: string) {
      getTeamInfo(teamId)
        .then((res) => {
          const teamInfo = res.data;
          commit("setTeamInfo", teamInfo);
        })
        .catch((err) => console.log(err));
    },
  },
  mutations: {
    setTeamInfo(state: State, teamInfoObject: TeamInfoDto) {
      state.teamInfo = teamInfoObject;
    },
    // updateGeneralSurveyResponse(
    //   state: State,
    //   modifiedGeneralSurveyResponse: GeneralSurveyResponse
    // ) {
    //   state.generalSurveyResponse = modifiedGeneralSurveyResponse;
    // },
    // updateOverconfidenceSurveyResponse(
    //   state: State,
    //   modifiedOverconfidenceSurveyResponse: OverconfidenceSurveyResponse
    // ) {
    //   state.overconfidenceSurveyResponse = modifiedOverconfidenceSurveyResponse;
    // },
    // updateTeamCoordinationSurveyResponse(
    //   state: State,
    //   modifiedTeamCoordinationSurveyResponse: TeamCoordinationSurveyResponse
    // ) {
    //   state.teamCoordinationSurveyResponse = modifiedTeamCoordinationSurveyResponse;
    // },
  },
});

export default store;
