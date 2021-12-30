import { TeamEffectivenessSurveyResponseSchema } from "@/contracts/schema";
import { IDtoFromModelMapper } from "@/core";
import { TeamEffectivenessSurvey } from "@/models";
import { LikertScaleQuestion } from "@/models/common";

export default class TeamEffectivenessMapper implements IDtoFromModelMapper {
  createDtoFromModel(
    model: TeamEffectivenessSurvey
  ): TeamEffectivenessSurveyResponseSchema {
    const q1 = model.find((q) => q.index === 1) as LikertScaleQuestion;
    const q2 = model.find((q) => q.index === 2) as LikertScaleQuestion;
    const q3 = model.find((q) => q.index === 3) as LikertScaleQuestion;
    const q4 = model.find((q) => q.index === 4) as LikertScaleQuestion;
    const q5 = model.find((q) => q.index === 5) as LikertScaleQuestion;
    const q6 = model.find((q) => q.index === 6) as LikertScaleQuestion;
    const q7 = model.find((q) => q.index === 7) as LikertScaleQuestion;
    const q8 = model.find((q) => q.index === 8) as LikertScaleQuestion;
    const q9 = model.find((q) => q.index === 9) as LikertScaleQuestion;
    const q10 = model.find((q) => q.index === 10) as LikertScaleQuestion;

    return {
      team_effectiveness_question_one: q1.response.value,
      team_effectiveness_question_two: q2.response.value,
      team_effectiveness_question_three: q3.response.value,
      team_effectiveness_question_four: q4.response.value,
      team_effectiveness_question_five: q5.response.value,
      team_effectiveness_question_six: q6.response.value,
      team_effectiveness_question_seven: q7.response.value,
      team_effectiveness_question_eight: q8.response.value,
      team_effectiveness_question_nine: q9.response.value,
      team_effectiveness_question_ten: q10.response.value,
    };
  }
}
