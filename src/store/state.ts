import { TeamInfoDto } from "@/api/contracts";
import { OrganizationSchema } from "@/api/contracts/schema";
import {
  OVERCONFIDENCE_QUESTIONS,
  TEAM_COORDINATION_QUESTIONS,
} from "@/constants";
import { OrganizationInfo, ThesisSurvey } from "@/models";
import { LikertResponse, MinMaxResponse } from "@/models/common";

type State = {
  registrationInfo: OrganizationInfo;
  survey: ThesisSurvey;
  teamInfo: TeamInfoDto;
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
        response: MinMaxResponse.default,
      },
      q02: {
        index: 2,
        text: OVERCONFIDENCE_QUESTIONS.Q02,
        response: MinMaxResponse.default,
      },
      q03: {
        index: 3,
        text: OVERCONFIDENCE_QUESTIONS.Q03,
        response: MinMaxResponse.default,
      },
      q04: {
        index: 4,
        text: OVERCONFIDENCE_QUESTIONS.Q04,
        response: MinMaxResponse.default,
      },
      q05: {
        index: 5,
        text: OVERCONFIDENCE_QUESTIONS.Q05,
        response: MinMaxResponse.default,
      },
      q06: {
        index: 6,
        text: OVERCONFIDENCE_QUESTIONS.Q06,
        response: MinMaxResponse.default,
      },
      q07: {
        index: 7,
        text: OVERCONFIDENCE_QUESTIONS.Q07,
        response: MinMaxResponse.default,
      },
      q08: {
        index: 8,
        text: OVERCONFIDENCE_QUESTIONS.Q08,
        response: MinMaxResponse.default,
      },
      q09: {
        index: 9,
        text: OVERCONFIDENCE_QUESTIONS.Q09,
        response: MinMaxResponse.default,
      },
      q10: {
        index: 10,
        text: OVERCONFIDENCE_QUESTIONS.Q10,
        response: MinMaxResponse.default,
      },
    },
    teamCoordinationSurvey: {
      q1: {
        index: 1,
        text: TEAM_COORDINATION_QUESTIONS.Q1,
        response: LikertResponse.default,
      },
      q2: {
        index: 1,
        text: TEAM_COORDINATION_QUESTIONS.Q2,
        response: LikertResponse.default,
      },
      q3: {
        index: 1,
        text: TEAM_COORDINATION_QUESTIONS.Q3,
        response: LikertResponse.default,
      },
      q4: {
        index: 1,
        text: TEAM_COORDINATION_QUESTIONS.Q4,
        response: LikertResponse.default,
      },
      q5: {
        index: 1,
        text: TEAM_COORDINATION_QUESTIONS.Q5,
        response: LikertResponse.default,
      },
    },
    teamEffectiveness: {},
  },

  teamInfo: {
    id: "",
    members: [],
    name: "",
    organization: {} as OrganizationSchema,
  },
};

export { state, State };
