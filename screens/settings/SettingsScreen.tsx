import React from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { MiVentana } from "../../components/MiVentana";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import {} from "react-native-gesture-handler";
import { TextSmall } from "../../components/Utils";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useColorScheme } from "nativewind";
const SettingsScreen = ({ route }) => {
  const { colorScheme } = useColorScheme();
  console.log(colorScheme);
  const navigation = useNavigation();
  const listSettings = [
    {
      name: "Crear zona de mesas",
      page: "CrearZona",
      icono: "calendar-today",
      id: 1,
    },
    {
      name: "Añadir mesa en una zona",
      page: "CrearMesaEnZona",
      icono: "table-restaurant",
      id: 2,
    },
    {
      name: "Gestionar categorias de productos",
      page: "CrearPizarra",
      icono: "dashboard-customize",
      id: 3,
    },
    {
      name: "Gestionar Productos en venta",
      page: "PizarraPanel",
      icono: "collections",
      id: 4,
    },
    {
      name: "Gestion de Empleados",
      page: "PizarraPanel",
      icono: "contact-page",
      id: 5,
    },
    { name: "Gestion Caja", page: "PizarraPanel", icono: "calculate", id: 6 },
  ];
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        className="bg-cardBackground dark:bg-dark-background p-4 flex-row justify-between"
        onPress={() => navigation.navigate(item.page)}
      >
        <Text className="font-sans text-xl text-textPrimary dark:text-dark-textPrimary ">
          {item.name}
        </Text>
        <MaterialIcons
          name={item.icono}
          size={30}
          color={colorScheme == "dark" ? "white" : "black"}
        />
      </TouchableOpacity>
    );
  };
  return (
    <MiVentana>
      <FlatList
        data={listSettings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ gap: 2 }}
      />
    </MiVentana>
  );
};

export default SettingsScreen;
