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
    registerOrganization({ commit, state }, onSuccess: () => void) {
      const mapper = new OrganizationRegistrationMapper();
      const organizationInfoDto = mapper.createDtoFromModel(
        state.registrationInfo
      );

      submitOrganizationInfo(organizationInfoDto)
        .then((res) => {
          const createdOrganization = res.data;
          const updatedRegistrationInfo = mapper.createModelFromDto(
            createdOrganization
          );
          commit("replaceWithCreatedOrganization", updatedRegistrationInfo);
          onSuccess();
        })
        .catch((err) => {
          console.error(err);
          // onError();
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
    replaceWithCreatedOrganization(
      state: State,
      updateOrganizationInfo: OrganizationInfo
    ) {
      state.registrationInfo = updateOrganizationInfo;
    },
    updateGeneralInfo(
      state: State,
      updatedGeneralInfo: OrganizationGeneralInfo
    ) {
      state.registrationInfo.generalInfo = updatedGeneralInfo;
    },
    addTeam(state: State) {
      state.registrationInfo.teams.push({
        name: "team", //TODO set a dynamic name for each team we create
        members: [{ name: "" }, { name: "" }],
        link: "",
      });
    },
    removeTeam(state: State, team: Team) {
      if (state.registrationInfo.teams.length === 1) {
        // TODO alert user that they can't just remove the last team
        return;
      }
      state.registrationInfo.teams.splice(
        state.registrationInfo.teams.indexOf(team),
        1
      );
    },
    addAMemberToTeam(state: State, targetTeam: Team) {
      const team = state.registrationInfo.teams.find(
        (team) => team === targetTeam
      );
      if (team == undefined) {
        console.error("target team does not exist in state");
        return;
      }
      team.members.push({ name: "" });
    },
    removeMemberFromTeam(state: State, { team, member }) {
      if (team.members.length === 2) return; // at least 2 members required
      const targetTeam = state.registrationInfo.teams.find((t) => t === team);
      if (targetTeam === undefined) {
        console.error("target team does not exist");
        return;
      }
      targetTeam.members.splice(team.members.indexOf(member), 1);
    },
  },
});

export default store;
