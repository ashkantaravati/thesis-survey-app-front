import IDto from "../contracts/IDto";
import Model from "../models/Model";

export default interface IModelFromDtoMapper {
  createModelFromDto(_dto: IDto): Model;
}
