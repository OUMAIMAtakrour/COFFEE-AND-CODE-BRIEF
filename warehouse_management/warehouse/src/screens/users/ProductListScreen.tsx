
import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors, commonStyles } from "../../../assets/style/common";

const mockProducts = [
  { id: "1", name: "Product 1", type: "Type A", price: 10.99, quantity: 50 },
  { id: "2", name: "Product 2", type: "Type B", price: 15.99, quantity: 5 },
  { id: "3", name: "Product 3", type: "Type A", price: 8.99, quantity: 0 },
];

export default function ProductListScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const filteredProducts = mockProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "price") return a.price - b.price;
    if (sortBy === "quantity") return b.quantity - a.quantity;
    return 0;
  });

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.productItem,
        item.quantity === 0 && styles.outOfStock,
        item.quantity > 0 && item.quantity < 10 && styles.lowStock,
      ]}
      onPress={() =>
        navigation.navigate("ProductDetails", { productId: item.id })
      }
    >
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productType}>{item.type}</Text>
      </View>
      <View style={styles.productStats}>
        <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
        <Text style={styles.productQuantity}>Qty: {item.quantity}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search products"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <View style={styles.sortButtons}>
        <TouchableOpacity
          onPress={() => setSortBy("name")}
          style={styles.sortButton}
        >
          <Feather name="type" size={16} color={colors.primary} />
          <Text style={styles.sortButtonText}>Name</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSortBy("price")}
          style={styles.sortButton}
        >
          <Feather name="dollar-sign" size={16} color={colors.primary} />
          <Text style={styles.sortButtonText}>Price</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSortBy("quantity")}
          style={styles.sortButton}
        >
          <Feather name="package" size={16} color={colors.primary} />
          <Text style={styles.sortButtonText}>Quantity</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={sortedProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ...commonStyles,
  searchInput: {
    ...commonStyles.input,
    marginBottom: 10,
  },
  sortButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  sortButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.lightGray,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  sortButtonText: {
    marginLeft: 5,
    color: colors.primary,
    fontWeight: "bold",
  },
  list: {
    flex: 1,
  },
  productItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontWeight: "bold",
    fontSize: 16,
    color: colors.text,
  },
  productType: {
    color: colors.text,
    opacity: 0.7,
  },
  productStats: {
    alignItems: "flex-end",
  },
  productPrice: {
    fontWeight: "bold",
    color: colors.primary,
  },
  productQuantity: {
    color: colors.text,
    opacity: 0.7,
  },
  outOfStock: {
    backgroundColor: colors.danger,
  },
  lowStock: {
    backgroundColor: colors.warning,
  },
});
