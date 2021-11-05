import { Model } from "@/core";

export default class StatsSummary implements Model {
  id!: undefined;
  targetTeamSize!: number;
  numberOfRegisteredTeams!: number;
  numberOfRegisteredOrganizations!: number;
  numberOfRegisteredParticipants!: number;
  numberOfParticipatedTeams!: number;
  numberOfParticipatedParticipants!: number;
  numberOfParticipatedOrganizations!: number;
}
