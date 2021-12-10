import { VoiceSurveyResponseSchema } from "@/contracts/schema";
import { IDto, ITwoWayMapper, Model } from "@/core";
import { VoiceSurvey } from "@/models";
import TeamMemberMapper from "./TeamMemberMapper";

export default class VoiceSurveyMapper implements ITwoWayMapper {
  createDtoFromModel(model: VoiceSurvey): VoiceSurveyResponseSchema {
    const _memberMapper = new TeamMemberMapper();
    return {
      evaluated_participant: _memberMapper.createDtoFromModel(
        model.evaluatedParticipant
      ),
      question_1: model.q1.response.value,
      question_2: model.q2.response.value,
      question_3: model.q3.response.value,
      question_4: model.q4.response.value,
      question_5: model.q5.response.value,
      question_6: model.q6.response.value,
    };
  }
  createModelFromDto(_dto: IDto): Model {
    throw new Error("Method not implemented.");
  }
}
