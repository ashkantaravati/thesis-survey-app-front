import { IDto } from "@/core";
import {
  GeneralSurveyResponseSchema,
  HashIdentifiedEntitySchema,
  OverconfidenceSurveyResponseSchema,
  TeamCoordinationSurveyResponse,
  VoiceSurveyResponseSchema,
} from "./schema";

export default interface SurveyResponseDto
  extends HashIdentifiedEntitySchema,
    IDto {
  voice_survey_responses: VoiceSurveyResponseSchema[];
  general_survey_response: GeneralSurveyResponseSchema;
  overconfidence_survey_response: OverconfidenceSurveyResponseSchema;
  team_coordination_survey_response: TeamCoordinationSurveyResponse;
}
