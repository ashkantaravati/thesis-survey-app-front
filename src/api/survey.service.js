class TeamViewModel {
  constructor(teamId, teamName, organization, members) {
    this.id = teamId;
    this.name = teamName;
    this.members = members;
    this.organization = organization;
  }
}
class OrganizationViewModel {
  constructor(orgId, orgName) {
    this.id = orgId;
    this.name = orgName;
  }
}

const MOCK_ORG = new OrganizationViewModel(
  "47d126c8-8966-4a2e-9f55-a8a25d014431",
  "ارتباطات نوین پیام‌آوران پارسیان هومان"
);
const MOCK_TEAMS = [
  new TeamViewModel(
    "29ce0188-8688-4ba1-b79f-3b2b76786529",
    "تیم شماره ۱",
    MOCK_ORG,
    ["اشکان طراوتی", "علیرضا احمدی", "مرجان", "سرکار خانم مرادی"]
  ),
  new TeamViewModel(
    "452b55a1-2f14-4c00-bc2a-1251910b3e37",
    "تیم شماره ۲",
    MOCK_ORG,
    ["پسر دولپر", "دختر دیزاینر شماره ۲", "علی آقا"]
  ),
];

const mockApiCall = (data, time) =>
  new Promise((resolve) => setTimeout(() => resolve(data), time));
export async function getTeamInfo(teamId) {
  return mockApiCall(
    MOCK_TEAMS.find((team) => team.teamId === teamId),
    1500
  );
}
