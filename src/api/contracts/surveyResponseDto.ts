import { IDto } from "@/core";
import {
  GeneralSurveyResponseSchema,
  HashIdentifiedEntitySchema,
  OverconfidenceSurveyResponseSchema,
  TeamCoordinationSurveyResponseSchema,
  TeamEffectivenessSurveyResponseSchema,
  VoiceSurveyResponseSchema,
} from "./schema";

export default interface SurveyResponseDto
  extends HashIdentifiedEntitySchema,
    IDto {
  voice_survey_responses: VoiceSurveyResponseSchema[];
  general_survey_response: GeneralSurveyResponseSchema;
  overconfidence_survey_response: OverconfidenceSurveyResponseSchema;
  team_coordination_survey_response: TeamCoordinationSurveyResponseSchema;
  team_effectiveness_survey_response: TeamEffectivenessSurveyResponseSchema;
  feedback_response: string;
}
