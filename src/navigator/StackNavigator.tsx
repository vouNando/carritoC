import { createStackNavigator } from '@react-navigation/stack';
import { LogingScreen } from '../screens/LogingScreen';
import { PRIMARY_COLOR } from '../comomns/ConstantsColor';
import { useState } from 'react';
import { RegisterScreen } from '../screens/RegisterScreen';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';

 export interface User{
  id: number
  username: string
  email: string
  password: string
}
const user: User[]=[
  { id: 1, username: 'admin', email:'fandrango@gnail.com', password: '123456'},
  {  id: 2, username: 'admin2',email:'fandrango@gnail.com', password: '123456'},
  {  id: 3, username: 'admin3',email:'fandrango@gnail.com', password: '123456'},
]
 export type RootStackParamList={
  LoginScreen: undefined;
   RegisterScreen: undefined;
   HomeScreen: undefined;
 }

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator =()=> {

  const [ userLogin, setUserLogin ] = useState(user);

  const handlerAddUser=(user:User)=>{
    
    setUserLogin([...userLogin, user]);
  }

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle:{
          backgroundColor: PRIMARY_COLOR

        }
      }}>
      <Stack.Screen name="LoginScreen" options={{headerShown: false}} children={()=><LogingScreen user={userLogin}/>} />
      <Stack.Screen name="RegisterScreen" options={{headerShown: false}} children={()=><RegisterScreen userLogin={userLogin} setUsersLogin={handlerAddUser}/>} />
      <Stack.Screen name="HomeScreen" options={{headerShown: false}} component={HomeScreen} />
    </Stack.Navigator>
  );
}