import { OverconfidenceSurveyResponseSchema } from "@/contracts/schema";
import { IDtoFromModelMapper } from "@/core";
import { OverconfidenceSurvey } from "@/models";
import {MinMaxQuestion} from "@/core/models";

export default class OverconfidenceMapper implements IDtoFromModelMapper {
  createDtoFromModel(
    model: OverconfidenceSurvey
  ): OverconfidenceSurveyResponseSchema {

    const q01 = model.find(q=>q.index === 1) as MinMaxQuestion;
    const q02 = model.find(q=>q.index === 2) as MinMaxQuestion;
    const q03 = model.find(q=>q.index === 3) as MinMaxQuestion;
    const q04 = model.find(q=>q.index === 4) as MinMaxQuestion;
    const q05 = model.find(q=>q.index === 5) as MinMaxQuestion;
    const q06 = model.find(q=>q.index === 6) as MinMaxQuestion;
    const q07 = model.find(q=>q.index === 7) as MinMaxQuestion;
    const q08 = model.find(q=>q.index === 8) as MinMaxQuestion;
    const q09 = model.find(q=>q.index === 9) as MinMaxQuestion;
    const q10 = model.find(q=>q.index === 10) as MinMaxQuestion;

   return {
      question_1_min: q01.response.min,
      question_1_max: q01.response.max,
      question_2_min: q02.response.min,
      question_2_max: q02.response.max,
      question_3_min: q03.response.min,
      question_3_max: q03.response.max,
      question_4_min: q04.response.min,
      question_4_max: q04.response.max,
      question_5_min: q05.response.min,
      question_5_max: q05.response.max,
      question_6_min: q06.response.min,
      question_6_max: q06.response.max,
      question_7_min: q07.response.min,
      question_7_max: q07.response.max,
      question_8_min: q08.response.min,
      question_8_max: q08.response.max,
      question_9_min: q09.response.min,
      question_9_max: q09.response.max,
      question_10_min:q10.response.min,
      question_10_max:q10.response.max,
    }

  }

}
