import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import HomeScreen from "./screens/HomeScreen"
import DashboardScreen from "./screens/DashboardScreen"
import CoursesScreen from "./screens/CoursesScreen"
import ProfileScreen from "./screens/ProfileScreen"
import CourseDetailScreen from "./screens/CourseDetailsScreen"
import UpgradeScreen from "./screens/UpgradeScreen"

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#8B5CF6",
    background: "#F4F4F5",
    surface: "#FFFFFF",
    text: "#18181B",
    placeholder: "#A1A1AA",
    accent: "#10B981",
  },
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="home" size={24} color={focused ? "#8B5CF6" : "#A1A1AA"} />
          ),
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name=
            "view-dashboard" size={24} color={focused ? "#8B5CF6" : "#A1A1AA"} />
          ),
        }}
      />
      <Tab.Screen
        name="Courses"
        component={CoursesScreen}
        options={{
          tabBarIcon: ({ focused }) => ( 
            <MaterialCommunityIcons name="book-open-variant" size={24} color={focused ? "#8B5CF6" : "#A1A1AA"} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="account" size={24} color={focused ? "#8B5CF6" : "#A1A1AA"} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Main" component={TabNavigator} />
          <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
          <Stack.Screen name="Upgrade" component={UpgradeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}

