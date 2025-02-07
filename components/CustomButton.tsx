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
      className={`${color} ${ancho} p-4 rounded-md `}
      onPress={onPress}
    >
      <Text className={`text-center font-bold ${textColor}`}>{texto}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
