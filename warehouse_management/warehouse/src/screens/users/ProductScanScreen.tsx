import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors, commonStyles } from "../../../assets/style/common";

export default function ProductScanScreen({ navigation }) {
  const handleScanComplete = () => {
    navigation.navigate("ProductDetails", { barcode: "123456789" });
  };

  return (
    <View style={styles.container}>
      <View style={styles.scannerOverlay}>
        <View style={styles.scannerTarget} />
      </View>
      <Text style={styles.instructions}>
        Position the barcode within the frame to scan
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleScanComplete}>
        <Feather
          name="camera"
          size={24}
          color={colors.white}
          style={styles.buttonIcon}
        />
        <Text style={styles.buttonText}>Simulate Scan</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  ...commonStyles,
  container: {
    ...commonStyles.container,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  scannerOverlay: {
    width: 250,
    height: 250,
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  scannerTarget: {
    width: 200,
    height: 2,
    backgroundColor: colors.primary,
  },
  instructions: {
    color: colors.white,
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    ...commonStyles.button,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonIcon: {
    marginRight: 10,
  },
});
