import { Text, View, StyleSheet, TextInput, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Login() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
        <View style={styles.form}>
          <View style={styles.items}>
            <Text style={styles.legenda}>Campo 1:</Text>
            <TextInput style={styles.input} id="var1"></TextInput>
          </View>

          <View style={styles.items}>
            <Text style={styles.legenda}>Campo 2:</Text>
            <TextInput style={styles.input} id="var2"></TextInput>
          </View>

          <View style={styles.items}>
            <Text style={styles.legenda}>Campo 3:</Text>
            <TextInput style={styles.input} id="var3"></TextInput>
          </View>

          <View style={styles.items}>
            <Text style={styles.legenda}>Campo 4:</Text>
            <TextInput style={styles.input} id="var4"></TextInput>
          </View>

          <View style={styles.items}>
            <Text style={styles.legenda}>Campo 5:</Text>
            <TextInput style={styles.input} id="var5"></TextInput>
          </View>
          <Pressable
          style={styles.butaum}
          onPress={() => navigation.navigate('profile')}>
            <Text style={styles.bilhetin}>CADASTRAR</Text>
          </Pressable>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title:{
    fontSize: 30,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  form: {
    gap: 10,
    padding: 50,
    borderWidth: 2,
    borderRadius: 30,
    backgroundColor: "lightblue",
  },

  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "lightpink",
  },

  items: {
    gap: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  input: {
    padding: 1.5,
    borderWidth: 1,
    width: "60%",
    borderRadius: 4,
    borderColor: 'black',
  },

  butaum:{
    padding: 6,
    borderWidth: 2,
    marginTop: 20,
    margin: "auto",
    marginBottom: -30,
    borderRadius: 20,
    backgroundColor: "darkblue",
  },

  bilhetin:{
    fontSize: 13,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

  legenda:{
    fontSize: 20,
    fontWeight: "bold",
  }
})
