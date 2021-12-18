import { TeamCoordinationSurveyResponseSchema } from "@/contracts/schema";
import {IDtoFromModelMapper} from "@/core";
import { TeamCoordinationSurvey } from "@/models";
import {LikertScaleQuestion} from "@/core/models";

export default class TeamCoordinationMapper implements IDtoFromModelMapper {
  createDtoFromModel(
    model: TeamCoordinationSurvey
  ): TeamCoordinationSurveyResponseSchema {
    const q1 = model.find(q=>q.index === 1) as LikertScaleQuestion;
    const q2 = model.find(q=>q.index === 2) as LikertScaleQuestion;
    const q3 = model.find(q=>q.index === 3) as LikertScaleQuestion;
    const q4 = model.find(q=>q.index === 4) as LikertScaleQuestion;
    const q5 = model.find(q=>q.index === 5) as LikertScaleQuestion;

    return {
      question_1: q1.response.value,
      question_2: q2.response.value,
      question_3: q3.response.value,
      question_4: q4.response.value,
      question_5: q5.response.value,
    };
  }
}
