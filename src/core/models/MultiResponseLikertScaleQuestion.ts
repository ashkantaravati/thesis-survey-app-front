import { IQuestionable } from "./IQuestionable";
import {LikertResponseWithRatee} from "@/models/common/LikertResponseWithRatee";
import {TeamMember} from "@/models";
import arrayShuffle from "array-shuffle";

export class MultiResponseLikertScaleQuestion implements IQuestionable {
    index!: number;
    text!: string;
    scale!: number;
    response!: Array<LikertResponseWithRatee>;
    ratees!:Array<TeamMember>;

    constructor(index: number, text: string, ratees:Array<TeamMember>, scale=5) {
        this.index = index;
        this.text = text;
        this.ratees = ratees;
        this.response = arrayShuffle(ratees.map(ratee=> new LikertResponseWithRatee(ratee)))
        this.scale = scale;
    }
}
