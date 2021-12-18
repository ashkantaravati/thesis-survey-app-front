import {Model} from "@/core";
import GeneralSurvey from "./GeneralSurvey";
import {LikertScaleQuestion, MinMaxQuestion, MultiResponseLikertScaleQuestion} from "@/core/models";
import {OVERCONFIDENCE_QUESTIONS, TEAM_COORDINATION_QUESTIONS,TEAM_EFFECTIVENESS_QUESTIONS} from "@/constants";
import {shuffleArray} from "@/core/helpers";


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

        this.voiceSurvey = [];
        this.overconfidenceSurvey = shuffleArray<MinMaxQuestion>(Object.entries(OVERCONFIDENCE_QUESTIONS).map(([key, value]) => new MinMaxQuestion(value.index, value.text)));
        this.teamCoordinationSurvey = shuffleArray<LikertScaleQuestion>(Object.entries(TEAM_COORDINATION_QUESTIONS).map(([key, value])=> new LikertScaleQuestion(value.index,value.text)));
        this.teamEffectivenessSurvey = shuffleArray<LikertScaleQuestion>(Object.entries(TEAM_EFFECTIVENESS_QUESTIONS).map(([key, value])=> new LikertScaleQuestion(value.index,value.text,7)));
        this.feedback = "";
    }

    generalSurvey!: GeneralSurvey;
    voiceSurvey!: Array<MultiResponseLikertScaleQuestion>;
    overconfidenceSurvey!: Array<MinMaxQuestion>;
    teamCoordinationSurvey!: Array<LikertScaleQuestion>;
    teamEffectivenessSurvey!: Array<LikertScaleQuestion>;
    feedback!: string;
}
