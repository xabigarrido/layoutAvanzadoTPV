import React from "react";
import { View, Text, SafeAreaView, Platform, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import { MiVentana } from "./components/MiVentana";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "./screens/settings/ProfileScreen";
import PedidosScreen from "./screens/PedidosScreen";
import SettingsScreen from "./screens/settings/SettingsScreen";
import "./global.css";
import MesasScreen from "./screens/MesasSceen";
import AddMesaScreen from "./screens/settings/AddMesaScreen";

export default function App() {
  const { colorScheme } = useColorScheme();
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();
  const TabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false, // 🔹 Oculta el texto
          tabBarStyle: {
            position: "absolute",
            backgroundColor: colorScheme == "dark" ? "#121212" : "white",
            height: 50,
            borderTopWidth: 0,
          },
          tabBarItemStyle: {
            flex: 1, // 🔹 Distribuye el espacio entre los botones
            top: 5,
          },
          tabBarIcon: ({ color, size, focused }) => {
            let iconName;
            if (route.name === "Inicio") {
              iconName = focused ? "home" : "home-outline";
              return <Ionicons name={iconName} size={30} color={color} />;
            } else if (route.name === "Settings") {
              iconName = focused ? "settings" : "settings-outline";
              return <Ionicons name={iconName} size={30} color={color} />;
            } else if (route.name === "MesasScreen") {
              iconName = focused ? "table-restaurant" : "table-restaurant";
              return <MaterialIcons name={iconName} size={30} color={color} />;
            }

            // Si no se cumple ninguna de las condiciones anteriores, no mostrar nada.
            return null;
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="MesasScreen" component={MesasScreen} />

        <Tab.Screen name="Inicio" component={HomeScreen} />
        <Tab.Screen name="Settings" component={ConfigStack} />
      </Tab.Navigator>
    );
  };
  const ConfigStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddMesa"
          component={AddMesaScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pedidos"
          component={PedidosScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  };
  return (
    <MiVentana>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </MiVentana>
  );
}
