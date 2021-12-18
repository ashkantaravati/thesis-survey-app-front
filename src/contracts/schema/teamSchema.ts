import HashIdentifiedEntitySchema from "../../core/contracts/hashIdentifiedEntitySchema";
import TeamMemberSchema from "./teamMemberSchema";

export default interface TeamSchema extends HashIdentifiedEntitySchema {
  members: TeamMemberSchema[];
  link?: string;
}
