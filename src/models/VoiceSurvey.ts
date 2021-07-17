import { VOICE_BEHAVIOR_QUESTIONS } from "@/constants";
import { Model } from "@/core";
import { LikertResponse } from "./common";
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
    this.q1 = {
      index: 1,
      text: VOICE_BEHAVIOR_QUESTIONS.Q1,
      response: new LikertResponse(),
    } as LikertScaleQuestion;
    this.q2 = {
      index: 2,
      text: VOICE_BEHAVIOR_QUESTIONS.Q2,
      response: new LikertResponse(),
    } as LikertScaleQuestion;
    this.q3 = {
      index: 3,
      text: VOICE_BEHAVIOR_QUESTIONS.Q3,
      response: new LikertResponse(),
    } as LikertScaleQuestion;
    this.q4 = {
      index: 4,
      text: VOICE_BEHAVIOR_QUESTIONS.Q4,
      response: new LikertResponse(),
    } as LikertScaleQuestion;
    this.q5 = {
      index: 5,
      text: VOICE_BEHAVIOR_QUESTIONS.Q5,
      response: new LikertResponse(),
    } as LikertScaleQuestion;
    this.q6 = {
      index: 6,
      text: VOICE_BEHAVIOR_QUESTIONS.Q6,
      response: new LikertResponse(),
    } as LikertScaleQuestion;
  }
}
