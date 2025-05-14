import React, { useState, useEffect } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { Text, View, StyleSheet, Image, Pressable, ActivityIndicator } from 'react-native'; 
import { useRoute } from "@react-navigation/native";
import get from '../components/get.tsx';

export default function Profile() {
  const route = useRoute();
  const id = route.response?.id; // Recupera o ID passado na navegação

  const [nome, setNome] = useState<string>(''); 
  const [email, setEmail] = useState<string>(''); 
  const [loading, setLoading] = useState<boolean>(true); 
  const [error, setError] = useState<string | null>(null); 
  console.log(`ID on profile: ${id}`);

  useEffect(() => {
    async function fetchUserData() {
      try {
        setLoading(true); 
        setError(null); 
        
        console.log(`id: ${id}`);
        const userData = await get({ id });

        if (userData && typeof userData === 'object' && userData.nome && userData.email) {
          setNome(userData.nome);
          setEmail(userData.email);
        } else {
          console.error("Erro ao buscar os dados do usuário.");
          setError("Não foi possível carregar os dados do usuário."); 
        }
      } catch (err) {
        console.error("Erro ao buscar os dados:", err);
        setError("Ocorreu um erro ao buscar os dados.");
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchUserData(); 

  }, [id]);

  if (loading) {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" color="#24273a" />
        <Text style={{ color: "#24273a", marginTop: 10 }}>Carregando perfil...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text style={{ color: 'red' }}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/Icon.webp')}
            style={styles.icon}
          />
        </View>
        <View style={styles.userInfo}>
          <Text style={{ paddingTop: "8%", color: "#24273a" }}>{nome}</Text>
          <Text style={{ paddingBottom: "8%", color: "#24273a" }}>{email}</Text>
        </View>
      </View>
      <View style={styles.center}>
        <Pressable style={styles.button}>
          <Text>Delete</Text>
        </Pressable>
      </View>
    </View>
  );
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
    justifyContent: 'center', 
    flex: 1, 
  },
  button: {
    backgroundColor: "#8aadf4",
    width: "50%", 
    height: 50, 
    marginTop: "10%", 
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#24273a",
  },
  imageContainer: {
    width: 100, 
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10, 
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 100, 
    backgroundColor: "#c6a0f6", 
    paddingHorizontal: 10,
    paddingTop: 10, 
  },
  userInfo: {
    flex: 1,
    justifyContent: "center", 
    paddingLeft: 10,
  },
  icon: {
    width: 80, 
    height: 80,
    backgroundColor: "#ed8796",
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "#24273a",
  }
});
