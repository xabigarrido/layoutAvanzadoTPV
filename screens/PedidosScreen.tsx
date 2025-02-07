import React from "react";
import { Text, View } from "react-native";
import { MiVentana } from "../components/MiVentana";

const PedidosScreen = ({ route }) => {
  console.log(route.params);
  return (
    <MiVentana>
      <Text>Hello mundo pedidos</Text>
    </MiVentana>
  );
};

export default PedidosScreen;
