import { Model } from "@/core";
import { VoiceSurveyCollection } from ".";
import GeneralSurvey from "./GeneralSurvey";
import OverconfidenceSurvey from "./OverconfidenceSurvey";
import TeamCoordinationSurvey from "./TeamCoordinationSurvey";
import TeamEffectivenessSurvey from "./TeamEffectivenessSurvey";

export default class ThesisSurvey extends Model {
  generalSurvey!: GeneralSurvey;
  voiceSurveys!: VoiceSurveyCollection;
  overconfidenceSurvey!: OverconfidenceSurvey;
  teamCoordinationSurvey!: TeamCoordinationSurvey;
  teamEffectivenessSurvey!: TeamEffectivenessSurvey;
}
