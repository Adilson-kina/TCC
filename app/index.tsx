import { Text, View, StyleSheet, Pressable } from "react-native";
import { Link } from 'expo-router';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function heightPercent(percentage:number){
  return windowHeight * (percentage / 100);
}

function widthPercent(percentage:number){
  return windowWidth * (percentage / 100);
}

export default function Index() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <Link href="/login"> Login</Link>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecfcec',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  button:{
    backgroundColor: "#007912",
    width: widthPercent(12),
    height: heightPercent(4),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 50,
  }
})
