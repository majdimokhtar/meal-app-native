import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, Button } from "react-native"
import CategoriesScreen from "./screens/CategoriesScreen"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MealsOverViewScreen from "./screens/MealsOverViewScreen"
import MealDetailScreen from "./screens/MealDetailScreen"
import { createDrawerNavigator } from "@react-navigation/drawer"
import FavScreen from "./screens/FavScreen"
import Ionicons from "@expo/vector-icons/Ionicons"
import * as Font from "expo-font"

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#2a9d8f",
        },
        headerTintColor: "white",
        sceneContainerStyle: {
          backgroundColor: "#264653",
        },
        drawerContentStyle: { backgroundColor: "#3a5a40" },
        drawerInactiveTintColor: "white",
        drawerActiveBackgroundColor: "#c7f9cc",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name="list" />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorite"
        component={FavScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name="star" />
          ),
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#2a9d8f",
            },
            headerTintColor: "white",
            contentStyle: {
              backgroundColor: "#264653",
            },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              // title: "All Categories",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverViewScreen}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId
            //   return {
            //     title : catId
            //   }
            // }}
          />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={{ title: "About the Meal" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
