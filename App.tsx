import React, { useState } from "react";
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
import CrearZona from "./screens/settings/CrearZona";
import LoginScreen from "./screens/LoginScreen";
import RegistroScreen from "./screens/RegristroScreen";

export default function App() {
  const { colorScheme } = useColorScheme();
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();
  const [online, setOnline] = useState(false);
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
          name="CrearZona"
          component={CrearZona}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CrearMesaEnZona"
          component={AddMesaScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  };
  const AuthStack = ({ setOnline }) => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          options={{ headerShown: false }}
          children={() => <LoginScreen setOnline={setOnline} />}
        />
        <Stack.Screen
          name="RegistroScreen"
          component={RegistroScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  };
  return (
    <MiVentana>
      <NavigationContainer>
        {online == false ? (
          <AuthStack setOnline={setOnline} />
        ) : (
          <TabNavigator />
        )}
      </NavigationContainer>
    </MiVentana>
  );
}
