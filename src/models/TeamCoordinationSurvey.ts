import { TEAM_COORDINATION_QUESTIONS } from "@/constants";
import { Model } from "@/core";
import { LikertScaleQuestion } from "@/models/common";

export default class TeamCoordinationSurvey extends Model {
  q1!: LikertScaleQuestion;
  q2!: LikertScaleQuestion;
  q3!: LikertScaleQuestion;
  q4!: LikertScaleQuestion;
  q5!: LikertScaleQuestion;

  /**
   *
   */
  constructor() {
    super();
    this.q1 = new LikertScaleQuestion(1, TEAM_COORDINATION_QUESTIONS.Q1);
    this.q2 = new LikertScaleQuestion(2, TEAM_COORDINATION_QUESTIONS.Q2);
    this.q3 = new LikertScaleQuestion(3, TEAM_COORDINATION_QUESTIONS.Q3);
    this.q4 = new LikertScaleQuestion(4, TEAM_COORDINATION_QUESTIONS.Q4);
    this.q5 = new LikertScaleQuestion(5, TEAM_COORDINATION_QUESTIONS.Q5);
  }
}
