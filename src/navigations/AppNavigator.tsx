import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import QuestionnaireScreen from '../screens/QuestionnaireScreen';
import ResultScreen from '../screens/ResultScreen';

export type RootStackParamList = {
  Questionnaire: undefined;
  Result: undefined;
};

const AppStack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName="Questionnaire">
        <AppStack.Screen name="Questionnaire" component={QuestionnaireScreen} options={{headerTintColor:'#ffffff', statusBarColor:'#00A63B',headerStyle:{backgroundColor:'#00A63B'}}}/>
        <AppStack.Screen name="Result" component={ResultScreen}  options={{headerTintColor:'#ffffff',title:'Final Result', statusBarColor:'#00A63B',headerStyle:{backgroundColor:'#00A63B'}}}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
