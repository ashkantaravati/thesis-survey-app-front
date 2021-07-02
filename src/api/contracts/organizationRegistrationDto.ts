import { OrganizationSchema, TeamSchema } from "./schema";

export default interface OrganizationRegistrationDto
  extends OrganizationSchema {
  teams: TeamSchema[];
}
