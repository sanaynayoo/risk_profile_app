// __tests__/App.test.tsx
import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

// utils
import questionnaireReducer from '../src/store/store';
import { QuestionDemo } from '../src/utils/data/QuestionDemo';
import QuestionnaireScreen from '../src/screens/QuestionnaireScreen';
import ResultScreen from '../src/screens/ResultScreen';

// Mock Redux store
const store = configureStore({
  reducer: {
    questionnaire: questionnaireReducer,
  },
});

// Helper function to render component with providers
const renderWithProviders = (component: React.ReactNode) => {
  return render(<Provider store={store}>{component}</Provider>);
};

// Helper function to mock navigation
const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(() => ({ navigate: mockNavigate })),
}));

describe('QuestionnaireScreen and ResultScreen', () => {
  beforeEach(() => {
    // Setup initial state for tests
    store.dispatch({
      type: 'questionnaire/setAnswer',
      payload: { questionIndex: 0, score: 1 }
    });
    store.dispatch({
      type: 'questionnaire/setAnswer',
      payload: { questionIndex: 1, score: 2 }
    });
    store.dispatch({
      type: 'questionnaire/setAnswer',
      payload: { questionIndex: 2, score: 3 }
    });
    store.dispatch({
      type: 'questionnaire/setAnswer',
      payload: { questionIndex: 3, score: 4 }
    });
    store.dispatch({
      type: 'questionnaire/setAnswer',
      payload: { questionIndex: 4, score: 5 }
    });
    store.dispatch({ type: 'questionnaire/calculateScore' });
  });

  describe('QuestionnaireScreen', () => {
    test('renders questions and options correctly', () => {
      const { getByText } = renderWithProviders(<QuestionnaireScreen />);

      QuestionDemo.forEach((list, index) => {
        expect(getByText(`${index + 1}`)).toBeTruthy();
        expect(getByText(list.question)).toBeTruthy();
        list.options.forEach(option => {
          expect(getByText(option.title)).toBeTruthy();
        });
      });
    });

    test('renders submit button when all answers are provided', () => {
      const { getByText } = renderWithProviders(<QuestionnaireScreen />);
      expect(getByText('Submit')).toBeTruthy();
    });
  });

  describe('ResultScreen', () => {
    test('renders profile and score correctly', () => {
      const { getByText } = renderWithProviders(<ResultScreen />);

      expect(getByText('Your Risk')).toBeTruthy();
      expect(getByText('High')).toBeTruthy(); 
      expect(getByText('Your Score')).toBeTruthy();
      expect(getByText('15')).toBeTruthy(); 
    });

    test('renders the answers list correctly', () => {
      const { getByText } = renderWithProviders(<ResultScreen />);

      QuestionDemo.forEach((list, index) => {
        expect(getByText(`${index + 1}. ${list.question}`)).toBeTruthy();
        list.options.forEach(option => {
          if (option.score === store.getState().questionnaire.answers[index]?.score) {
            expect(getByText(option.title)).toBeTruthy();
          }
        });
      });
    });
  });
});
