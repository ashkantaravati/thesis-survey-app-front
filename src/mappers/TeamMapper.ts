import { TeamSchema } from "@/contracts/schema";
import { ITwoWayMapper } from "@/core";
import { Team } from "@/models";

export default class TeamMapper implements ITwoWayMapper {
  /**
   *
   */
  constructor() {}
  createDtoFromModel(_model: Team): TeamSchema {
    return {
      name: _model.name,
      size: _model.size,
      id: _model.id as string,
    };
  }
  createModelFromDto(_dto: TeamSchema): Team {
    return {
      id: _dto.id as string,
      name: _dto.name as string,
      size: _dto.size as number,
      // link: _dto.link,
      link: generateUrlToTeamSurvey(_dto.id as string),
    };
  }
}
export function generateUrlToTeamSurvey(teamId: string) {
  return `${window.location.origin}/p/${teamId}`;
}
