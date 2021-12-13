import {SurveySummary} from "@/models";
import {SITE_TITLE} from "@/constants";
import {GetterTree} from "vuex";
import {State} from "@/store/state";

const getters:GetterTree<State, State> = {
    surveySummary: (state) => {
        return new SurveySummary(
            state.activeParticipant,
            state.teamInfo,
            state.survey
        );
        // TODO: depend only on Survey
    },
        stats: (state) => {
        return state.stats;
    },
        teamSize: (state) => {
        return state.teamInfo.members.length;
    },
        NotYetRespondedTeamMembers: (state) => {
        return state.teamInfo.members.filter(
            (member) => member.hasParticipated === false
        );
    },
        surveyTitle: function () {
            return SITE_TITLE;
        },
}

export  default getters