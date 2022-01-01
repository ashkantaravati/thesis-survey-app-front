import { TeamInfoDto } from "@/contracts";
import { IModelFromDtoMapper } from "@/core";
import TeamWithOrganizationInfo from "@/models/TeamWithOrganizationInfo";
import TeamMapper from "./TeamMapper";

export default class TeamWithOrganizationInfoMapper
  implements IModelFromDtoMapper
{
  private _mapper: TeamMapper;
  constructor() {
    this._mapper = new TeamMapper();
  }

  createModelFromDto(_dto: TeamInfoDto): TeamWithOrganizationInfo {
    const regularTeamSchema = {
      id: _dto.id,
      name: _dto.name,
      size: _dto.size,
    };
    const regularTeamModel = this._mapper.createModelFromDto(regularTeamSchema);
    return {
      ...regularTeamModel,
      organizationName: _dto.organization.name as string,
    };
  }
}
