import React from "react";
import { Text, View, Platform, ScrollView } from "react-native";
import Header from "../components/Header";
import CustomButton from "../components/CustomButton";
import { MiVentana } from "../components/MiVentana";
import { useNavigation } from "@react-navigation/native";
const Box = () => {
  const navigation = useNavigation();

  return (
    <View className="bg-cardBackground w-[80%] p-5 dark:bg-dark-cardBackground rounded-lg mb-4">
      <Text className="font-sans text-textPrimary dark:text-dark-textPrimary text-3xl font-bold">
        Titulo noticia
      </Text>
      <CustomButton
        texto={"Agregar"}
        color={"bg-buttonPrimary dark:bg-dark-buttonPrimary"}
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
};

const HomeScreen = () => {
  return (
    <MiVentana>
      <ScrollView style={{ flexGrow: 1, marginBottom: 50 }}>
        <View className="justify-center items-center bg-background dark:bg-dark-background">
          <Header />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
        </View>
      </ScrollView>
    </MiVentana>
  );
};

export default HomeScreen;
