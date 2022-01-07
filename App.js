import React from "react";
import { useFonts } from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import Account from "./src/screens/Account";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import SearchScreen from "./src/screens/SearchScreen";
import BookShelf from "./src/screens/BookShelf";
import colors from "./colors";
import BookInfoScreen from "./src/screens/BookInfoScreen";
import AppLoading from "expo-app-loading";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const [loaded] = useFonts({
    // AltBold: require("./assets/fonts/Proxima Nova Alt Bold.otf"),
    // AltLight: require("./assets/fonts/Proxima Nova Alt Light.otf"),
    // AltThin: require("./assets/fonts/Proxima Nova Alt Thin.otf"),
    // Black: require("./assets/fonts/Proxima Nova Black.otf"),
    // Bold: require("./assets/fonts/Proxima Nova Bold.otf"),
    // ExtraBold: require("./assets/fonts/Proxima Nova Extrabold.otf"),
    // Thin: require("./assets/fonts/Proxima Nova Thin.otf"),
    Regular: require("./assets/fonts/ProximaNova-Regular.otf"),
  });

  const TabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "grey",
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Entypo name="home" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Feather name="search" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Bookshelf"
          component={BookShelf}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Ionicons name="book" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  if (!loaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
          <Stack.Screen name="BookInfo" component={BookInfoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.backgroundColor,
  },
});
