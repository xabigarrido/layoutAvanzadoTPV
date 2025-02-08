import React from "react";
import { View, Text, Pressable } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

const DarkModeSwitch = ({ isDarkMode, toggleColorScheme }) => {
  const translateX = useSharedValue(isDarkMode ? 30 : 0);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: withSpring(translateX.value) }],
  }));

  return (
    <Pressable
      onPress={() => {
        toggleColorScheme(); // Activa el cambio de tema
        translateX.value = isDarkMode ? 0 : 30; // Animación
      }}
      className="flex-row items-center p-2"
    >
      <Text className="text-lg font-bold mr-3">{isDarkMode ? "☀️" : "🌙"}</Text>
      <View className="w-[60px] h-[30px] bg-gray-300 dark:bg-gray-700 rounded-full p-1">
        <Animated.View
          className="w-[28px] h-[28px] bg-white dark:bg-black rounded-full shadow-md"
          style={animatedStyles}
        />
      </View>
    </Pressable>
  );
};

export default DarkModeSwitch;
