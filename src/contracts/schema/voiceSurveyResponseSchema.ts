import NumberIdentifiedEntitySchema from "./numberIdentifiedEntitySchema";
import TeamMemberSchema from "./teamMemberSchema";

export default interface VoiceSurveyResponseSchema
  extends NumberIdentifiedEntitySchema {
  evaluated_participant: TeamMemberSchema;
  question_1: number;
  question_2: number;
  question_3: number;
  question_4: number;
  question_5: number;
  question_6: number;
}
