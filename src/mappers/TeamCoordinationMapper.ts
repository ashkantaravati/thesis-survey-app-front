import { TeamCoordinationSurveyResponseSchema } from "@/contracts/schema";
import { IDto, ITwoWayMapper, Model } from "@/core";
import { TeamCoordinationSurvey } from "@/models";

export default class TeamCoordinationMapper implements ITwoWayMapper {
  createDtoFromModel(
    model: TeamCoordinationSurvey
  ): TeamCoordinationSurveyResponseSchema {
    return {
      question_1: model.q1.response.value,
      question_2: model.q2.response.value,
      question_3: model.q3.response.value,
      question_4: model.q4.response.value,
      question_5: model.q5.response.value,
    };
  }
  createModelFromDto(_dto: IDto): Model {
    throw new Error("Method not implemented.");
  }
}
