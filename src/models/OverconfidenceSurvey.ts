import { OVERCONFIDENCE_QUESTIONS } from "@/constants";
import { Model } from "@/core";
import MinMaxQuestion from "./common/MinMaxQuestion";

export default class OverconfidenceSurvey extends Model {
  q01!: MinMaxQuestion;
  q02!: MinMaxQuestion;
  q03!: MinMaxQuestion;
  q04!: MinMaxQuestion;
  q05!: MinMaxQuestion;
  q06!: MinMaxQuestion;
  q07!: MinMaxQuestion;
  q08!: MinMaxQuestion;
  q09!: MinMaxQuestion;
  q10!: MinMaxQuestion;

  /**
   *
   */
  constructor() {
    super();
    this.q01 = new MinMaxQuestion(1, OVERCONFIDENCE_QUESTIONS.Q01);
    this.q02 = new MinMaxQuestion(2, OVERCONFIDENCE_QUESTIONS.Q02);
    this.q03 = new MinMaxQuestion(3, OVERCONFIDENCE_QUESTIONS.Q03);
    this.q04 = new MinMaxQuestion(4, OVERCONFIDENCE_QUESTIONS.Q04);
    this.q05 = new MinMaxQuestion(5, OVERCONFIDENCE_QUESTIONS.Q05);
    this.q06 = new MinMaxQuestion(6, OVERCONFIDENCE_QUESTIONS.Q06);
    this.q07 = new MinMaxQuestion(7, OVERCONFIDENCE_QUESTIONS.Q07);
    this.q08 = new MinMaxQuestion(8, OVERCONFIDENCE_QUESTIONS.Q08);
    this.q09 = new MinMaxQuestion(9, OVERCONFIDENCE_QUESTIONS.Q09);
    this.q10 = new MinMaxQuestion(10, OVERCONFIDENCE_QUESTIONS.Q10);
  }
}
