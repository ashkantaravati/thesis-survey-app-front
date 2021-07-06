import { TeamMemberSchema } from "@/api/contracts/schema";
import { ITwoWayMapper } from "@/core";
import { TeamMember } from "@/models";

export default class TeamMemberMapper implements ITwoWayMapper {
  createDtoFromModel(_model: TeamMember): TeamMemberSchema {
    return { name: _model.name, id: _model.id as string };
  }
  createModelFromDto(_dto: TeamMemberSchema): TeamMember {
    return {
      name: _dto.name,
      id: _dto.id,
    };
  }
}
