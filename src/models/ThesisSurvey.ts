import { Model } from "@/core";
import GeneralSurvey from "./GeneralSurvey";
import { LikertScaleQuestion, MinMaxQuestion } from "@/core/models";
import {
  OVERCONFIDENCE_QUESTIONS,
  TEAM_COORDINATION_QUESTIONS,
  TEAM_EFFECTIVENESS_QUESTIONS,
  VOICE_BEHAVIOR_QUESTIONS,
} from "@/constants";
import { shuffleArray } from "@/core/helpers";
import { TeamWithOrganizationInfo } from ".";

export default class ThesisSurvey extends Model {
  /**
   *
   */
  constructor() {
    super();
    this.generalSurvey = {
      age: NaN,
      sex: undefined,
      teamHistory: NaN,
      tenure: NaN,
    };

    this.voiceSurvey = shuffleArray(
      Object.entries(VOICE_BEHAVIOR_QUESTIONS).map(
        ([key, value]) => new LikertScaleQuestion(value.index, value.text)
      )
    );
    this.overconfidenceSurvey = shuffleArray(
      Object.entries(OVERCONFIDENCE_QUESTIONS).map(
        ([key, value]) => new MinMaxQuestion(value.index, value.text)
      )
    );
    this.teamCoordinationSurvey = shuffleArray(
      Object.entries(TEAM_COORDINATION_QUESTIONS).map(
        ([key, value]) => new LikertScaleQuestion(value.index, value.text)
      )
    );
    this.teamEffectivenessSurvey = shuffleArray(
      Object.entries(TEAM_EFFECTIVENESS_QUESTIONS).map(
        ([key, value]) => new LikertScaleQuestion(value.index, value.text, 7)
      )
    );
    this.feedback = "";
    this.activeTeam = new TeamWithOrganizationInfo();
  }

  generalSurvey!: GeneralSurvey;
  voiceSurvey!: Array<LikertScaleQuestion>;
  overconfidenceSurvey!: Array<MinMaxQuestion>;
  teamCoordinationSurvey!: Array<LikertScaleQuestion>;
  teamEffectivenessSurvey!: Array<LikertScaleQuestion>;
  feedback!: string;
  activeTeam!: TeamWithOrganizationInfo;
}
