import IDto from "./IDto";
import Model from "./Model";

export default interface IModelFromDtoMapper {
  createModelFromDto(_dto: IDto): Model;
}
