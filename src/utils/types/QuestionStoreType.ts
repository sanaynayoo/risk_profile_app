export type Answer = {
  questionIndex: number;
  score: number;
};

export type QuestionnaireState = {
  answers: Answer[];
  score: number;
  profile: string;
};
