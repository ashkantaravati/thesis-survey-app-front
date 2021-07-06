import { IDto } from "@/core";
import { OrganizationSchema, TeamSchema } from "./schema";

export default interface OrganizationRegistrationDto
  extends OrganizationSchema,
    IDto {
  teams: TeamSchema[];
}
