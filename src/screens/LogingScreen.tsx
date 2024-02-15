import React, { useState } from 'react'
import { StatusBar, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { TitleComnponents } from '../components/TitleComnponents'
import { ERROR_COLOR, PRIMARY_COLOR } from '../comomns/ConstantsColor'
import { BobyComponents } from '../components/BobyComponents'
import { InputComponents } from '../components/InputComponents';
import { ButtoComponents } from '../components/ButtoComponents'
import { TextInput } from 'react-native-gesture-handler'
import Snackbar from 'react-native-snackbar'
import { StackScreenProps } from '@react-navigation/stack'
import { stylesGlobal } from '../theme/appTheme'
import { User } from '../navigator/StackNavigator';
import { CommonActions, useNavigation } from '@react-navigation/native'
import { ShowSnackbar,  hasErrorFormLogin, verifyEistUser } from '../comomns/authValidation'



export interface  LoginForm{
  username: string
  password: string
  hasError: boolean
}
interface LoginProps{
  user:User[]
  
}
//interface Props extends StackScreenProps<any,any>{};

export const LogingScreen = ({ user}:LoginProps) => {

  //Hook de navegacion
  const navigation = useNavigation();

  const[form, setForm]=useState<LoginForm>({
    username: '',
    password: '',
    hasError: false
  })
  //const[hiddenpassword, sethiddenpassword]= useState(true);

  //hoook - sesincriptar el password
  const[hiddenPassword , sethiddenPassword]=useState(true)
  //funcion que cambie el valor del useState
  
  const handlesChangeText=( name: string, value: string )=>{
    
    //console.log(key);
    //console.log(value);

    //validar formulario
    
      setForm(prevState=>({
        ...prevState,
        [name]: value,
        
      }))
   
    } 
  //funcion que envie los datos del formulario
  const handleSendInfo=()=>{
    if( hasErrorFormLogin(form)){
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
    //console.log(form);
    // llamar funcion que verifica si el usuario existe
    const existUser=verifyEistUser(user, form)
      if ( ! existUser || existUser.password !== form.password){
        
        ShowSnackbar('Usuario y/o password incorrecto', ERROR_COLOR)
        return
        

      }
    
    
  //console.log(form);
  navigation.dispatch(CommonActions.navigate('HomeScreen'))
  }

  //funsion para verificar si existe el usuario
  


  
    
  return (
   <View>
    <StatusBar backgroundColor={PRIMARY_COLOR}/>
    <TitleComnponents title="PetPulse"/>
    <BobyComponents>
      <Text style={stylesGlobal.textWelcom}>Inicia sesion </Text>
      <Text  style={stylesGlobal.textDescription}>Ingrese su correo electronico</Text> 
      <InputComponents placeholder='Usuario'name={'username'} onChangeText={handlesChangeText} hasError={form.hasError}/>
      <InputComponents 
      placeholder='Contraseña' 
      name={'password'} 
      onChangeText={handlesChangeText} 
      isPassword = {hiddenPassword} 
      hasIcon = {true} 
      acctionIcon={() => sethiddenPassword(!hiddenPassword)} 
      hasError={form.hasError}/>
      
      
      <ButtoComponents title="Iniciar Sesion" onPress={ handleSendInfo}/>
      <TouchableOpacity   
        onPress={ ()=> navigation.dispatch(CommonActions.navigate('RegisterScreen'))}>
        <Text style={stylesGlobal.textRegister} >
          No tienes una cuenta registrate
        </Text>
      </TouchableOpacity>
      
    </BobyComponents>

   </View>
  )

  
}

