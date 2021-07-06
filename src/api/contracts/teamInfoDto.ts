import { IDto } from "@/core";
import { OrganizationSchema, TeamMemberSchema } from "./schema";

export default interface TeamInfoDto extends IDto {
  id: string;
  name: string;
  members: TeamMemberSchema[];
  organization: OrganizationSchema;
}
