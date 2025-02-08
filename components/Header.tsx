import React from "react";
import { Text, View } from "react-native";
import { useColorScheme } from "nativewind";
import CustomButton from "./CustomButton";

const Header = () => {
  const { toggleColorScheme, colorScheme } = useColorScheme();

  const handlerMode = () => {
    toggleColorScheme();
  };
  return (
    <View className="">
      <CustomButton
        color={"bg-red-500"}
        ancho="w-[50%]"
        texto={"Change Mode"}
        onPress={handlerMode}
      />
    </View>
  );
};

export default Header;
