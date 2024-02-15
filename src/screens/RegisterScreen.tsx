import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { TitleComnponents } from '../components/TitleComnponents'
import { BobyComponents } from '../components/BobyComponents'
import { stylesGlobal } from '../theme/appTheme'
import { InputComponents } from '../components/InputComponents'
import { ButtoComponents } from '../components/ButtoComponents'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { User } from '../navigator/StackNavigator';
import { ShowSnackbar, generateId, hasErrorFormRegister, verifyEistUser } from '../comomns/authValidation'

import { useNavigation} from '@react-navigation/native';
import { ERROR_COLOR, PRIMARY_COLOR } from '../comomns/ConstantsColor'

export interface RegisterForm{
  username: string
  email: string
  password: string
  hasError: boolean
}


interface RegisterProps{
  userLogin: User[];
  setUsersLogin:(user: User)=>void;
  
}
export const RegisterScreen = ( {userLogin, setUsersLogin}:RegisterProps) => {

  //hoook - sesincriptar el password
  const[hiddenPassword , sethiddenPassword]=useState(true)

  const[form, setForm]=useState<RegisterForm>({
    username: '',
    email:'',
    password: '',
    hasError: false
  });

  const navigation = useNavigation() // Agregar esta línea

  //funcion para guardar los usuarios
  const handlerSaveUser=()=>{
      if( hasErrorFormRegister(form)){
        setForm(prevState=>({
          ...prevState,
          
          hasError: true
        }))
        return;
        
      }
  
      setForm(prevState=>({
        ...prevState,
        
        hasError: false
  
      }))

      const existsUser=verifyEistUser(userLogin, form)
      if(existsUser){
        ShowSnackbar('El usuario ya existe', ERROR_COLOR)
        return;
      

    }
    const newUser: User={
      id: generateId(userLogin),
      ...form
    }

    setUsersLogin(newUser)
    ShowSnackbar('Usuario creado correctamente', PRIMARY_COLOR)
    console.log(newUser);
    navigation.goBack() // Cambiar esta línea
  
  
  }

  const handlesChangeText=( name: string, value: string )=>{
    
    //console.log(key);
    //console.log(value);

    //validar formulario
    
      setForm(prevState=>({
        ...prevState,
        [name]: value,
        
      }))
   
  }
  return (
    <View>
        <TitleComnponents title='Register'/>
        <BobyComponents>
          <Text style= {stylesGlobal.textWelcom}>Esta muy cerca!</Text>
          <Text style= {stylesGlobal.textDescription}> Realizar tus compras de manera rapida y segura</Text>
          <InputComponents 
           placeholder = 'conrreo electronico'
           onChangeText={ handlesChangeText}
           name = {'email'}
           hasError= {form.hasError} />
           <InputComponents 
           placeholder = 'usuraio'
           onChangeText={ handlesChangeText}
           name = {'username'}
           hasError= {form.hasError} /> <h3></h3>
           <InputComponents 
           placeholder = 'Password'
           onChangeText={ handlesChangeText}
           name = {'password'}
           hasError= {form.hasError}
           isPassword = {hiddenPassword}
           hasIcon={true}
           acctionIcon={()=> sethiddenPassword(!hiddenPassword)}
           
            />
        </BobyComponents>
        <ButtoComponents title='Register' onPress={handlerSaveUser} />
        <TouchableOpacity   
          onPress={() => navigation.goBack()} >
          <Text style={stylesGlobal.textRegister}> Ya tienes una cuenta?</Text>
        </TouchableOpacity>
    </View>
  )
}