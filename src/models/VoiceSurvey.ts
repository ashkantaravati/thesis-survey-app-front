import { VOICE_BEHAVIOR_QUESTIONS } from "@/constants";
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
  /**
   *
   */
  constructor(participant: TeamMember) {
    super();
    this.id = participant.id;
    this.evaluatedParticipant = participant;
    this.q1 = new LikertScaleQuestion(1, VOICE_BEHAVIOR_QUESTIONS.Q1);
    this.q2 = new LikertScaleQuestion(2, VOICE_BEHAVIOR_QUESTIONS.Q2);
    this.q3 = new LikertScaleQuestion(3, VOICE_BEHAVIOR_QUESTIONS.Q3);
    this.q4 = new LikertScaleQuestion(4, VOICE_BEHAVIOR_QUESTIONS.Q4);
    this.q5 = new LikertScaleQuestion(5, VOICE_BEHAVIOR_QUESTIONS.Q5);
    this.q6 = new LikertScaleQuestion(6, VOICE_BEHAVIOR_QUESTIONS.Q6);
  }
}
