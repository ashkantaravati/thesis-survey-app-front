import { Model } from "@/core";

export default class TeamMember extends Model {
  name!: string;
  hasParticipated!: boolean;
  constructor() {
    super();
    this.name = "";
    this.id = "";
    this.hasParticipated = false;
  }
}
