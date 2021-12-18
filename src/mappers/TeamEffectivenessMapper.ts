import { TeamEffectivenessSurveyResponseSchema } from "@/contracts/schema";
import {IDtoFromModelMapper} from "@/core";
import { TeamEffectivenessSurvey } from "@/models";
import {LikertScaleQuestion} from "@/core/models";

export default class TeamEffectivenessMapper implements IDtoFromModelMapper {
  createDtoFromModel(
    model: TeamEffectivenessSurvey
  ): TeamEffectivenessSurveyResponseSchema {
    const q1 = model.find(q=>q.index === 1) as LikertScaleQuestion;
    const q2 = model.find(q=>q.index === 2) as LikertScaleQuestion;
    const q3 = model.find(q=>q.index === 3) as LikertScaleQuestion;
    const q4 = model.find(q=>q.index === 4) as LikertScaleQuestion;
    const q5 = model.find(q=>q.index === 5) as LikertScaleQuestion;
    const q6 = model.find(q=>q.index === 6) as LikertScaleQuestion;
    const q7 = model.find(q=>q.index === 7) as LikertScaleQuestion;
    const q8 = model.find(q=>q.index === 8) as LikertScaleQuestion;
    const q9 = model.find(q=>q.index === 9) as LikertScaleQuestion;
    const q10 = model.find(q=>q.index === 10) as LikertScaleQuestion;

    return {
      question_1: q1.response.value,
      question_2: q2.response.value,
      question_3: q3.response.value,
      question_4: q4.response.value,
      question_5: q5.response.value,
      question_6: q6.response.value,
      question_7: q7.response.value,
      question_8: q8.response.value,
      question_9: q9.response.value,
      question_10:q10.response.value,
    };
  }
}
