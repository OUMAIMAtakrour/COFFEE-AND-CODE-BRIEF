
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors, commonStyles } from "../../../assets/style/common";

export default function LoginScreen({ navigation }) {
  const [code, setCode] = useState("");

  const handleLogin = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Feather name="box" size={64} color={colors.primary} />
        <Text style={styles.logoText}>StockMaster</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter your secret code"
        secureTextEntry
        value={code}
        onChangeText={setCode}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  ...commonStyles,
  container: {
    ...commonStyles.container,
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  logoText: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.primary,
    marginTop: 10,
  },
  input: {
    ...commonStyles.input,
    fontSize: 18,
  },
  button: {
    ...commonStyles.button,
    marginTop: 20,
  },
});
