// Record<K, T>
// < Key, Type >

// Record 사용 전
// interface Score {
//   "1": "A" | "B" | "C" | "D";
//   "2": "A" | "B" | "C" | "D";
//   "3": "A" | "B" | "C" | "D";
//   "4": "A" | "B" | "C" | "D";
// }

// const score: Score = {
//   "1": "A",
//   "2": "B",
//   "3": "C",
//   "4": "D",
// };

// 단순하게 Record 적용
// const score: Record<"1" | "2" | "3" | "4", "A" | "B" | "C" | "D"> = {
//   "1": "A",
//   "2": "B",
//   "3": "C",
//   "4": "D",
// };

// 학년, 성적 부분 타입으로 분리

type Score = "A" | "B" | "C" | "D";
type Grade = "1" | "2" | "3" | "4";

const score: Record<Grade, Score> = {
  "1": "A",
  "2": "B",
  "3": "C",
  "4": "D",
};
