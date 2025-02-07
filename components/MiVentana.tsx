import { SafeAreaView, Platform, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useColorScheme } from "nativewind";

export const MiVentana = ({ children }) => {
  const { colorScheme } = useColorScheme();
  const colorStatusBarClaro = "#EAEAEA";
  const colorStatusBarOscuro = "#1F1F1F";
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor:
          Platform.OS == "ios" && colorScheme == "dark"
            ? colorStatusBarOscuro
            : colorStatusBarClaro,
      }}
    >
      <LinearGradient
        colors={
          colorScheme == "light"
            ? [colorStatusBarClaro, "#FFFFFF"]
            : [colorStatusBarOscuro, "#121212"]
        }
        start={{ x: 0, y: 0 }} // Empieza desde la parte superior
        end={{ x: 0, y: 1 }} // Termina en la parte inferior
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        }}
      />
      {Platform.OS == "android" && (
        <StatusBar
          backgroundColor={
            colorScheme == "dark" ? colorStatusBarOscuro : colorStatusBarClaro
          }
          barStyle={colorScheme == "dark" ? "light-content" : "dark-content"}
        />
      )}
      {children}
    </SafeAreaView>
  );
};
