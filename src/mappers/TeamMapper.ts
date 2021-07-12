import { TeamSchema } from "@/api/contracts/schema";
import { ITwoWayMapper } from "@/core";
import { Team } from "@/models";
import TeamMemberMapper from "./TeamMemberMapper";

export default class TeamMapper implements ITwoWayMapper {
  private _memberMapper: TeamMemberMapper;
  /**
   *
   */
  constructor() {
    this._memberMapper = new TeamMemberMapper();
  }
  createDtoFromModel(_model: Team): TeamSchema {
    return {
      name: _model.name,
      members: _model.members.map((member) =>
        this._memberMapper.createDtoFromModel(member)
      ),
    };
  }
  createModelFromDto(_dto: TeamSchema): Team {
    return {
      id: _dto.id as string,
      name: _dto.name as string,
      members: _dto.members.map((member) =>
        this._memberMapper.createModelFromDto(member)
      ),
      // link: _dto.link,
      link: generateUrlToTeamSurvey(_dto.id as string),
    };
  }
}
function generateUrlToTeamSurvey(teamId: string) {
  return `${window.location.origin}/participate/${teamId}`;
}
