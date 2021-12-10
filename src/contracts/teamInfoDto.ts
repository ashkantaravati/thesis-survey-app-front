import { IDto } from "@/core";
import { OrganizationSchema, TeamMemberSchema } from "./schema";

export default interface TeamInfoDto extends IDto {
  // TODO: extend from teamSchema
  id: string;
  name: string;
  members: TeamMemberSchema[];
  organization: OrganizationSchema; // BUG: too much information
}
