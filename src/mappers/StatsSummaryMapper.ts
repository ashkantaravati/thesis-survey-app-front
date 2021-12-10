import { StatsSummarySchema } from "@/contracts/schema";
import { IDto, ITwoWayMapper, Model } from "@/core";
import StatsSummary from "@/models/StatsSummary";

export default class StatsSummaryMapper implements ITwoWayMapper {
  createDtoFromModel(_model: Model): IDto {
    throw new Error("Method not implemented.");
  }
  createModelFromDto(_dto: StatsSummarySchema): StatsSummary {
    return {
      id: undefined,
      numberOfParticipatedOrganizations:
        _dto.number_of_participated_organizations,
      numberOfParticipatedParticipants:
        _dto.number_of_participated_participants,
      numberOfParticipatedTeams: _dto.number_of_participated_teams,
      numberOfRegisteredOrganizations: _dto.number_of_registered_organizations,
      numberOfRegisteredParticipants: _dto.number_of_registered_participants,
      numberOfRegisteredTeams: _dto.number_of_registered_teams,
      targetTeamSize: _dto.target_team_size,
    };
  }
}
