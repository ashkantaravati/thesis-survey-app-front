import { TEAM_EFFECTIVENESS_QUESTIONS } from "@/constants";
import { Model } from "@/core";
import { LikertScaleQuestion } from "./common";

export default class TeamEffectivenessSurvey extends Model {
  q1!: LikertScaleQuestion;
  q2!: LikertScaleQuestion;
  q3!: LikertScaleQuestion;
  q4!: LikertScaleQuestion;
  q5!: LikertScaleQuestion;
  q6!: LikertScaleQuestion;
  q7!: LikertScaleQuestion;
  q8!: LikertScaleQuestion;
  q9!: LikertScaleQuestion;
  q10!: LikertScaleQuestion;

  /**
   *
   */
  constructor() {
    super();
    this.q1 = new LikertScaleQuestion(1, TEAM_EFFECTIVENESS_QUESTIONS.Q1);
    this.q2 = new LikertScaleQuestion(2, TEAM_EFFECTIVENESS_QUESTIONS.Q2);
    this.q3 = new LikertScaleQuestion(3, TEAM_EFFECTIVENESS_QUESTIONS.Q3);
    this.q4 = new LikertScaleQuestion(4, TEAM_EFFECTIVENESS_QUESTIONS.Q4);
    this.q5 = new LikertScaleQuestion(5, TEAM_EFFECTIVENESS_QUESTIONS.Q5);
    this.q6 = new LikertScaleQuestion(6, TEAM_EFFECTIVENESS_QUESTIONS.Q6);
    this.q7 = new LikertScaleQuestion(7, TEAM_EFFECTIVENESS_QUESTIONS.Q7);
    this.q8 = new LikertScaleQuestion(8, TEAM_EFFECTIVENESS_QUESTIONS.Q8);
    this.q9 = new LikertScaleQuestion(9, TEAM_EFFECTIVENESS_QUESTIONS.Q9);
    this.q10 = new LikertScaleQuestion(10, TEAM_EFFECTIVENESS_QUESTIONS.Q10);
  }
}
