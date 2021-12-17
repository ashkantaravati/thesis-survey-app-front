import {LikertResponse} from "@/models/common/LikertResponse";
import TeamMember from "../TeamMember";

export class LikertResponseWithRatee extends LikertResponse{
    evaluatedParticipant!: TeamMember;

    constructor(ratee:TeamMember) {
        super();
        this.value =NaN
        this.evaluatedParticipant = ratee;

    }
}
