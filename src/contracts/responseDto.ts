import {
  GeneralSurveyResponseSchema,
  OverconfidenceSurveyResponseSchema,
  TeamCoordinationSurveyResponseSchema,
  TeamEffectivenessSurveyResponseSchema,
  VoiceSurveyResponseSchema,
} from "./schema";

export default interface ResponseDto
  extends GeneralSurveyResponseSchema,
    OverconfidenceSurveyResponseSchema,
    TeamCoordinationSurveyResponseSchema,
    TeamEffectivenessSurveyResponseSchema,
    VoiceSurveyResponseSchema {
  // id: string;
  team_id: string;
  // updated_at: Date;
  // created_at: Date;
  feedback: string;
}
