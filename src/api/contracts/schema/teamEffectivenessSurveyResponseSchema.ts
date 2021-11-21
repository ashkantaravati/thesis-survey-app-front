import NumberIdentifiedEntitySchema from "./numberIdentifiedEntitySchema";

export default interface TeamEffectivenessSurveyResponseSchema
  extends NumberIdentifiedEntitySchema {
  question_1: number;
  question_2: number;
  question_3: number;
  question_4: number;
  question_5: number;
  question_6: number;
  question_7: number;
  question_8: number;
  question_9: number;
  question_10: number;
}
