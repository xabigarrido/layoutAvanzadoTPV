import React, { useState } from "react";
import { View, Platform, ScrollView, Text, Image } from "react-native";
import { useColorScheme } from "nativewind";
import Header from "../components/Header";
import CustomButton from "../components/CustomButton";
import { MiVentana } from "../components/MiVentana";
import { useNavigation } from "@react-navigation/native";
import { Box, TextBig, TextSmall } from "../components/Utils";
import Luffy from "../assets/luffy.jpg";
import DarkModeSwitch from "../components/DarkModeSwitch";
const HomeScreen = () => {
  const navigation = useNavigation();
  const { toggleColorScheme, colorScheme } = useColorScheme();

  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <MiVentana>
      <View className="justify-center items-center bg-background dark:bg-dark-background">
        <Header />
        <Box>
          <View className="flex-row justify-between items-center">
            <View>
              <TextBig>Bienvenido Xabi</TextBig>
              <View className="flex-row">
                <TextSmall>Estado actual: </TextSmall>
                <Text className="text-green-800 font-bold font-sans text-xl dark:text-green-400">
                  Trabajando
                </Text>
              </View>
              <TextSmall>08/02/2025 - 01:28</TextSmall>
            </View>
            <View className="items-center">
              <Image
                source={Luffy}
                style={{ width: 70, height: 70, borderRadius: 20 }}
              />
              <DarkModeSwitch
                isDarkMode={colorScheme === "dark"}
                toggleColorScheme={toggleColorScheme}
              />
            </View>
          </View>
        </Box>
      </View>
    </MiVentana>
  );
};

export default HomeScreen;
