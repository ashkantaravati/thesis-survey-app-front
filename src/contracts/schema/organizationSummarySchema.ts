import HashIdentifiedEntitySchema from "../../core/contracts/hashIdentifiedEntitySchema";

export default interface OrganizationSummarySchema
  extends HashIdentifiedEntitySchema {
  number_of_teams: number;
}
