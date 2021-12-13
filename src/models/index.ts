import GeneralSurvey from "./GeneralSurvey";
import OrganizationInfo from "./OrganizationInfo";
// import OverconfidenceSurvey from "./OverconfidenceSurvey";
// import TeamCoordinationSurvey from "./TeamCoordinationSurvey";
// import TeamEffectivenessSurvey from "./TeamEffectivenessSurvey";
import SurveySummary from "./SurveySummary";
import Team from "./Team";
type VoiceSurveyCollection = Array<VoiceSurvey>;
type OverconfidenceSurvey = Array<MinMaxQuestion>
type TeamCoordinationSurvey = Array<LikertScaleQuestion>
type TeamEffectivenessSurvey = Array<LikertScaleQuestion>
import TeamMember from "./TeamMember";
import TeamWithOrganizationInfo from "./TeamWithOrganizationInfo";
import ThesisSurvey from "./ThesisSurvey";
import VoiceSurvey from "./VoiceSurvey";
import {LikertScaleQuestion, MinMaxQuestion} from "@/models/common";

export {
  GeneralSurvey,
  VoiceSurveyCollection,
  OverconfidenceSurvey,
  TeamCoordinationSurvey,
  VoiceSurvey,
  TeamEffectivenessSurvey,
  ThesisSurvey,
  Team,
  TeamMember,
  OrganizationInfo,
  TeamWithOrganizationInfo,
  SurveySummary,
};
