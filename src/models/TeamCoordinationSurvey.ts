import { Model } from "@/core";
import { LikertScaleQuestion } from "./common/LikertScaleQuestion";

export default class TeamCoordinationSurvey extends Model {
  q1!: LikertScaleQuestion;
  q2!: LikertScaleQuestion;
  q3!: LikertScaleQuestion;
  q4!: LikertScaleQuestion;
  q5!: LikertScaleQuestion;
}
