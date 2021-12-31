import {
  getStats,
  getTeamInfo,
  submitOrganizationInfo,
  submitParticipantResponse,
} from "@/services";
import {
  OrganizationRegistrationMapper,
  SurveyResponseMapper,
  TeamWithOrganizationInfoMapper,
} from "@/mappers";
import StatsMapper from "@/mappers/StatsMapper";
import { ActionTree } from "vuex";
import { State } from "@/store/state";
import { SimpleProcedure } from "@/store/types";
import { unproxify } from "@/core/helpers";
import { Team } from "@/models";

const actions: ActionTree<State, State> = {
  fetchTeamInfo({ commit, getters }, teamId: string) {
    commit("setLoading", true);
    getTeamInfo(teamId)
      .then((res) => {
        const dto = res.data;
        const mapper = new TeamWithOrganizationInfoMapper();
        const teamInfo = mapper.createModelFromDto(dto);
        commit("setTeamInfo", teamInfo);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        commit("setLoading", false);
      });
  },
  registerOrganization({ commit, state }) {
    const mapper = new OrganizationRegistrationMapper();
    const organizationInfoDto = mapper.createDtoFromModel(
      state.registrationInfo
    );
    commit("setLoading", true);
    return submitOrganizationInfo(organizationInfoDto)
      .then((res) => {
        const createdOrganization = res.data;
        const updatedRegistrationInfo =
          mapper.createModelFromDto(createdOrganization);
        // commit("replaceWithCreatedOrganization", updatedRegistrationInfo);
        const teamsWithLinks: Team[] = updatedRegistrationInfo.teams.map(
          (team) => {
            return {
              id: team.id,
              link: team.link,
              size: team.size,
              name: team.name,
            };
          }
        );
        commit("setTemp", { teams: teamsWithLinks });
        commit("clearFormStates");
        return teamsWithLinks;
      })
      .catch((err) => {
        console.error(err);
        // onError();
      })
      .finally(() => {
        commit("setLoading", false);
      });
  },
  submitResponse(
    { commit, state },
    {
      onSuccess,
      onFailure,
    }: { onSuccess: SimpleProcedure; onFailure: SimpleProcedure }
  ) {
    const mapper = new SurveyResponseMapper();
    const unproxified = unproxify(state.survey);
    const dto = mapper.createDtoFromModel(unproxified);
    commit("setLoading", true);
    return submitParticipantResponse(dto)
      .then((result) => {
        commit("clearFormStates");
        onSuccess();
      })
      .catch((err) => onFailure())
      .finally(() => {
        commit("setLoading", false);
      });
  },
  fetchStats({ commit }) {
    getStats().then((res) => {
      const dto = res.data;
      const mapper = new StatsMapper();
      const model = mapper.createModelFromDto(dto);
      commit("setStats", model);
    });
  },
};

export default actions;
