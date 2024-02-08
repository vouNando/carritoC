import { createStackNavigator } from '@react-navigation/stack';
import { LogingScreen } from '../screens/LogingScreen';
import { PRIMARY_COLOR } from '../comomns/ConstantsColor';

const Stack = createStackNavigator();

export const StackNavigator =()=> {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle:{
          backgroundColor: PRIMARY_COLOR

        }
      }}>
      <Stack.Screen name="LoginScreen" options={{headerShown: false}} component={LogingScreen} />
     
    </Stack.Navigator>
  );
}