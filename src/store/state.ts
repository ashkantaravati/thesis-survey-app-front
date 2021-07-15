import { TeamInfoDto } from "@/api/contracts";
import { OrganizationSchema } from "@/api/contracts/schema";
import {
  OVERCONFIDENCE_QUESTIONS,
  TEAM_COORDINATION_QUESTIONS,
} from "@/constants";
import {
  OrganizationInfo,
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
    overconfidenceSurvey: {
      q01: new MinMaxQuestion(1, OVERCONFIDENCE_QUESTIONS.Q01),
      q02: new MinMaxQuestion(2, OVERCONFIDENCE_QUESTIONS.Q02),
      q03: new MinMaxQuestion(3, OVERCONFIDENCE_QUESTIONS.Q03),
      q04: new MinMaxQuestion(4, OVERCONFIDENCE_QUESTIONS.Q04),
      q05: new MinMaxQuestion(5, OVERCONFIDENCE_QUESTIONS.Q05),
      q06: new MinMaxQuestion(6, OVERCONFIDENCE_QUESTIONS.Q06),
      q07: new MinMaxQuestion(7, OVERCONFIDENCE_QUESTIONS.Q07),
      q08: new MinMaxQuestion(8, OVERCONFIDENCE_QUESTIONS.Q08),
      q09: new MinMaxQuestion(9, OVERCONFIDENCE_QUESTIONS.Q09),
      q10: new MinMaxQuestion(10, OVERCONFIDENCE_QUESTIONS.Q10),
    },
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
