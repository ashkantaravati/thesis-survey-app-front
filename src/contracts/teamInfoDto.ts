import { IDto } from "@/core";
import { OrganizationSchema } from "./schema";

export default interface TeamInfoDto extends IDto {
  id: string;
  name: string;
  size: number;
  organization: OrganizationSchema; // BUG: too much information
}
