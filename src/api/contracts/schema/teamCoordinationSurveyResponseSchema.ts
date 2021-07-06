import NumberIdentifiedEntitySchema from "./numberIdentifiedEntitySchema";

export default interface TeamCoordinationSurveyResponseSchema
  extends NumberIdentifiedEntitySchema {
  question_1: number;
  question_2: number;
  question_3: number;
  question_4: number;
  question_5: number;
}
