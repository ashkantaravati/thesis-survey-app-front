import { Model } from "@/core";
import Team from "./Team";

export default class OrganizationInfo extends Model {
  generalInfo!: OrganizationGeneralInfo;
  teams!: Team[];
}

export class OrganizationGeneralInfo {
  name!: string;
  repEmail!: string;
  repName!: string;
  repJobTitle!: string;
}
