import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors, commonStyles } from "../../../assets/style/common";

export default function HomeScreen({ navigation }) {
  const menuItems = [
    { icon: "camera", label: "Scan Product", screen: "ProductScan" },
    { icon: "list", label: "Product List", screen: "ProductList" },
    { icon: "bar-chart-2", label: "Statistics", screen: "Statistics" },
    { icon: "plus-square", label: "Add Product", screen: "AddProduct" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to StockMaster</Text>
      <View style={styles.menuGrid}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => navigation.navigate(item.screen)}
          >
            <Feather name={item.icon} size={32} color={colors.primary} />
            <Text style={styles.menuItemText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ...commonStyles,
  menuGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  menuItem: {
    width: "48%",
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    marginBottom: 16,
    elevation: 2,
  },
  menuItemText: {
    marginTop: 10,
    fontSize: 16,
    color: colors.text,
    textAlign: "center",
  },
});
