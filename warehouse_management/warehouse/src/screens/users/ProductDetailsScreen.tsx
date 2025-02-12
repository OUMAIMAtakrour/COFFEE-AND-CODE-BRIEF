import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors, commonStyles } from "../../../assets/style/common";

const mockProduct = {
  id: "1",
  name: "Sample Product",
  type: "Type A",
  price: 19.99,
  quantity: 50,
  supplier: "Supplier Inc.",
  image: "https://via.placeholder.com/150",
};

export default function ProductDetailsScreen({ route, navigation }) {
  const { productId, barcode } = route.params;
  const [quantity, setQuantity] = useState("");

  const product = mockProduct;

  const handleAddStock = () => {
    console.log(`Adding ${quantity} to stock`);
  };

  const handleRemoveStock = () => {
    console.log(`Removing ${quantity} from stock`);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <View style={styles.infoContainer}>
        <InfoItem icon="tag" label="Type" value={product.type} />
        <InfoItem
          icon="dollar-sign"
          label="Price"
          value={`$${product.price.toFixed(2)}`}
        />
        <InfoItem
          icon="package"
          label="Quantity"
          value={product.quantity.toString()}
        />
        <InfoItem icon="truck" label="Supplier" value={product.supplier} />
      </View>

      <View style={styles.stockManagement}>
        <TextInput
          style={styles.quantityInput}
          placeholder="Quantity"
          keyboardType="numeric"
          value={quantity}
          onChangeText={setQuantity}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.addButton]}
            onPress={handleAddStock}
          >
            <Feather name="plus" size={20} color={colors.white} />
            <Text style={styles.buttonText}>Add Stock</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.removeButton]}
            onPress={handleRemoveStock}
          >
            <Feather name="minus" size={20} color={colors.white} />
            <Text style={styles.buttonText}>Remove Stock</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function InfoItem({ icon, label, value }) {
  return (
    <View style={styles.infoItem}>
      <Feather name={icon} size={20} color={colors.primary} />
      <Text style={styles.infoLabel}>{label}:</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ...commonStyles,
  productImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 20,
    textAlign: "center",
  },
  infoContainer: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  infoLabel: {
    marginLeft: 10,
    fontSize: 16,
    color: colors.text,
    opacity: 0.7,
  },
  infoValue: {
    marginLeft: "auto",
    fontSize: 16,
    color: colors.text,
    fontWeight: "bold",
  },
  stockManagement: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 15,
  },
  quantityInput: {
    ...commonStyles.input,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    ...commonStyles.button,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  addButton: {
    backgroundColor: colors.secondary,
    marginRight: 10,
  },
  removeButton: {
    backgroundColor: colors.danger,
  },
  buttonText: {
    ...commonStyles.buttonText,
    marginLeft: 5,
  },
});
