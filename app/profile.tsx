import { Text, View, StyleSheet, Image } from 'react-native';

export default function profile() {
  return(
    <View style={styles.container}>
      <Image 
        source={require('../assets/images/Icon.webp')}
        style={styles.icon}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0000FF"
  },
  icon: {
    width: 70,
    height: 70,
    backgroundColor: "#ff0000",
    borderRadius: "50%"
  }
})
