import { Model } from "@/core";
import { VoiceSurveyCollection } from ".";
import GeneralSurvey from "./GeneralSurvey";
import OverconfidenceSurvey from "./OverconfidenceSurvey";
import TeamCoordinationSurvey from "./TeamCoordinationSurvey";
import { TeamEffectiveness } from "./TeamEffectiveness";

export default class ThesisSurvey extends Model {
  generalSurvey!: GeneralSurvey;
  voiceSurveys!: VoiceSurveyCollection;
  overconfidenceSurvey!: OverconfidenceSurvey;
  teamCoordinationSurvey!: TeamCoordinationSurvey;
  teamEffectiveness!: TeamEffectiveness;
}
