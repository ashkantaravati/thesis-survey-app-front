import IDtoFromModelMapper from "./IDtoFromModelMapper";
import IModelFromDtoMapper from "./IModelFromDtoMapper";

interface ITwoWayMapper extends IDtoFromModelMapper, IModelFromDtoMapper {}

export default ITwoWayMapper;
