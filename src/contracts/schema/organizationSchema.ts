import HashIdentifiedEntitySchema from "../../core/contracts/hashIdentifiedEntitySchema";

export default interface OrganizationSchema extends HashIdentifiedEntitySchema {
  rep_name: string;
  rep_email: string;
  rep_job_title: string;
}
