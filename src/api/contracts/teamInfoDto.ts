import { OrganizationSchema, TeamMemberSchema } from "./schema";

export default interface TeamInfoDto {
  id: string;
  name: string;
  members: TeamMemberSchema[];
  organization: OrganizationSchema;
}
