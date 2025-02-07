import React from "react";
import { Text, View } from "react-native";
import { MiVentana } from "../../components/MiVentana";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
const ProfileScreen = ({ route }) => {
  const navigation = useNavigation();
  return (
    <MiVentana>
      <Text className="font-sans">Perfil de usuario</Text>
      <CustomButton
        texto={"Pedidos ->"}
        color={"bg-red-500"}
        onPress={() => navigation.navigate("Pedidos", { pepe: "maria" })}
      />
    </MiVentana>
  );
};

export default ProfileScreen;
