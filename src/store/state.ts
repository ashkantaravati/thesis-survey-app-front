import { TeamInfoDto } from "@/api/contracts";
import { OrganizationSchema } from "@/api/contracts/schema";
import {
  OVERCONFIDENCE_QUESTIONS,
  TEAM_COORDINATION_QUESTIONS,
} from "@/constants";
import {
  OrganizationInfo,
  OverconfidenceSurvey,
  TeamCoordinationSurvey,
  TeamMember,
  TeamWithOrganizationInfo,
  ThesisSurvey,
} from "@/models";
import {
  LikertResponse,
  LikertScaleQuestion,
  MinMaxQuestion,
  MinMaxResponse,
} from "@/models/common";

type State = {
  registrationInfo: OrganizationInfo;
  survey: ThesisSurvey;
  teamInfo: TeamWithOrganizationInfo;
  activeParticipant: TeamMember;
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
  survey: {
    generalSurvey: { age: 25, sex: "female", teamHistory: 1, tenure: 1 },
    voiceSurveys: [],
    overconfidenceSurvey: new OverconfidenceSurvey(),
    teamCoordinationSurvey: new TeamCoordinationSurvey(),
    teamEffectiveness: {},
  },

  teamInfo: {
    id: "",
    members: [],
    name: "",
    organizationName: "",
  },
  activeParticipant: new TeamMember(),
};

export { state, State };
