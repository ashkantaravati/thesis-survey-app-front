import { Model } from "@/core";

export default class Team extends Model {
  name!: string;
  link?: string;
  size!: number;
}
