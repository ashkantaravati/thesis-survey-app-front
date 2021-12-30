import { ResponseDto } from "@/contracts";
import { Team, ThesisSurvey } from "@/models";
import GeneralSurveyMapper from "./GeneralSurveyMapper";
import OverconfidenceMapper from "./OverconfidenceMapper";
import TeamCoordinationMapper from "./TeamCoordinationMapper";
import TeamEffectivenessMapper from "./TeamEffectivenessMapper";
import VoiceSurveyMapper from "./VoiceSurveyMapper";
import { IDtoFromModelMapper } from "@/core";
import { TeamMapper } from ".";

export default class SurveyResponseMapper implements IDtoFromModelMapper {
  createDtoFromModel(model: ThesisSurvey): ResponseDto {
    const _overconfidenceMapper = new OverconfidenceMapper();
    const _generalSurveyMapper = new GeneralSurveyMapper();
    const _teamCoordinationMapper = new TeamCoordinationMapper();
    const _voiceSurveyMapper = new VoiceSurveyMapper();
    const _teamEffectivenessMapper = new TeamEffectivenessMapper();
    return {
      ..._generalSurveyMapper.createDtoFromModel(model.generalSurvey),
      ..._overconfidenceMapper.createDtoFromModel(model.overconfidenceSurvey),
      ..._teamCoordinationMapper.createDtoFromModel(
        model.teamCoordinationSurvey
      ),
      ..._voiceSurveyMapper.createDtoFromModel(model.voiceSurvey),
      ..._teamEffectivenessMapper.createDtoFromModel(
        model.teamEffectivenessSurvey
      ),
      feedback: model.feedback,
      team_id: model.activeTeam.id as string,
      // team: _teamMapper.createDtoFromModel(model.activeTeam as Team),
    };
  }
}
