import React from 'react'
import { Text, View } from 'react-native'
import { TitleComnponents } from '../../components/TitleComnponents'
import { BobyComponents } from '../../components/BobyComponents'
import { FlatList } from 'react-native-gesture-handler'
import { CardProducts } from './components/CardProducts'


export interface Product{
    
    id: number
    name: string
    price: number
    stock: number
    pathImage: string
}
const product=[
    {id: 1,name: 'Labrador Retriever',price: 100,stock: 10,pathImage:'https://www.superpet.ec/wp-content/uploads/2020/07/labrador-5.jpg.webp'},
    {id: 2,name: 'Pastor Alemán',price: 100,stock: 10,pathImage:'https://images.hola.com/imagenes/estar-bien/20191004150785/pastor-aleman-raza-de-perro-caracteristicas/0-728-57/raza-de-perro-pastor-aleman-m.jpg?tx=w_680'},
    {id: 3,name: 'Golden Retriever',price: 100,stock: 10,pathImage:'https://www.superpet.ec/wp-content/uploads/2021/11/golden-3.jpg.webp'},
    {id: 4,name: 'Bulldog Francés',price: 100,stock: 10,pathImage:'https://i.pinimg.com/originals/dc/4a/ec/dc4aec26a13e0dcdcf4d5701cd99ead9.png'},
    {id: 5,name: 'Rottweiler',price: 100,stock: 10,pathImage:'https://www.superpet.ec/wp-content/uploads/2022/10/rottweiler-6.jpg.webp'},
    {id: 6,name: 'Golden Retriever(Stalin) con falta de amor',price: 100 ,stock: 10,pathImage:'https://media-lim1-1.cdn.whatsapp.net/v/t61.24694-24/420728966_342859388646729_6728349875994167604_n.jpg?ccb=11-4&oh=01_AdTTglCzgDuTtpEl_NfMQsF4c5791gb4f6KqkZKjPhxb1w&oe=65DB26A7&_nc_sid=e6ed6c&_nc_cat=101'},
    {id: 7,name: 'Rottweiler',price: 100,stock: 10,pathImage:'https://www.superpet.ec/wp-content/uploads/2022/10/rottweiler-6.jpg.webp'},
    {id: 8,name: 'Rottweiler',price: 100,stock: 10,pathImage:'https://www.superpet.ec/wp-content/uploads/2022/10/rottweiler-6.jpg.webp'},
]
export const HomeScreen = () => {

  return (
    <View>
        <TitleComnponents title="Productos"/>
        <BobyComponents>
            <FlatList 
            keyExtractor={item => item.id.toString()}
            data={product}
            renderItem={({item})=> <CardProducts Product={item}/>}

            />
        </BobyComponents>
    </View>
  )
}
