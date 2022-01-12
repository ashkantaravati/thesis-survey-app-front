import { SITE_TITLE } from "@/constants";
import { GetterTree } from "vuex";
import { State } from "@/store/state";

const getters: GetterTree<State, State> = {
  stats: (state) => {
    return state.stats;
  },

  surveyProgress(state) {
    const step1 =
      Boolean(state.survey.generalSurvey.age) &&
      Boolean(state.survey.generalSurvey.sex) &&
      Boolean(state.survey.generalSurvey.teamHistory) &&
      Boolean(state.survey.generalSurvey.tenure);

    const step2 = state.survey.overconfidenceSurvey.every(
      ({ response }) => Boolean(response.max) && Boolean(response.min)
    );
    const step3 = state.survey.teamCoordinationSurvey.every(
      ({ response }) => response.value
    );
    const step4 = state.survey.teamEffectivenessSurvey.every(
      (q) => q.response.value
    );
    const step5 = state.survey.voiceSurvey.every((q) => q.response.value);
    const isFinished = step1 && step2 && step3 && step4 && step5;
    return {
      step1,
      step2,
      step3,
      step4,
      step5,
      isFinished,
    };
  },

  surveyTitle: function () {
    return SITE_TITLE;
  },
};

export default getters;
