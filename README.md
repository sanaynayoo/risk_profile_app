# React Native Risk Profile App

This React Native app helps determine a user's risk profile based on a set of questionnaire answers. It uses TypeScript, Redux Toolkit for state management, and React Navigation for navigation.

## Project Structure

- **screens**: Contains the main screens of the app.
  - `QuestionnaireScreen.tsx`: Screen where users answer questions.
  - `ResultScreen.tsx`: Screen displaying the user's risk profile and score.

- **store**: Contains Redux slices and store configuration.
  - `index.ts`: Configures the Redux store.
  - `store.ts`: Manages questionnaire state and actions.

- **navigations**: Contains navigation configuration.
  - `AppNavigator.tsx`: Defines the app's navigation structure.

- **utils/data**: Contains mock data used in the app.
  - `QuestionDemo.ts`: Mock questions and options for the questionnaire.

- **utils/type**: Contains TypeScript types used in the app.
  - `QuestionStoreType.ts`: Types for the Redux store questionnaire.
  - `QuestionType.ts`: Types for the questionnaire.

- **assets/icons**: Contains icon SVG assets used in the app.

## Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/sanaynayoo/risk_profile_app.git
   cd risk_profile_app
   ```
2. Install dependencies:
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```
3. Link Native Dependencies:
    ```bash
    npx pod-install
    ```

## Run on a Simulator or Device:

4. For Android, use:
    ```bash
    npx react-native run-android # For Android
    ```
5. For IOS, use:
    ```bash
    npx react-native run-ios # For Ios
    ```
   or

   ```bash
    yarn start   # run on the Xcode
   ```

6. Running Tests:
    ```bash
    npm test
    ```
    or
    ```bash
    yarn test
    ```

### Reach me at:

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sanaynayoo/)

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sanaynayoo/)