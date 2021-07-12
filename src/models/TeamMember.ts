import { Model } from "@/core";

export default class TeamMember extends Model {
  name!: string;
  constructor() {
    super();
    this.name = "";
    this.id = "";
  }
}
