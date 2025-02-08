import React from "react";
import { View, Text, Pressable } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { useColorScheme } from "nativewind";

const DarkModeSwitch = () => {
  const { toggleColorScheme, colorScheme } = useColorScheme();
  const translateX = useSharedValue(colorScheme == "dark" ? 30 : 0);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: withSpring(translateX.value) }],
  }));

  return (
    <Pressable
      onPress={() => {
        toggleColorScheme(); // Activa el cambio de tema
        translateX.value = colorScheme == "dark" ? 0 : 30; // Animación
      }}
      className="flex-row items-center p-2"
    >
      <Text className="text-lg font-bold mr-3 ">
        {colorScheme == "dark" ? "☀️" : "🌕"}
      </Text>
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
