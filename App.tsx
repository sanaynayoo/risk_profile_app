import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

// redux
import {store} from './src/store';
import {Provider} from 'react-redux';

// navigator
import AppNavigator from './src/navigations/AppNavigator';

const App = () => (
  <GestureHandlerRootView>
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  </GestureHandlerRootView>
);

export default App;
