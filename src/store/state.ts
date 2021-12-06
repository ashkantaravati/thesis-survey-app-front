import {
  OrganizationInfo,
  OverconfidenceSurvey,
  TeamCoordinationSurvey,
  TeamEffectivenessSurvey,
  TeamMember,
  TeamWithOrganizationInfo,
  ThesisSurvey,
} from "@/models";
import Stats from "@/models/Stats";

type State = {
  registrationInfo: OrganizationInfo;
  survey: ThesisSurvey;
  teamInfo: TeamWithOrganizationInfo;
  activeParticipant: TeamMember;
  stats: Stats;
  loading: boolean;
  progress: number;
  // error: string;
};

const state: State = {
  registrationInfo: {
    generalInfo: {
      name: "",
      repEmail: "",
      repJobTitle: "",
      repName: "",
    },
    teams: [],
  },
  stats: new Stats(),
  survey: {
    generalSurvey: {
      age: undefined,
      sex: undefined,
      teamHistory: undefined,
      tenure: undefined,
    },
    voiceSurveys: [],
    overconfidenceSurvey: new OverconfidenceSurvey(),
    teamCoordinationSurvey: new TeamCoordinationSurvey(),
    teamEffectivenessSurvey: new TeamEffectivenessSurvey(),
    feedback: "",
  },

  teamInfo: {
    id: "",
    members: [],
    name: "",
    organizationName: "",
  },
  activeParticipant: new TeamMember(),
  loading: false,
  progress: 0,
};

export { state, State };
