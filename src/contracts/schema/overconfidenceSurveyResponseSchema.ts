import NumberIdentifiedEntitySchema from "../../core/contracts/numberIdentifiedEntitySchema";

export default interface OverconfidenceSurveyResponseSchema
  extends NumberIdentifiedEntitySchema {
  question_1_min: number;
  question_1_max: number;
  question_2_min: number;
  question_2_max: number;
  question_3_min: number;
  question_3_max: number;
  question_4_min: number;
  question_4_max: number;
  question_5_min: number;
  question_5_max: number;
  question_6_min: number;
  question_6_max: number;
  question_7_min: number;
  question_7_max: number;
  question_8_min: number;
  question_8_max: number;
  question_9_min: number;
  question_9_max: number;
  question_10_min: number;
  question_10_max: number;
}
