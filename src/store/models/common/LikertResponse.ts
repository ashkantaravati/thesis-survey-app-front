import { ISurveyResponse } from "./ISurveyResponse";

export class LikertResponse implements ISurveyResponse {
  value!: number;
  static default: LikertResponse = { value: 3 };
}
