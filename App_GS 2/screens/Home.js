
import {Text, View, StyleSheet, Image, ImageBackground} from 'react-native'
import Title from '../components/Title'
import Constants from 'expo-constants';
import React from 'react';

export default function Home(){
  return(

  <View style={styles.container}>
    <ImageBackground source={require('../assets/image.png')} style={{width:457, opacity: 50,}}>
    <Image
            source={require('../assets/camera-drone.png')}
            fadeDuration={0}
            style={{ width: 70, height: 70, left: 138, }}
          />

    <Title text='DroneControler' />
    <Text>                                                                                       </Text>
    <Text>                                                                                       </Text>
    <Text>                                                                                       </Text>
  <Text style={styles.text}> Bem vindo ao Drone Controler,aqui você pode acompanhar
    o status do seu drone, entrar em contato com a empresa e/ou falar com um de nossos
    atendentes</Text>
    <Text>                                                                                       </Text>
    <Text>                                                                                       </Text>
    <Text>                                                                                       </Text>
    <Text>                                                                                       </Text>
    <Text>                                                                                       </Text>
    <Text>                                                                                       </Text>
    <Text>                                                                                       </Text>
  <Text style={styles.tex}> <Image
            source={require('../assets/central-de-atendimento.png')}
            fadeDuration={0}
            style={{ width: 30, height: 30,alignItems: 'center', }}
          />
          Fale Conosco</Text>  
    </ImageBackground> 
  </View>
  );
}
const styles = StyleSheet.create({

  container:{
    flex: 1,
  },
  text:{
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: 500,
  },
  tex:{
    fontFamily: 'Inter',
    fontSize: 20,

  },
  
})