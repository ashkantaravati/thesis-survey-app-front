import { Model } from "@/core";

export default class GeneralSurvey extends Model {
  age!: number | undefined;
  sex!: string | undefined;
  tenure!: number | undefined;
  teamHistory!: number | undefined;
}
