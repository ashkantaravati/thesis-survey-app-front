import { Model } from "@/core";
import TeamMember from "./TeamMember";

export default class Team extends Model {
  name!: string;
  members!: TeamMember[];
  link?: string;
}
