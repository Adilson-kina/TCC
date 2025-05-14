import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { Text, View, StyleSheet, Image, Pressable, ActivityIndicator } from 'react-native'; // Import ActivityIndicator for loading state
import get from '../components/get.tsx';

// Remove async from component definition
export default function Profile() {
  // Use state to manage the data
  const [nome, setNome] = useState<string>(''); // Initialize with empty string or null
  const [email, setEmail] = useState<string>(''); // Initialize with empty string or null
  const [loading, setLoading] = useState<boolean>(true); // State to track loading
  const [error, setError] = useState<string | null>(null); // State to handle errors

  // Use useEffect to fetch data after the component mounts
  useEffect(() => {
    async function fetchUserData() {
      try {
        setLoading(true); // Start loading
        setError(null); // Clear previous errors

        // Call the get function - it now returns the user object or false
        const userData = await get({ id: 1 });

        if (userData && typeof userData === 'object' && userData.nome && userData.email) {
          // Update state with fetched data
          setNome(userData.nome);
          setEmail(userData.email);
        } else {
           // Handle cases where data is false (fetch failed) or incomplete
           console.error("Failed to fetch user data or data structure is incorrect.");
           setError("Não foi possível carregar os dados do usuário."); // Set an error message
           setNome('Usuário Desconhecido'); // Provide fallback data
           setEmail('email@desconhecido.com');
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError("Ocorreu um erro ao buscar os dados."); // Set an error message
         setNome('Usuário Desconhecido'); // Provide fallback data
         setEmail('email@desconhecido.com');
      } finally {
        setLoading(false); // Stop loading regardless of success or failure
      }
    }

    fetchUserData(); // Call the async function inside useEffect

  }, []); // The empty dependency array [] ensures this effect runs only once after the initial render

  // You can render different things based on loading or error state
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
        {/* Optionally add a retry button */}
      </View>
    );
  }


  // Render the profile once data is loaded
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
          {/* Display state variables */}
          <Text style={{paddingTop: "8%", color: "#24273a"}}>{nome}</Text>
          <Text style={{paddingBottom: "8%", color: "#24273a"}}>{email}</Text>
        </View>
      </View>
      <View style={styles.center}>
        <Pressable style={styles.button}>
          <Text>Logout</Text>
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
    height: "100%", // This might make the center view take the *rest* of the height below the header
    alignItems: "center",
    justifyContent: 'center', // Center content vertically in the center view
    flex: 1, // Make the center view take available space
  },
  button: {
    backgroundColor: "#8aadf4",
    width: "50%", // Use percentage relative to parent width
    height: 50, // Fixed height is often better for buttons
    marginTop: "10%", // Adjusted margin
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#24273a",
  },
  imageContainer: {
    width: 100, // Fixed width for image container
    justifyContent: "center",
    alignItems: "center",
    // alignItems: "flex-end", // This is redundant if width is fixed and content is centered
    paddingHorizontal: 10, // Add some padding
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 100, // Increased header height slightly
    backgroundColor: "#c6a0f6", // Ensure header has background
    paddingHorizontal: 10,
    paddingTop: 10, // Add some top padding
  },
  userInfo: {
    flex: 1, // Take remaining space
    justifyContent: "center", // Center text vertically
    paddingLeft: 10,
  },
  icon: {
    width: 80, // Increased icon size
    height: 80, // Increased icon size
    backgroundColor: "#ed8796",
    borderRadius: 40, // Half of width/height for perfect circle
    borderWidth: 1,
    borderColor: "#24273a", // Fixed incomplete color code
  }
});
