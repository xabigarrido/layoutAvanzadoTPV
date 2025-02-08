import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const CustomButton = ({
  color,
  texto,
  onPress,
  ancho = "w-[45%]",
  textColor = "text-white",
}) => {
  return (
    <TouchableOpacity
      className={`${color} ${ancho} p-4 rounded-md h-[50px]`}
      onPress={onPress}
    >
      <Text className={`font-sans text-xl text-center font-bold ${textColor}`}>
        {texto}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
