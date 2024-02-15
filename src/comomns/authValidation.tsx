import Snackbar from "react-native-snackbar"
import { User } from "../navigator/StackNavigator"

import { ERROR_COLOR } from "./ConstantsColor"
import { LoginForm } from "../screens/LogingScreen"
import { RegisterForm } from "../screens/RegisterScreen"


//funsion para veificar si existen campos vacios
export const hasErrorFormLogin=(form:LoginForm)=>{
    return form.username === '' || form.password === ''
}
export const hasErrorFormRegister=(form:RegisterForm)=>{
  return form.email=== '' || form.password === '' || form.username === ''
}

// funcionn pra verificar si el usuario existe
export const verifyEistUser=(user :User[], form:LoginForm)=>{
    return user.filter( user => user.username === form.username && user.password === form.password)[0]
}

//funcion para que el stanackbar sea reutilizado
export const ShowSnackbar=(message:string, background:string)=>{
    Snackbar.show({
        text: message,
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor:background,
        textColor: 'white'
      });
    
}
//FUNSION QUE GENERAR LOS IDS DE LOS NUEOS USUARIOS

export const generateId=( users:User[])=>{

  const getIdUser= users.map( user => user.id)
  return Math.max(...getIdUser)+1
    
}