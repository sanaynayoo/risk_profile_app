import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

// redux & navigator
import {store} from './src/store';
import {Provider} from 'react-redux';
import AppNavigator from './src/navigations/AppNavigator';

const App = () => (
  <GestureHandlerRootView>
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  </GestureHandlerRootView>
);

export default App;
