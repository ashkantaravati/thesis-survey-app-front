import { OrganizationInfo, ThesisSurvey } from "@/models";
import Stats from "@/models/Stats";

type State = {
  registrationInfo: OrganizationInfo;
  survey: ThesisSurvey;
  stats: Stats;
  loading: boolean;
  progress: number;
  temp: any;
  // error: string;
};

const state: State = {
  registrationInfo: new OrganizationInfo(),
  stats: new Stats(),
  survey: new ThesisSurvey(),

  loading: false,
  progress: 0,
  temp: {},
};

export { state, State };
