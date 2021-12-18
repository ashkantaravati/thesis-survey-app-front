import ISurveyResponse from "./ISurveyResponse";

export class MinMaxResponse implements ISurveyResponse {
  min!: number;
  max!: number;
}
