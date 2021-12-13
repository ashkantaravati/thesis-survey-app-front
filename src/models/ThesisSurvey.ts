import {Model} from "@/core";
import {VoiceSurveyCollection} from ".";
import GeneralSurvey from "./GeneralSurvey";
import OverconfidenceSurvey from "./OverconfidenceSurvey";
import TeamCoordinationSurvey from "./TeamCoordinationSurvey";
import TeamEffectivenessSurvey from "./TeamEffectivenessSurvey";
import {MinMaxQuestion} from "@/models/common";
import {OVERCONFIDENCE_QUESTIONS} from "@/constants";
import arrayShuffle from "array-shuffle";


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
        this.overconfidenceSurvey = arrayShuffle(Object.entries(OVERCONFIDENCE_QUESTIONS).map(([key, value]) => new MinMaxQuestion(value.index, value.text)));
        this.teamCoordinationSurvey = new TeamCoordinationSurvey();
        this.teamEffectivenessSurvey = new TeamEffectivenessSurvey();
        this.feedback = "";
    }

    generalSurvey!: GeneralSurvey;
    voiceSurveys!: VoiceSurveyCollection;
    overconfidenceSurvey!: Array<MinMaxQuestion>;
    teamCoordinationSurvey!: TeamCoordinationSurvey;
    teamEffectivenessSurvey!: TeamEffectivenessSurvey;
    feedback!: string;
}
