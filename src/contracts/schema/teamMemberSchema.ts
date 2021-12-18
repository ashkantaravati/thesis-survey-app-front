import HashIdentifiedEntitySchema from "../../core/contracts/hashIdentifiedEntitySchema";

export default interface TeamMemberSchema extends HashIdentifiedEntitySchema {
  name: string;
  has_participated: boolean;
}
