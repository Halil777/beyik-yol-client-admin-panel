import { faker } from "@faker-js/faker";
import { sample } from "lodash";

const home = [
  ...Array(5).map((_, index) => ({
    id: faker.datatype.uuid(),
    avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
    name: faker.name.fullName(),
    company: faker.company.name(),
    isVerified: faker.datatype.boolean(),
    status: sample(["active", "banned"]),
    role: sample([
      "Leader",
      "Hr Manager",
      "UI designer",
      "Project Manager",
      "Backend Developer",
      "Full Stack Developer",
    ]),
  })),
];

export default home;
