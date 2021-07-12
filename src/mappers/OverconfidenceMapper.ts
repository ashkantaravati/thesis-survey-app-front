import { OverconfidenceSurveyResponseSchema } from "@/api/contracts/schema";
import { ITwoWayMapper } from "@/core";
import { OVERCONFIDENCE_QUESTIONS } from "../constants";
import { OverconfidenceSurvey } from "@/models";

export default class OverconfidenceMapper implements ITwoWayMapper {
  createDtoFromModel(
    model: OverconfidenceSurvey
  ): OverconfidenceSurveyResponseSchema {
    return {
      question_1_min: model.q01.response.min,
      question_1_max: model.q01.response.max,
      question_2_min: model.q01.response.min,
      question_2_max: model.q01.response.max,
      question_3_min: model.q01.response.min,
      question_3_max: model.q01.response.max,
      question_4_min: model.q01.response.min,
      question_4_max: model.q01.response.max,
      question_5_min: model.q01.response.min,
      question_5_max: model.q01.response.max,
      question_6_min: model.q01.response.min,
      question_6_max: model.q01.response.max,
      question_7_min: model.q01.response.min,
      question_7_max: model.q01.response.max,
      question_8_min: model.q01.response.min,
      question_8_max: model.q01.response.max,
      question_9_min: model.q01.response.min,
      question_9_max: model.q01.response.max,
      question_10_min: model.q01.response.min,
      question_10_max: model.q01.response.max,
    };
  }
  createModelFromDto(
    dto: OverconfidenceSurveyResponseSchema
  ): OverconfidenceSurvey {
    return {
      id: dto.id,
      q01: {
        index: 1,
        text: OVERCONFIDENCE_QUESTIONS.Q01,
        response: { min: dto.question_1_min, max: dto.question_1_max },
      },
      q02: {
        index: 1,
        text: OVERCONFIDENCE_QUESTIONS.Q02,
        response: { min: dto.question_2_min, max: dto.question_2_max },
      },
      q03: {
        index: 1,
        text: OVERCONFIDENCE_QUESTIONS.Q03,
        response: { min: dto.question_3_min, max: dto.question_3_max },
      },
      q04: {
        index: 1,
        text: OVERCONFIDENCE_QUESTIONS.Q04,
        response: { min: dto.question_4_min, max: dto.question_4_max },
      },
      q05: {
        index: 1,
        text: OVERCONFIDENCE_QUESTIONS.Q05,
        response: { min: dto.question_5_min, max: dto.question_5_max },
      },
      q06: {
        index: 1,
        text: OVERCONFIDENCE_QUESTIONS.Q06,
        response: { min: dto.question_6_min, max: dto.question_6_max },
      },
      q07: {
        index: 1,
        text: OVERCONFIDENCE_QUESTIONS.Q07,
        response: { min: dto.question_7_min, max: dto.question_7_max },
      },
      q08: {
        index: 1,
        text: OVERCONFIDENCE_QUESTIONS.Q08,
        response: { min: dto.question_8_min, max: dto.question_8_max },
      },
      q09: {
        index: 1,
        text: OVERCONFIDENCE_QUESTIONS.Q09,
        response: { min: dto.question_9_min, max: dto.question_9_max },
      },
      q10: {
        index: 1,
        text: OVERCONFIDENCE_QUESTIONS.Q10,
        response: { min: dto.question_10_min, max: dto.question_10_max },
      },
    };
  }
}
