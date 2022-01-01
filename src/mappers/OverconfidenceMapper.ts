import { OverconfidenceSurveyResponseSchema } from "@/contracts/schema";
import { IDtoFromModelMapper } from "@/core";
import { OverconfidenceSurvey } from "@/models";
import { MinMaxQuestion } from "@/core/models";

export default class OverconfidenceMapper implements IDtoFromModelMapper {
  createDtoFromModel(
    model: OverconfidenceSurvey
  ): OverconfidenceSurveyResponseSchema {
    const q01 = model.find((q) => q.index === 1) as MinMaxQuestion;
    const q02 = model.find((q) => q.index === 2) as MinMaxQuestion;
    const q03 = model.find((q) => q.index === 3) as MinMaxQuestion;
    const q04 = model.find((q) => q.index === 4) as MinMaxQuestion;
    const q05 = model.find((q) => q.index === 5) as MinMaxQuestion;
    const q06 = model.find((q) => q.index === 6) as MinMaxQuestion;
    const q07 = model.find((q) => q.index === 7) as MinMaxQuestion;
    const q08 = model.find((q) => q.index === 8) as MinMaxQuestion;
    const q09 = model.find((q) => q.index === 9) as MinMaxQuestion;
    const q10 = model.find((q) => q.index === 10) as MinMaxQuestion;

    return {
      overconfidence_question_one_lower: q01.response.min,
      overconfidence_question_one_upper: q01.response.max,
      overconfidence_question_two_lower: q02.response.min,
      overconfidence_question_two_upper: q02.response.max,
      overconfidence_question_three_lower: q03.response.min,
      overconfidence_question_three_upper: q03.response.max,
      overconfidence_question_four_lower: q04.response.min,
      overconfidence_question_four_upper: q04.response.max,
      overconfidence_question_five_lower: q05.response.min,
      overconfidence_question_five_upper: q05.response.max,
      overconfidence_question_six_lower: q06.response.min,
      overconfidence_question_six_upper: q06.response.max,
      overconfidence_question_seven_lower: q07.response.min,
      overconfidence_question_seven_upper: q07.response.max,
      overconfidence_question_eight_lower: q08.response.min,
      overconfidence_question_eight_upper: q08.response.max,
      overconfidence_question_nine_lower: q09.response.min,
      overconfidence_question_nine_upper: q09.response.max,
      overconfidence_question_ten_lower: q10.response.min,
      overconfidence_question_ten_upper: q10.response.max,
    };
  }
}
