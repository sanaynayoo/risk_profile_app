import { configureStore } from '@reduxjs/toolkit';
import questionnaireReducer from './store';

export const store = configureStore({
  reducer: {
    questionnaire: questionnaireReducer,
  },
});

// Export RootState type
export type RootState = ReturnType<typeof store.getState>;