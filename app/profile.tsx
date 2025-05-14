import { Text, View, StyleSheet, Image, Pressable } from 'react-native';

export default function profile() {
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image 
            source={require('../assets/images/Icon.webp')}
            style={styles.icon}
          />
        </View>
        <View style={styles.userInfo}>
          <Text style={{paddingTop: "8%", color: "#24273a"}}>Just Someone</Text>
          <Text style={{paddingBottom: "8%", color: "#24273a"}}>justsomeone@gmail.com</Text>
        </View>
      </View>
      <View style={styles.center}>
        <Pressable style={styles.button}>
          <Text>Logout</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c6a0f6",
  },
  center: {
    backgroundColor: "#f5bde6",
    height: "100%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#8aadf4",
    width: "12%",
    height: "4%",
    marginTop: "2%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  imageContainer: {
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    alignItems: "flex-end",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 80,
  },
  userInfo: {
    flex: 1,
    justifyContent: "space-around",
    height: 80,
    paddingLeft: 10,
  },
  icon: {
    width: 75,
    height: 75,
    backgroundColor: "#ed8796",
    borderRadius: 40,
  }
})
