import { View, StyleSheet, Image } from "react-native"
import { Text, Button } from "react-native-paper"
import { MaterialCommunityIcons } from "@expo/vector-icons"

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-16SAiIIQYp7OmgZtZ9EKgGMOYn8GAl.png",
        }}
        style={styles.illustration}
      />
      <Text style={styles.title}>Welcome to</Text>
      <Text style={styles.subtitle}>Education App</Text>

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Login/Signup</Text>
        <Button
          mode="contained"
          style={styles.googleButton}
          icon={() => <MaterialCommunityIcons name="google" size={24} color="white" />}
          onPress={() => navigation.navigate("Home")}
        >
          Sign in with Google
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  illustration: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
  },
  loginContainer: {
    marginTop: 40,
  },
  loginText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  googleButton: {
    backgroundColor: "#2196F3",
    padding: 5,
  },
})

