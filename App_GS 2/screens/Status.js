import Constants from 'expo-constants';
import {Text, View, StyleSheet,Image, ImageBackground} from 'react-native'

import Title from '../components/Title'

export default function Status(){
  return(
  <View style={styles.container}>
    <ImageBackground source={require('../assets/image.png')} style={{width:457,backgroundColor: "rgba(0,0,0,0.5)",}}>
  <Title text='Informações e status do drone' />
  <Text>                      </Text>
  <Text>                      </Text>
  <Text>                      </Text>
  <Text>                      </Text>
  <Text>                      </Text>


  <Text style={styles.texT}> <Image
              source={require('../assets/circulo.png')}
              fadeDuration={0}
              style={{ width: 10, height: 10,alignItems: 'center', }}
            />
           Altitude: 1254 M </Text>
            <Text>                      </Text>
    <Text style={styles.texT}> <Image
              source={require('../assets/circulo.png')}
              fadeDuration={0}
              style={{ width: 10, height: 10,alignItems: 'center', }}
            />
           Distância: 2.3km </Text>
            <Text>                      </Text>
           <Text style={styles.texT}> <Image
              source={require('../assets/circulo.png')}
              fadeDuration={0}
              style={{ width: 10, height: 10,alignItems: 'center', }}
            />
           Velocidade: 42Km/h </Text>
            <Text>                      </Text>
           <Text style={styles.texT}> <Image
              source={require('../assets/circulo.png')}
              fadeDuration={0}
              style={{ width: 10, height: 10,alignItems: 'center', }}
            />
           Carga: Levando 4,2 Kg </Text>
            <Text>                      </Text>
           <Text style={styles.texT}> <Image
              source={require('../assets/circulo.png')}
              fadeDuration={0}
              style={{ width: 10, height: 10,alignItems: 'center', }}
            />
           Tempo de Vôo restante: 49Min </Text>
    </ImageBackground>
  </View>
  );
}
const styles = StyleSheet.create({

  container:{
  },
  texT:{
    paddingLeft: 10,
    height: 40,
    left: 100,
    
   borderStyle: 'solid',
   borderBottomWidth: 2,
   borderTopWidth: 0,
   borderRightWidth: 0,
   borderLeftWidth: 0,
  }
})