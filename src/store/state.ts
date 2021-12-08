import {
  OrganizationInfo,
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
  temp: any;
  // error: string;
};

const state: State = {
  registrationInfo: new OrganizationInfo(),
  stats: new Stats(),
  survey: new ThesisSurvey(),

  teamInfo: {
    id: "",
    members: [],
    name: "",
    organizationName: "",
  },
  activeParticipant: new TeamMember(),
  loading: false,
  progress: 0,
  temp: {},
};

export { state, State };
