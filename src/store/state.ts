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
import { LikertResponse, MinMaxResponse } from "@/models/common";

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
      q01: {
        index: 1,
        text: OVERCONFIDENCE_QUESTIONS.Q01,
        response: new MinMaxResponse(),
      },
      q02: {
        index: 2,
        text: OVERCONFIDENCE_QUESTIONS.Q02,
        response: new MinMaxResponse(),
      },
      q03: {
        index: 3,
        text: OVERCONFIDENCE_QUESTIONS.Q03,
        response: new MinMaxResponse(),
      },
      q04: {
        index: 4,
        text: OVERCONFIDENCE_QUESTIONS.Q04,
        response: new MinMaxResponse(),
      },
      q05: {
        index: 5,
        text: OVERCONFIDENCE_QUESTIONS.Q05,
        response: new MinMaxResponse(),
      },
      q06: {
        index: 6,
        text: OVERCONFIDENCE_QUESTIONS.Q06,
        response: new MinMaxResponse(),
      },
      q07: {
        index: 7,
        text: OVERCONFIDENCE_QUESTIONS.Q07,
        response: new MinMaxResponse(),
      },
      q08: {
        index: 8,
        text: OVERCONFIDENCE_QUESTIONS.Q08,
        response: new MinMaxResponse(),
      },
      q09: {
        index: 9,
        text: OVERCONFIDENCE_QUESTIONS.Q09,
        response: new MinMaxResponse(),
      },
      q10: {
        index: 10,
        text: OVERCONFIDENCE_QUESTIONS.Q10,
        response: new MinMaxResponse(),
      },
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
  activeParticipant: { id: "", name: "" },
};

export { state, State };
