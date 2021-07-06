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
}
