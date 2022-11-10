import { View, Text, StyleSheet } from 'react-native'

export default function Title(props){
  return (
      <View style={styles.posi}>
        <Text style={styles.title}>{props.text}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  posi: {
    width: 168,
    left: 96,
    height: 27,
  },
  title: {
    fontWeight: 700,
    fontFamily:'Inter',
    fontSize: 22,
  }
})