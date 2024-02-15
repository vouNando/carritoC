import React, { useState } from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Product} from '../HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ModalProducts } from './ModalProducts';

interface Props {
  Product: Product;
}
export const CardProducts = ({Product}: Props) => {
    //hook para control el modal
    const [showModal, setShowModal] = useState(false);
  return (
    <View>
    <TouchableOpacity onPress={() => setShowModal(!showModal)}>
    <View style={style.root}>
      <Image
        source={{uri: Product.pathImage}}
        style={{width: 100, height: 100}}
      />
      <View>
      <Text style={style.title}> {Product.name}</Text>
      <Text> precio= ${Product.price.toFixed(2)}</Text>
      </View >
      <View style={style.icon}>
      <Icon name="add-shopping-cart" size={30} color="#12372A" />
      </View>
      
    </View>
   
    </TouchableOpacity>
    <ModalProducts Product={Product} isVisible={showModal}  changeVisible={() => setShowModal(!showModal)}/>
    </View>
  );
};
const style = StyleSheet.create({
  root: {
    flexDirection:'row',
    alignItems: 'center',
    padding: 10,
    borderStyle: 'solid',
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,

    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginBottom:15
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#12372A',
  },
  icon:{
    flex: 1,
    alignItems:'flex-end'
    
  }
});
