import { Text, View, StyleSheet, TextInput, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useRouter, Link } from 'expo-router';
import post from '../components/post.tsx';
import { Dimensions, Image } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function heightPercent(percentage:number){
  return windowHeight * (percentage / 100);
}

function widthPercent(percentage:number){
  return windowWidth * (percentage / 100);
}

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async () => {
    setErrorMessage("");

    const data = { email, senha };
    const response = await post(data, "login");

    if (response && response.erro) {
      setErrorMessage(response.erro);
      return;
    }
     
    if (response && response.id) {
      await AsyncStorage.setItem("userId", response.id.toString());
      router.navigate("/profile");
    }
  };

  return (
    <View style={styles.container}>
      <Image 
        style={styles.logo}
        source={require("./../assets/images/Logo.png")}
      />
      <View style={styles.form}> {/* FORM*/ }
        <View style={styles.items}>
          <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Email" />
        </View>

        <View style={styles.items}>
          <TextInput style={styles.input} value={senha} onChangeText={setSenha} secureTextEntry placeholder="Senha" />
        </View>

        <Pressable style={styles.button} onPress={handleSubmit} >
          <Text style={styles.buttonText}>Entrar</Text>
        </Pressable>
      </View>
      <View style={styles.goto}>
        <Text style={styles.gotoText}>Não possui cadastro? </Text>
        <Link href="/signup" style={styles.gotoTextLink}>Registre-se</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo:{
    height: 210,
    width: 400,
    marginTop: heightPercent(10),
    marginBottom: heightPercent(10),
  },
  gotoTextLink:{
    fontSize: heightPercent(2),
    color: "#3392FF",
  },
  gotoText:{
    fontSize: heightPercent(2),
  },
  goto:{
    flexDirection: "row",
  },
  title:{
    fontSize: 30,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  form: {
    alignItems: "center",
    gap: 25,
    padding: 50,
    width: widthPercent(100),
  },

  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#ecfcec",
  },

  items: {
    gap: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  input: {
    padding: 20,
    height: heightPercent(4),
    width: widthPercent(90),
    borderRadius: 15,
    backgroundColor: "#dadada",
    color: "#747474",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },

  button:{
    padding: 6,
    width: widthPercent(65),
    height: heightPercent(5),
    marginTop: 20,
    margin: "auto",
    marginBottom: -30,
    borderRadius: 20,
    backgroundColor: "#007912",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText:{
    fontSize: heightPercent(3),
    color: "white",
    fontWeight: "bold",
  },

  legenda:{
    fontSize: 20,
    fontWeight: "bold",
  }
})
