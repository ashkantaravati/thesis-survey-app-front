import { IQuestionable } from "./IQuestionable";
import { MinMaxResponse } from "./MinMaxResponse";

export default class MinMaxQuestion implements IQuestionable {
  index!: number;
  text!: string;
  response!: MinMaxResponse;

  constructor(index: number, text: string) {
    this.index = index;
    this.text = text;
    this.response = new MinMaxResponse();
  }
}
