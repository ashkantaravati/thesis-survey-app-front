import { VoiceSurveyResponseSchema } from "@/contracts/schema";
import {IDtoFromModelMapper} from "@/core";
import TeamMemberMapper from "./TeamMemberMapper";
import {MultiResponseLikertScaleQuestion} from "@/models/common";
import {LikertResponseWithRatee} from "@/models/common/LikertResponseWithRatee";

export default class VoiceSurveyMapper implements IDtoFromModelMapper {
  createDtoFromModel(model: Array<MultiResponseLikertScaleQuestion>): Array<VoiceSurveyResponseSchema>{
    const _memberMapper = new TeamMemberMapper();
    const q1 = model.find(q=>q.index===1) as MultiResponseLikertScaleQuestion;
    const q2 = model.find(q=>q.index===2) as MultiResponseLikertScaleQuestion;
    const q3 = model.find(q=>q.index===3) as MultiResponseLikertScaleQuestion;
    const q4 = model.find(q=>q.index===4) as MultiResponseLikertScaleQuestion;
    const q5 = model.find(q=>q.index===5) as MultiResponseLikertScaleQuestion;
    const q6 = model.find(q=>q.index===6) as MultiResponseLikertScaleQuestion;
    const ratees = q1.ratees;
    const result = ratees.map(function(ratee) {
      const r1 = q1.response.find(r=> r.evaluatedParticipant.id==ratee.id) as LikertResponseWithRatee;
      const r2 = q2.response.find(r=> r.evaluatedParticipant.id==ratee.id) as LikertResponseWithRatee;
      const r3 = q3.response.find(r=> r.evaluatedParticipant.id==ratee.id) as LikertResponseWithRatee;
      const r4 = q4.response.find(r=> r.evaluatedParticipant.id==ratee.id) as LikertResponseWithRatee;
      const r5 = q5.response.find(r=> r.evaluatedParticipant.id==ratee.id) as LikertResponseWithRatee;
      const r6 = q6.response.find(r=> r.evaluatedParticipant.id==ratee.id) as LikertResponseWithRatee;
      const teamMemberDto = _memberMapper.createDtoFromModel(ratee);
      return {
        id:undefined,
        evaluated_participant:teamMemberDto,
        question_1:r1.value,
        question_2:r2.value,
        question_3:r3.value,
        question_4:r4.value,
        question_5:r5.value,
        question_6:r6.value

      } as VoiceSurveyResponseSchema

    })
    return result;

      }

}
