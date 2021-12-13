import { SurveyResponseDto } from "@/contracts";
import { ThesisSurvey } from "@/models";
import GeneralSurveyMapper from "./GeneralSurveyMapper";
import OverconfidenceMapper from "./OverconfidenceMapper";
import TeamCoordinationMapper from "./TeamCoordinationMapper";
import TeamEffectivenessMapper from "./TeamEffectivenessMapper";
import VoiceSurveyMapper from "./VoiceSurveyMapper";
import {IDtoFromModelMapper} from "@/core";

export default class SurveyResponseMapper implements IDtoFromModelMapper {

  createDtoFromModel(model: ThesisSurvey): SurveyResponseDto {
    const _overconfidenceMapper = new OverconfidenceMapper();
    const _generalSurveyMapper = new GeneralSurveyMapper();
    const _teamCoordinationMapper = new TeamCoordinationMapper();
    const _voiceSurveyMapper = new VoiceSurveyMapper();
    const _teamEffectivenessMapper = new TeamEffectivenessMapper();
    return {
      general_survey_response: _generalSurveyMapper.createDtoFromModel(
        model.generalSurvey
      ),
      overconfidence_survey_response: _overconfidenceMapper.createDtoFromModel(
        model.overconfidenceSurvey
      ),
      team_coordination_survey_response: _teamCoordinationMapper.createDtoFromModel(
        model.teamCoordinationSurvey
      ),
      voice_survey_responses: model.voiceSurveys.map((survey) =>
        _voiceSurveyMapper.createDtoFromModel(survey)
      ),
      team_effectiveness_survey_response: _teamEffectivenessMapper.createDtoFromModel(
        model.teamEffectivenessSurvey
      ),
      feedback_response: model.feedback,
    };
  }
}
