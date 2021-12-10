import { OrganizationRegistrationDto } from "@/contracts";
import { ITwoWayMapper} from "@/core";
import { OrganizationInfo } from "@/models";
import TeamMapper from "./TeamMapper";

export default class OrganizationRegistrationMapper implements ITwoWayMapper {
  private _teamMapper: TeamMapper;
  /**
   *
   */
  constructor() {
    this._teamMapper = new TeamMapper();
  }
  createModelFromDto(_dto: OrganizationRegistrationDto): OrganizationInfo {
    return {
      generalInfo: {
        name: _dto.name as string,
        repEmail: _dto.rep_email,
        repJobTitle: _dto.rep_job_title,
        repName: _dto.rep_name,
      },
      id: _dto.id as string,
      teams: _dto.teams.map((team) =>
        this._teamMapper.createModelFromDto(team)
      ),
    };
  }
  createDtoFromModel(model: OrganizationInfo): OrganizationRegistrationDto {
    return {
      rep_email: model.generalInfo.repEmail,
      rep_job_title: model.generalInfo.repJobTitle,
      rep_name: model.generalInfo.repName,
      teams: model.teams.map((team) =>
        this._teamMapper.createDtoFromModel(team)
      ),
      name: model.generalInfo.name,
    };
  }
}
