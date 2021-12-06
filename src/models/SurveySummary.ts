import {
  LikertResponse,
  LikertScaleQuestion,
  MinMaxQuestion,
  MinMaxResponse,
} from "./common";
import TeamMember from "./TeamMember";
import TeamWithOrganizationInfo from "./TeamWithOrganizationInfo";
import ThesisSurvey from "./ThesisSurvey";
import VoiceSurvey from "./VoiceSurvey";

export default class SurveySummary {
  name!: string;
  teamName!: string;
  organizationName!: string;
  age!: string;
  sex!: string;
  tenure!: string;
  teamHistory!: string;
  voice!: SubjectedQuestionSheetPreview[];
  teamCoordination!: QuestionAndAnswerPreview[];
  overconfidence!: QuestionAndAnswerPreview[];
  teamEffectiveness!: QuestionAndAnswerPreview[];

  constructor(
    activeParticipant: TeamMember,
    teamInfo: TeamWithOrganizationInfo,
    survey: ThesisSurvey
  ) {
    this.name = activeParticipant.name || StringRepresentation.emptyResponse();
    this.teamName = teamInfo.name;
    this.organizationName = teamInfo.organizationName;
    this.age = StringRepresentation.forAnnualDuration(
      survey.generalSurvey.age as number
    );
    this.sex = StringRepresentation.forSex(survey.generalSurvey.sex as string);
    this.tenure = StringRepresentation.forAnnualDuration(
      survey.generalSurvey.tenure as number
    );
    this.teamHistory = StringRepresentation.forMonthlyDuration(
      survey.generalSurvey.teamHistory as number
    );
    this.teamCoordination = [
      StringRepresentation.forLikertScaleQuestion(
        survey.teamCoordinationSurvey.q1
      ),
      StringRepresentation.forLikertScaleQuestion(
        survey.teamCoordinationSurvey.q2
      ),
      StringRepresentation.forLikertScaleQuestion(
        survey.teamCoordinationSurvey.q3
      ),
      StringRepresentation.forLikertScaleQuestion(
        survey.teamCoordinationSurvey.q4
      ),
      StringRepresentation.forLikertScaleQuestion(
        survey.teamCoordinationSurvey.q5
      ),
    ];
    this.voice = survey.voiceSurveys.map((survey) => {
      return summarizeVoiceSurvey(survey);
    });

    this.overconfidence = [
      StringRepresentation.forMinMaxQuestion(survey.overconfidenceSurvey.q01),
      StringRepresentation.forMinMaxQuestion(survey.overconfidenceSurvey.q02),
      StringRepresentation.forMinMaxQuestion(survey.overconfidenceSurvey.q03),
      StringRepresentation.forMinMaxQuestion(survey.overconfidenceSurvey.q04),
      StringRepresentation.forMinMaxQuestion(survey.overconfidenceSurvey.q05),
      StringRepresentation.forMinMaxQuestion(survey.overconfidenceSurvey.q06),
      StringRepresentation.forMinMaxQuestion(survey.overconfidenceSurvey.q07),
      StringRepresentation.forMinMaxQuestion(survey.overconfidenceSurvey.q08),
      StringRepresentation.forMinMaxQuestion(survey.overconfidenceSurvey.q09),
      StringRepresentation.forMinMaxQuestion(survey.overconfidenceSurvey.q10),
    ];
  }
}

class QuestionAndAnswerPreview {
  text!: string;
  answer!: string;
}

class SubjectedQuestionSheetPreview {
  subject!: string;
  questions: QuestionAndAnswerPreview[] = [];
}

function proxyToPlainObject(state: object): object {
  return JSON.parse(JSON.stringify(state));
}
function summarizeVoiceSurvey(
  survey: VoiceSurvey
): SubjectedQuestionSheetPreview {
  const plainObject = proxyToPlainObject(survey) as VoiceSurvey;
  return {
    subject: plainObject.evaluatedParticipant.name,
    questions: [
      StringRepresentation.forLikertScaleQuestion(plainObject.q1),
      StringRepresentation.forLikertScaleQuestion(plainObject.q2),
      StringRepresentation.forLikertScaleQuestion(plainObject.q3),
      StringRepresentation.forLikertScaleQuestion(plainObject.q4),
      StringRepresentation.forLikertScaleQuestion(plainObject.q5),
      StringRepresentation.forLikertScaleQuestion(plainObject.q6),
    ],
  };
}

class StringRepresentation {
  static forAnnualDuration(value: number) {
    return `${value} سال`;
  }
  static forMonthlyDuration(value: number) {
    return `${value} ماه`;
  }
  static forLikertScaleQuestion(
    question: LikertScaleQuestion
  ): QuestionAndAnswerPreview {
    return {
      text: question.text,
      answer: this.forLikertResponse(question.response),
    };
  }
  static forLikertResponse(response: LikertResponse): string {
    // console.log(typeof response.value);
    switch (response.value) {
      case 1:
        return FIVE_STEP_LIKERT_SCALE_VALUES[1];
      case 2:
        return FIVE_STEP_LIKERT_SCALE_VALUES[2];
      case 3:
        return FIVE_STEP_LIKERT_SCALE_VALUES[3];
      case 4:
        return FIVE_STEP_LIKERT_SCALE_VALUES[4];
      case 5:
        return FIVE_STEP_LIKERT_SCALE_VALUES[5];
      default:
        return this.emptyResponse();
    }
  }

  static forMinMaxQuestion(question: MinMaxQuestion): QuestionAndAnswerPreview {
    return {
      text: question.text,
      answer: this.forMinMaxResponse(question.response),
    };
  }
  static forMinMaxResponse(response: MinMaxResponse): string {
    if (!response.max || !response.min) {
      return this.emptyResponse();
    }
    return `بین ${response.min} تا ${response.max}`;
  }
  static forSex(value: string) {
    switch (value) {
      case "male":
        return "آقا";
      case "female":
        return "خانم";

      default:
        return this.emptyResponse();
    }
  }

  static emptyResponse(): string {
    return "پاسخ نداده اید";
  }
}

const FIVE_STEP_LIKERT_SCALE_VALUES = {
  1: "شدیدا مخالفم",
  2: "مخالفم",
  3: "نه مخالف و نه موافقم",
  4: "موافقم",
  5: "شدیدا موافقم",
};
