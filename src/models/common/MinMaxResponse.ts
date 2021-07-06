import { ISurveyResponse } from "./ISurveyResponse";

export class MinMaxResponse implements ISurveyResponse {
  min!: number;
  max!: number;
  static default: MinMaxResponse = { min: 0, max: 0 };
}
