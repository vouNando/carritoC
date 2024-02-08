import React from 'react'
import { Text, View, StyleSheet, useWindowDimensions } from 'react-native';
import { PRIMARY_COLOR_DARK } from '../comomns/ConstantsColor';

export const BobyComponents = ( props:any) => {
    const { height}=useWindowDimensions();

  return (
    <View style={{height:height*0.80,
    ...styles.container}}>
        {props.children}
    </View>
  )
}
const styles= StyleSheet.create({
    container:{
        backgroundColor:PRIMARY_COLOR_DARK,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:40,
        paddingVertical:40,
        
    }
})