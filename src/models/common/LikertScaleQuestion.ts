import { IQuestionable } from "./IQuestionable";
import { LikertResponse } from "./LikertResponse";

export class LikertScaleQuestion implements IQuestionable {
  index!: number;
  text!: string;
  response!: LikertResponse;
}
