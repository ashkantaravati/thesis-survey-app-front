import { Model } from "@/core";
import Team from "./Team";

export default class OrganizationInfo extends Model {
  /**
   *
   */
  constructor() {
    super();
    this.generalInfo = {
      name: "",
      repEmail: "",
      repJobTitle: "",
      repName: "",
    };
    this.teams = [
      {
        name: `تیم 1`,
        link: "",
        size: 3,
      },
    ];
  }
  generalInfo!: OrganizationGeneralInfo;
  teams!: Team[];
}

export class OrganizationGeneralInfo {
  name!: string;
  repEmail!: string;
  repName!: string;
  repJobTitle!: string;
}
