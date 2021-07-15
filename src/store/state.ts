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
    teamCoordinationSurvey: {
      q1: new LikertScaleQuestion(1, TEAM_COORDINATION_QUESTIONS.Q1),
      q2: new LikertScaleQuestion(2, TEAM_COORDINATION_QUESTIONS.Q2),
      q3: new LikertScaleQuestion(3, TEAM_COORDINATION_QUESTIONS.Q3),
      q4: new LikertScaleQuestion(4, TEAM_COORDINATION_QUESTIONS.Q4),
      q5: new LikertScaleQuestion(5, TEAM_COORDINATION_QUESTIONS.Q5),
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
