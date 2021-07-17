import { GeneralSurveyResponseSchema } from "@/api/contracts/schema";
import { IDto, ITwoWayMapper, Model } from "@/core";
import { GeneralSurvey } from "@/models";

export default class GeneralSurveyMapper implements ITwoWayMapper {
  createDtoFromModel(model: GeneralSurvey): GeneralSurveyResponseSchema {
    return {
      age: model.age,
      sex: model.sex,
    };
  }
  createModelFromDto(_dto: IDto): Model {
    throw new Error("Method not implemented.");
  }
}
