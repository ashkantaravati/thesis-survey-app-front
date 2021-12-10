import { TeamMemberSchema } from "@/contracts/schema";
import { ITwoWayMapper } from "@/core";
import { TeamMember } from "@/models";

export default class TeamMemberMapper implements ITwoWayMapper {
  createDtoFromModel(_model: TeamMember): TeamMemberSchema {
    return {
      name: _model.name,
      id: _model.id as string,
      has_participated: _model.hasParticipated,
    };
  }
  createModelFromDto(_dto: TeamMemberSchema): TeamMember {
    return {
      name: _dto.name,
      id: _dto.id,
      hasParticipated: _dto.has_participated,
    };
  }
}
