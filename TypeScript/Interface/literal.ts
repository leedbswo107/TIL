// Literal Types
const userName1 = "Bob";
let userName2: string | number = "Tom";
userName2 = 2;

type Job = "police" | "developer" | "student";

interface User {
  name: string;
  job: Job;
}
interface HighSchoolStudent {
  name: string | number;
  grade: 1 | 2 | 3;
}
const user: User = {
  name: "Lee",
  job: "student",
};
