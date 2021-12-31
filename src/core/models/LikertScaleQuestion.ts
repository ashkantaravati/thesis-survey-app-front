import IQuestionable from "./IQuestionable";
import { LikertResponse } from "./LikertResponse";

export class LikertScaleQuestion implements IQuestionable {
  index!: number;
  text!: string;
  scale!: number;
  response!: LikertResponse;

  constructor(index: number, text: string, scale = 5) {
    this.index = index;
    this.text = text;
    this.response = new LikertResponse();
    this.scale = scale;
  }
}
