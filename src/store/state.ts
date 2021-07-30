import {
  OrganizationInfo,
  OverconfidenceSurvey,
  TeamCoordinationSurvey,
  TeamMember,
  TeamWithOrganizationInfo,
  ThesisSurvey,
} from "@/models";

type State = {
  registrationInfo: OrganizationInfo;
  survey: ThesisSurvey;
  teamInfo: TeamWithOrganizationInfo;
  activeParticipant: TeamMember;
  loading: boolean;
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
  loading: false,
};

export { state, State };
