import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QuestionnaireState , Answer} from '../utils/types/QuestionStoreType';

const initialState: QuestionnaireState = {
  answers: [],
  score: 0,
  profile: ''
};

const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    setAnswer: (state, action: PayloadAction<Answer>) => {
      state.answers[action.payload.questionIndex] = action.payload;
    },
    calculateScore: (state) => {
      const scores = state.answers.map(answer => answer.score);
      state.score = scores.reduce((a, b) => a + b, 0);
      if (state.score <= 7) {
        state.profile = 'Low';
      } else if (state.score <= 14) {
        state.profile = 'Medium';
      } else {
        state.profile = 'High';
      }
    }
  }
});

export const { setAnswer, calculateScore } = questionnaireSlice.actions;

export default questionnaireSlice.reducer;
