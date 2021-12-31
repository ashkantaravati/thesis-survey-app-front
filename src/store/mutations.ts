import { State } from "@/store/state";
import {
  GeneralSurvey,
  OrganizationInfo,
  Team,
  TeamWithOrganizationInfo,
  ThesisSurvey,
} from "@/models";
import {
  LikertScaleQuestion,
  MinMaxQuestion,
  MultiResponseLikertScaleQuestion,
} from "@/core/models";
import { OrganizationGeneralInfo } from "@/models/OrganizationInfo";
import Stats from "@/models/Stats";
import { MutationTree } from "vuex";

const mutations: MutationTree<State> = {
  // survey mutations:
  setTeamInfo(state: State, teamInfoObject: TeamWithOrganizationInfo) {
    // TODO should not use Dto directly
    state.survey.activeTeam = teamInfoObject;
  },

  setGeneralSurveyResponse(state: State, generalSurveyResponse: GeneralSurvey) {
    state.survey.generalSurvey = generalSurveyResponse;
  },
  setOverconfidenceSurveyQuestionResponse(
    state: State,
    payload: MinMaxQuestion
  ) {
    const question = state.survey.overconfidenceSurvey.find(
      (q) => q.index === payload.index
    ) as MinMaxQuestion;
    Object.assign(question, payload);
  },
  setTeamCoordinationSurveyResponse(
    state: State,
    payload: LikertScaleQuestion
  ) {
    const question = state.survey.teamCoordinationSurvey.find(
      (q) => q.index === payload.index
    ) as LikertScaleQuestion;
    Object.assign(question, payload);
  },
  setTeamEffectivenessSurveyResponse(
    state: State,
    payload: LikertScaleQuestion
  ) {
    const question = state.survey.teamEffectivenessSurvey.find(
      (q) => q.index === payload.index
    ) as LikertScaleQuestion;
    Object.assign(question, payload);
  },

  setVoiceSurveyResponse(
    state: State,
    payload: MultiResponseLikertScaleQuestion
  ) {
    const question = state.survey.voiceSurvey.find(
      (q) => q.index === payload.index
    ) as LikertScaleQuestion;
    Object.assign(question, payload);
  },
  // end of survey mutations
  // organization info mutations:
  replaceWithCreatedOrganization(
    state: State,
    updateOrganizationInfo: OrganizationInfo
  ) {
    state.registrationInfo = updateOrganizationInfo;
  },
  updateGeneralInfo(state: State, updatedGeneralInfo: OrganizationGeneralInfo) {
    state.registrationInfo.generalInfo = updatedGeneralInfo;
  },
  addTeam(state: State) {
    const teamCount = state.registrationInfo.teams.length;
    state.registrationInfo.teams.push({
      name: `تیم ${teamCount + 1}`, //TODO set a dynamic name for each team we create
      link: "",
      size: 3,
    });
  },
  removeTeam(state: State, team: Team) {
    // TODO: adjust team names to be unique and in accordance with the team index
    if (state.registrationInfo.teams.length === 1) {
      // TODO alert user that they can't just remove the last team
      return;
    }
    state.registrationInfo.teams.splice(
      state.registrationInfo.teams.indexOf(team),
      1
    );
  },

  // end of organization info mutations
  setLoading(state: State, loading: boolean) {
    state.loading = loading;
  },
  setProgress(state: State, newStepIndex: number) {
    if (newStepIndex < state.progress) {
      return;
    }
    if (Math.abs(newStepIndex - state.progress) > 1) {
      return;
    }
    state.progress = newStepIndex;
  },
  setStats(state: State, stats: Stats) {
    state.stats = stats;
  },
  setFeedback(state: State, feedback: string) {
    state.survey.feedback = feedback;
  },
  setTemp(state: State, value: any) {
    state.temp = value;
  },
  clearFormStates(state: State) {
    state.registrationInfo = new OrganizationInfo();
    state.survey = new ThesisSurvey();
  },
};

export default mutations;
