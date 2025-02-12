import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors, commonStyles } from "../../../assets/style/common";

const mockStats = {
  totalProducts: 150,
  totalCities: 5,
  outOfStockProducts: 12,
  totalInventoryValue: 25000,
  recentlyAddedProducts: ["Product A", "Product B", "Product C"],
  recentlyRemovedProducts: ["Product X", "Product Y"],
};

export default function StatisticsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Inventory Summary</Text>

      <View style={styles.statsGrid}>
        <StatItem
          icon="box"
          label="Total Products"
          value={mockStats.totalProducts}
        />
        <StatItem
          icon="map-pin"
          label="Total Cities"
          value={mockStats.totalCities}
        />
        <StatItem
          icon="alert-triangle"
          label="Out of Stock"
          value={mockStats.outOfStockProducts}
        />
        <StatItem
          icon="dollar-sign"
          label="Inventory Value"
          value={`$${mockStats.totalInventoryValue.toLocaleString()}`}
        />
      </View>

      <View style={styles.recentActivity}>
        <Text style={styles.subtitle}>Recently Added Products</Text>
        {mockStats.recentlyAddedProducts.map((product, index) => (
          <Text key={index} style={styles.listItem}>
            <Feather name="plus-circle" size={16} color={colors.secondary} />{" "}
            {product}
          </Text>
        ))}

        <Text style={styles.subtitle}>Recently Removed Products</Text>
        {mockStats.recentlyRemovedProducts.map((product, index) => (
          <Text key={index} style={styles.listItem}>
            <Feather name="minus-circle" size={16} color={colors.danger} />{" "}
            {product}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

function StatItem({ icon, label, value }) {
  return (
    <View style={styles.statItem}>
      <Feather name={icon} size={24} color={colors.primary} />
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ...commonStyles,
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  statItem: {
    width: "48%",
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 15,
    alignItems: "center",
    marginBottom: 15,
  },
  statValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text,
    marginVertical: 5,
  },
  statLabel: {
    fontSize: 14,
    color: colors.text,
    opacity: 0.7,
    textAlign: "center",
  },
  recentActivity: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 15,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.text,
    marginTop: 15,
    marginBottom: 10,
  },
  listItem: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 5,
  },
});
