import { IQuestionable } from "./IQuestionable";
import { LikertResponse } from "./LikertResponse";

export class LikertScaleQuestion implements IQuestionable {
  index!: number;
  text!: string;
  response!: LikertResponse;

  constructor(index: number, text: string) {
    this.index = index;
    this.text = text;
    this.response = new LikertResponse();
  }
}
