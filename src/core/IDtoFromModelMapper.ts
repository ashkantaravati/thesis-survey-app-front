import IDto from "./IDto";
import Model from "./Model";

export default interface IDtoFromModelMapper {
  createDtoFromModel(_model: Model): IDto;
}
