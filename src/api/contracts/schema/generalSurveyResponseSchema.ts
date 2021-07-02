import NumberIdentifiedEntitySchema from "./numberIdentifiedEntitySchema";

export default interface GeneralSurveyResponseSchema
  extends NumberIdentifiedEntitySchema {
  id: number;
  age: number;
  sex: string;
}
