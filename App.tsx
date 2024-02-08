import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { LogingScreen } from './src/screens/LogingScreen';
import { StackNavigator } from './src/navigator/StackNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <LogingScreen/> */}
      <StackNavigator/>
    </NavigationContainer>
  )
}

export default App;