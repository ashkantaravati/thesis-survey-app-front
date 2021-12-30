import { TeamCoordinationSurveyResponseSchema } from "@/contracts/schema";
import { IDtoFromModelMapper } from "@/core";
import { TeamCoordinationSurvey } from "@/models";
import { LikertScaleQuestion } from "@/models/common";

export default class TeamCoordinationMapper implements IDtoFromModelMapper {
  createDtoFromModel(
    model: TeamCoordinationSurvey
  ): TeamCoordinationSurveyResponseSchema {
    const q1 = model.find((q) => q.index === 1) as LikertScaleQuestion;
    const q2 = model.find((q) => q.index === 2) as LikertScaleQuestion;
    const q3 = model.find((q) => q.index === 3) as LikertScaleQuestion;
    const q4 = model.find((q) => q.index === 4) as LikertScaleQuestion;
    const q5 = model.find((q) => q.index === 5) as LikertScaleQuestion;

    return {
      team_coordination_question_one: q1.response.value,
      team_coordination_question_two: q2.response.value,
      team_coordination_question_three: q3.response.value,
      team_coordination_question_four: q4.response.value,
      team_coordination_question_five: q5.response.value,
    };
  }
}
