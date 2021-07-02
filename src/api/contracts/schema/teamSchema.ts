import HashIdentifiedEntitySchema from "./hashIdentifiedEntitySchema";
import TeamMemberSchema from "./teamMemberSchema";

export default interface TeamSchema extends HashIdentifiedEntitySchema {
  members: TeamMemberSchema[];
  link: string;
}
