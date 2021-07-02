import http from "@/api/gateway";
import {
  OrganizationRegistrationDto,
  SurveyResponseDto,
  TeamInfoDto,
} from "./contracts";

function getTeamInfo(teamId: string) {
  return http.get<TeamInfoDto>(`/teams/${teamId}`);
}

function submitOrganizationInfo(payload: OrganizationRegistrationDto) {
  return http.post<OrganizationRegistrationDto>("/organizations", payload);
}

function submitParticipantResponse(
  participantId: string,
  payload: SurveyResponseDto
) {
  return http.put<SurveyResponseDto>(`/responses/${participantId}`, payload);
}

export { getTeamInfo, submitOrganizationInfo, submitParticipantResponse };
