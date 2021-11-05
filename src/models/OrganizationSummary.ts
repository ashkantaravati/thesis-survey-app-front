import { Model } from "@/core";

export default class OrganizationSummary implements Model {
  id!: string;
  name!: string;
  numberOfTeams!: number;
}
