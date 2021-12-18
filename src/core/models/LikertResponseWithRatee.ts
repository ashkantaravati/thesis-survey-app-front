import { LikertResponse } from "@/core/models/LikertResponse";
import TeamMember from "../../models/TeamMember";

export default class LikertResponseWithRatee extends LikertResponse {
  evaluatedParticipant!: TeamMember;

  constructor(ratee: TeamMember) {
    super();
    this.value = NaN;
    this.evaluatedParticipant = ratee;
  }
}
