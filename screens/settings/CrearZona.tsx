import React from "react";
import { View, Platform, ScrollView } from "react-native";
import Header from "../../components/Header";
import CustomButton from "../../components/CustomButton";
import { MiVentana } from "../../components/MiVentana";
import { useNavigation } from "@react-navigation/native";
import { Box, MiInput, TextBig, TextSmall } from "../../components/Utils";
const CrearZona = () => {
  const navigation = useNavigation();
  // const newZona = {
  //   id: 1,
  //   name,
  //   empresa,
  //   idEmpresa,
  //   zonaCreadaPor,
  //   zonaCreadaDia,
  //   habilitada: true,
  // };
  return (
    <MiVentana>
      <View className="justify-center items-center bg-background dark:bg-dark-background">
        {/* <Header /> */}
        <View className=" w-full items-center">
          <Box addClass={"mt-10"}>
            <TextBig>Nueva Zona</TextBig>
            <TextSmall addClass={"mb-4"}>
              Crea tantas zonas como necesite (Ej: Sala, Terraza, Zona Vip,
              Barra 1, Jardines, Lobby, Sala de eventos)
            </TextSmall>
            <MiInput placeholder={"Ingrese el nombre de la zona..."} />
            <CustomButton
              texto={"Crear Zona"}
              color={"bg-buttonPrimary mt-5"}
            />
          </Box>
        </View>
      </View>
    </MiVentana>
  );
};

export default CrearZona;
