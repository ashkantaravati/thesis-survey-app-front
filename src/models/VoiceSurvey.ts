import { Model } from "@/core";
import { LikertScaleQuestion } from "./common/LikertScaleQuestion";
import TeamMember from "./TeamMember";

export default class VoiceSurvey extends Model {
  evaluatedParticipant!: TeamMember;
  q1!: LikertScaleQuestion;
  q2!: LikertScaleQuestion;
  q3!: LikertScaleQuestion;
  q4!: LikertScaleQuestion;
  q5!: LikertScaleQuestion;
  q6!: LikertScaleQuestion;
}
