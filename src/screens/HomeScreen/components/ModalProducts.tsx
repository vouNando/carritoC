import React from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import {Product} from '../HomeScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from '../../../../../App/src/theme/appTheme';

interface Props {
  Product: Product;
  isVisible: boolean;
  changeVisible: () => void;
}
export const ModalProducts = ({Product, isVisible, changeVisible}: Props) => {
  //hook para tomar el tmaño de la pantalla
  const {width} = useWindowDimensions();
  return (
    <Modal visible={isVisible} animationType="fade" transparent={true}>
      <View style={style.root}>
        <View style={{...style.content, width: width * 0.8}}>
          <View style={style.header}>
            <Text style={style.title}> {Product.name} </Text>
            <View style={style.iconClose}>
            <Icon
              name="close"
              size={30}
              color="#000"
              onPress={() => changeVisible()}
            />
          </View>
          </View>

         
        </View>
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  content: {
    //flex: 1,
    // margin: 25,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    padding: 10,
  },
  iconClose: {
    flex: 1,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#12372A',
  },
});
