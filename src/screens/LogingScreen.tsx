import React, { useState } from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { TitleComnponents } from '../components/TitleComnponents'
import { PRIMARY_COLOR } from '../comomns/ConstantsColor'
import { BobyComponents } from '../components/BobyComponents'
import { InputComponents } from '../components/InputComponents';
import { ButtoComponents } from '../components/ButtoComponents'
import { TextInput } from 'react-native-gesture-handler'



interface LoginForm{
  username: string
  password: string
}
export const LogingScreen = () => {

  const[form, setForm]=useState<LoginForm>({
    username: '',
    password: ''
  })
  const[numero, setNumero]= useState(0);

  //hoook - sesincriptar el password
  const[hiddenPassword , sethiddenPassword]=useState(true)
  //funcion que cambie el valor del useState
  
  const handlesChangeText=( name: string, value: string)=>{
    //console.log(key);
    //console.log(value);
    setForm(prevState=>({
      ...prevState,
      [name]: value
    }))
  }
  //funcion que envie los datos del formulario
  const handleSendInfo=()=>{
    console.log(form);
    console.log(numero);
  }
    
  return (
   <View>
    <StatusBar backgroundColor={PRIMARY_COLOR}/>
    <TitleComnponents title="PetPulse"/>
    <BobyComponents>
      <Text style={styles.textWelcom}>Inicia sesion </Text>
      <Text  style={styles.textDescription}>Ingrese su correo electronico</Text> 
      <InputComponents placeholder='Usuarioosss'name={'username'} onChangeText={handlesChangeText}/>
      <InputComponents 
      placeholder='Contraseña' 
      name={'password'} 
      onChangeText={handlesChangeText} 
      isPassword = {hiddenPassword} 
      hasIcon = {true} 
      acctionIcon={() => sethiddenPassword(!hiddenPassword)}  />
      <TextInput 
      placeholder='numero'
      keyboardType='default'
      onChangeText={(numero:string)=>setNumero(parseInt(numero))} />
      
      <ButtoComponents title="Iniciar Sesion" onPress={ handleSendInfo}/>
      
    </BobyComponents>

   </View>
  )
}

const styles = StyleSheet.create({
 textWelcom:{
    color:'white',
    fontSize:20,
    marginTop:10

    
 },
 textDescription:{
    color:'white',
    fontSize:15,
    marginTop:10
 }

})
