import IDtoFromModelMapper from "./IDtoFromModelMapper";
import IModelFromDtoMapper from "./IModelFromDtoMapper";

export default interface ITwoWayMapper
  extends IDtoFromModelMapper,
    IModelFromDtoMapper {}
