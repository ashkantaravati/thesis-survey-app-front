import { StatsDto } from "@/contracts";
import { IDto, ITwoWayMapper, Model } from "@/core";
import Stats from "@/models/Stats";
import OrganizationSummaryMapper from "./OrganizationSummaryMapper";
import StatsSummaryMapper from "./StatsSummaryMapper";

export default class implements ITwoWayMapper {
  private _statsSummaryMapper: StatsSummaryMapper;
  private _organizationSummaryMapper: OrganizationSummaryMapper;

  /**
   *
   */
  constructor() {
    this._statsSummaryMapper = new StatsSummaryMapper();
    this._organizationSummaryMapper = new OrganizationSummaryMapper();
  }
  createDtoFromModel(_model: Model): IDto {
    throw new Error("Method not implemented.");
  }
  createModelFromDto(_dto: StatsDto): Stats {
    return {
      id: undefined,
      overall: this._statsSummaryMapper.createModelFromDto(_dto.overall),
      registeredOrganizations: _dto.registered_organizations.map(
        (organization) =>
          this._organizationSummaryMapper.createModelFromDto(organization)
      ),
    };
  }
}
