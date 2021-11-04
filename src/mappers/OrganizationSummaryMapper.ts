import { OrganizationSummarySchema } from "@/api/contracts/schema";
import { IDto, ITwoWayMapper, Model } from "@/core";
import OrganizationSummary from "@/models/OrganizationSummary";

export default class OrganizationSummaryMapper implements ITwoWayMapper {
  createDtoFromModel(_model: Model): IDto {
    throw new Error("Method not implemented.");
  }
  createModelFromDto(_dto: OrganizationSummarySchema): OrganizationSummary {
    return {
      id: _dto.id as string,
      name: _dto.name as string,
      numberOfTeams: _dto.number_of_teams,
    };
  }
}
