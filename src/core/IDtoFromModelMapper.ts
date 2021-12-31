import IDto from "./IDto";
import Model from "./Model";
import { IQuestionable } from "@/models/common/IQuestionable";

export default interface IDtoFromModelMapper {
  createDtoFromModel(_model: Model | Array<IQuestionable>): IDto;
}
