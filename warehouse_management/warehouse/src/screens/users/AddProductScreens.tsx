
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors, commonStyles } from "../../../assets/style/common";

export default function AddProductScreen({ navigation }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [supplier, setSupplier] = useState("");
  const [initialQuantity, setInitialQuantity] = useState("");
  const [warehouse, setWarehouse] = useState("");

  const handleAddProduct = () => {
    console.log("Adding new product:", {
      name,
      type,
      price,
      supplier,
      initialQuantity,
      warehouse,
    });
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Add New Product</Text>
      <View style={styles.form}>
        <InputField
          icon="box"
          placeholder="Product Name"
          value={name}
          onChangeText={setName}
        />
        <InputField
          icon="tag"
          placeholder="Product Type"
          value={type}
          onChangeText={setType}
        />
        <InputField
          icon="dollar-sign"
          placeholder="Price"
          keyboardType="numeric"
          value={price}
          onChangeText={setPrice}
        />
        <InputField
          icon="truck"
          placeholder="Supplier"
          value={supplier}
          onChangeText={setSupplier}
        />
        <InputField
          icon="package"
          placeholder="Initial Quantity"
          keyboardType="numeric"
          value={initialQuantity}
          onChangeText={setInitialQuantity}
        />
        <InputField
          icon="home"
          placeholder="Warehouse"
          value={warehouse}
          onChangeText={setWarehouse}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleAddProduct}>
        <Feather name="plus" size={20} color={colors.white} />
        <Text style={styles.buttonText}>Add Product</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function InputField({ icon, ...props }) {
  return (
    <View style={styles.inputContainer}>
      <Feather
        name={icon}
        size={20}
        color={colors.primary}
        style={styles.inputIcon}
      />
      <TextInput style={styles.input} {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  ...commonStyles,
  form: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  button: {
    ...commonStyles.button,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    ...commonStyles.buttonText,
    marginLeft: 10,
  },
});
