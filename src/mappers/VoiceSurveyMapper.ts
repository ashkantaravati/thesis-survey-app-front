import { VoiceSurveyResponseSchema } from "@/contracts/schema";
import { IDtoFromModelMapper } from "@/core";
import { LikertScaleQuestion } from "@/core/models";

export default class VoiceSurveyMapper implements IDtoFromModelMapper {
  createDtoFromModel(
    model: Array<LikertScaleQuestion>
  ): VoiceSurveyResponseSchema {
    const q1 = model.find((q) => q.index === 1) as LikertScaleQuestion;
    const q2 = model.find((q) => q.index === 2) as LikertScaleQuestion;
    const q3 = model.find((q) => q.index === 3) as LikertScaleQuestion;
    const q4 = model.find((q) => q.index === 4) as LikertScaleQuestion;
    const q5 = model.find((q) => q.index === 5) as LikertScaleQuestion;
    const q6 = model.find((q) => q.index === 6) as LikertScaleQuestion;
    return {
      voice_question_one: q1.response.value,
      voice_question_two: q2.response.value,
      voice_question_three: q3.response.value,
      voice_question_four: q4.response.value,
      voice_question_five: q5.response.value,
      voice_question_six: q6.response.value,
    };
  }
}
