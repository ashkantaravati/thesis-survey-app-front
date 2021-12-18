import GeneralSurvey from "./GeneralSurvey";
import OrganizationInfo from "./OrganizationInfo";
import Team from "./Team";
import StatsSummary from "./StatsSummary";

type OverconfidenceSurvey = Array<MinMaxQuestion>
type TeamCoordinationSurvey = Array<LikertScaleQuestion>
type TeamEffectivenessSurvey = Array<LikertScaleQuestion>
import TeamMember from "./TeamMember";
import TeamWithOrganizationInfo from "./TeamWithOrganizationInfo";
import ThesisSurvey from "./ThesisSurvey";
import {LikertScaleQuestion, MinMaxQuestion} from "@/core/models";

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
  StatsSummary
};
