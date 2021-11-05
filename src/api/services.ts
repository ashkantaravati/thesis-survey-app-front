import axios from "@/api/gateway";
import {
  OrganizationRegistrationDto,
  StatsDto,
  SurveyResponseDto,
  TeamInfoDto,
} from "./contracts";

function getTeamInfo(teamId: string) {
  return axios.get<TeamInfoDto>(`/teams/${teamId}`);
}

function getStats() {
  return axios.get<StatsDto>("/stats");
}

function submitOrganizationInfo(payload: OrganizationRegistrationDto) {
  return axios.post<OrganizationRegistrationDto>("/organizations/", payload);
}

function submitParticipantResponse(
  participantId: string,
  payload: SurveyResponseDto
) {
  return axios.patch<SurveyResponseDto>(`/responses/${participantId}`, payload);
}

export {
  getTeamInfo,
  submitOrganizationInfo,
  submitParticipantResponse,
  getStats,
};
