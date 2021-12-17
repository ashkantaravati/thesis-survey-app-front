import GeneralSurvey from "./GeneralSurvey";
import OrganizationInfo from "./OrganizationInfo";
import Team from "./Team";
type OverconfidenceSurvey = Array<MinMaxQuestion>
type TeamCoordinationSurvey = Array<LikertScaleQuestion>
type TeamEffectivenessSurvey = Array<LikertScaleQuestion>
import TeamMember from "./TeamMember";
import TeamWithOrganizationInfo from "./TeamWithOrganizationInfo";
import ThesisSurvey from "./ThesisSurvey";
import {LikertScaleQuestion, MinMaxQuestion} from "@/models/common";

export {
  GeneralSurvey,
  OverconfidenceSurvey,
  TeamCoordinationSurvey,
  TeamEffectivenessSurvey,
  ThesisSurvey,
  Team,
  TeamMember,
  OrganizationInfo,
  TeamWithOrganizationInfo,
};
