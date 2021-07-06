import { TeamInfoDto } from "@/api/contracts";
import {
  getTeamInfo,
  submitOrganizationInfo,
  submitParticipantResponse,
} from "@/api/services";
import { createStore } from "vuex";
import {
  OrganizationRegistrationMapper,
  SurveyResponseMapper,
} from "@/mappers";
import { OrganizationInfo, Team, ThesisSurvey } from "@/models";

import { state, State } from "./state";
import { OrganizationGeneralInfo } from "@/models/OrganizationInfo";

const store = createStore({
  state: state,
  actions: {
    fetchTeamInfo({ commit }, teamId: string) {
      getTeamInfo(teamId)
        .then((res) => {
          const teamInfo = res.data;
          commit("setTeamInfo", teamInfo);
        })
        .catch((err) => console.log(err));
    },
    registerOrganization({ commit, state }) {
      const mapper = new OrganizationRegistrationMapper();
      const organizationInfoDto = mapper.createDtoFromModel(
        state.registrationInfo
      );

      submitOrganizationInfo(organizationInfoDto).then((res) => {
        const createdOrganization = res.data;
        const updatedRegistrationInfo = mapper.createModelFromDto(
          createdOrganization
        );
        commit("updateRegistrationInfo", updatedRegistrationInfo);
      });
    },
    submitResponse({ commit, state }, participantId) {
      const mapper = new SurveyResponseMapper();
      const dto = mapper.createDtoFromModel(state.survey);
      submitParticipantResponse(participantId, dto)
        .then()
        .catch((err) => console.log(err));
      // TODO map response back to model
    },
  },
  mutations: {
    setTeamInfo(state: State, teamInfoObject: TeamInfoDto) {
      // TODO should not use Dto directly
      state.teamInfo = teamInfoObject;
    },
    updateGeneralInfo(
      state: State,
      updatedGeneralInfo: OrganizationGeneralInfo
    ) {
      state.registrationInfo.generalInfo = updatedGeneralInfo;
    },
    addTeam(state: State) {
      state.registrationInfo.teams.push({
        name: "team",
        members: [{ name: "" }, { name: "" }],
        link: "",
      });
    },
    removeTeam(state: State, team: Team) {
      state.registrationInfo.teams.splice(
        state.registrationInfo.teams.indexOf(team),
        1
      );
    },
    addTeamMember(state: State, team: Team) {
      // TODO find team then push new member object
      team.members.push({ name: "" });
    },
    removeTeamMember(state: State, { team, member }) {
      // TODO find team then push new member object
      if (team.members.length === 2) return; // at least 2 members required
      team.members.splice(team.members.indexOf(member), 1);
    },
  },
});

export default store;
