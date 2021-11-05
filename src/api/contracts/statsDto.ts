import { IDto } from "@/core";
import { OrganizationSummarySchema, StatsSummarySchema } from "./schema";

export default interface StatsDto extends IDto {
  overall: StatsSummarySchema;
  registered_organizations: OrganizationSummarySchema[];
}
