import { Model } from "@/core";
import OrganizationSummary from "./OrganizationSummary";
import StatsSummary from "./StatsSummary";

export default class Stats implements Model {
  id!: undefined;
  overall!: StatsSummary;
  registeredOrganizations!: OrganizationSummary[];
}
