import { Model } from "@/core";
import { VoiceSurveyCollection } from ".";
import GeneralSurvey from "./GeneralSurvey";
import OverconfidenceSurvey from "./OverconfidenceSurvey";
import TeamCoordinationSurvey from "./TeamCoordinationSurvey";
import TeamEffectivenessSurvey from "./TeamEffectivenessSurvey";

export default class ThesisSurvey extends Model {
  /**
   *
   */
  constructor() {
    super();
    this.generalSurvey = {
      age: undefined,
      sex: undefined,
      teamHistory: undefined,
      tenure: undefined,
    };
    this.voiceSurveys = [];
    this.overconfidenceSurvey = new OverconfidenceSurvey();
    this.teamCoordinationSurvey = new TeamCoordinationSurvey();
    this.teamEffectivenessSurvey = new TeamEffectivenessSurvey();
    this.feedback = "";
  }
  generalSurvey!: GeneralSurvey;
  voiceSurveys!: VoiceSurveyCollection;
  overconfidenceSurvey!: OverconfidenceSurvey;
  teamCoordinationSurvey!: TeamCoordinationSurvey;
  teamEffectivenessSurvey!: TeamEffectivenessSurvey;
  feedback!: string;
}
