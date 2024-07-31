import {QuestionsType} from '../types/QuestionType';

export const QuestionDemo: QuestionsType[] = [
  {
    question: 'How would you describe your investment experience?',
    options: [
      {title: 'Novice', score: 1},
      {title: 'Intermediate', score: 2},
      {title: 'Advanced', score: 3},
    ],
  },
  {
    question: 'Investment Duration.',
    options: [
      {title: 'Short-term (less than 1 year)', score: 1},
      {title: 'Medium-term (1-5 years)', score: 2},
      {title: 'Long-term (more than 5 years)', score: 3},
    ],
  },

  {
    question: 'How comfortable are you with taking risks?',
    options: [
      {title: 'Very risk averse', score: 1},
      {title: 'Somewhat risk-averse', score: 2},
      {title: 'Neutral Somewhat risk-tolerant', score: 3},
      {title: 'Very risk-tolerant', score: 4},
    ],
  },

  {
    question: 'What percentage of your income are you willing to invest?',
    options: [
      {title: 'Less than 10%', score: 1},
      {title: '10-25%', score: 2},
      {title: '25-50%', score: 3},
      {title: 'More than 50%', score: 4},
    ],
  },

  {
    question:
      'How would you react to a sudden drop in the value of your investments?',
    options: [
      {title: 'Panic and sell immediately', score: 1},
      {title: 'Monitor closely and consider selling', score: 2},
      {title: 'Hold and wait for recovery', score: 3},
      {title: 'See it as a buying opportunity and invest more', score: 4},
    ],
  },
];
