import { TeamEffectivenessSurveyResponseSchema } from "@/api/contracts/schema";
import { IDto, ITwoWayMapper, Model } from "@/core";
import { TeamEffectivenessSurvey } from "@/models";

export default class TeamEffectivenessMapper implements ITwoWayMapper {
  createDtoFromModel(
    model: TeamEffectivenessSurvey
  ): TeamEffectivenessSurveyResponseSchema {
    return {
      question_1: model.q1.response.value,
      question_2: model.q2.response.value,
      question_3: model.q3.response.value,
      question_4: model.q4.response.value,
      question_5: model.q5.response.value,
      question_6: model.q6.response.value,
      question_7: model.q7.response.value,
      question_8: model.q8.response.value,
      question_9: model.q9.response.value,
      question_10: model.q10.response.value,
    };
  }
  createModelFromDto(_dto: IDto): Model {
    throw new Error("Method not implemented.");
  }
}
