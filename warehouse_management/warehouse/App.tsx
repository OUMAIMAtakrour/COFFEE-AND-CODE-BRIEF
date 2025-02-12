import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/screens/auth/LoginScreen";
import HomeScreen from "./src/screens/users/HomeScreen";
import ProductScanScreen from "./src/screens/users/ProductScanScreen";
import ProductListScreen from "./src/screens/users/ProductListScreen";
import ProductDetailsScreen from "./src/screens/users/ProductDetailsScreen";
import AddProductScreen from "./src/screens/users/AddProductScreens";
import StatisticsScreen from "./src/screens/users/StatisticsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} headerShown={false}/>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProductScan" component={ProductScanScreen} />
        <Stack.Screen name="ProductList" component={ProductListScreen} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
        <Stack.Screen name="AddProduct" component={AddProductScreen} />
        <Stack.Screen name="Statistics" component={StatisticsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
