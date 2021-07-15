import { TeamInfoDto } from "@/api/contracts";
import { OrganizationSchema } from "@/api/contracts/schema";
import {
  OVERCONFIDENCE_QUESTIONS,
  TEAM_COORDINATION_QUESTIONS,
} from "@/constants";
import {
  OrganizationInfo,
  OverconfidenceSurvey,
  TeamMember,
  TeamWithOrganizationInfo,
  ThesisSurvey,
} from "@/models";
import {
  LikertResponse,
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
    teamCoordinationSurvey: {
      q1: {
        index: 1,
        text: TEAM_COORDINATION_QUESTIONS.Q1,
        response: new LikertResponse(),
      },
      q2: {
        index: 1,
        text: TEAM_COORDINATION_QUESTIONS.Q2,
        response: new LikertResponse(),
      },
      q3: {
        index: 1,
        text: TEAM_COORDINATION_QUESTIONS.Q3,
        response: new LikertResponse(),
      },
      q4: {
        index: 1,
        text: TEAM_COORDINATION_QUESTIONS.Q4,
        response: new LikertResponse(),
      },
      q5: {
        index: 1,
        text: TEAM_COORDINATION_QUESTIONS.Q5,
        response: new LikertResponse(),
      },
    },
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
