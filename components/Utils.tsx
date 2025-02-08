import { Text, View, TextInput, ActivityIndicator } from "react-native";
import { useColorScheme } from "nativewind";
import React, { Children, forwardRef } from "react";
import { useAuth } from "../Context/AuthContext";

export const Box = ({ children, addClass, large = "w-[95%]" }) => {
  return (
    <View
      className={`bg-cardBackground ${large} p-5 dark:bg-dark-cardBackground rounded-lg mb-4 ${addClass}`}
    >
      {children}
    </View>
  );
};

export const TextSmall = ({ children, addClass }) => {
  return (
    <Text
      className={`font-sans text-textPrimary dark:text-dark-textPrimary text-xl ${addClass}`}
    >
      {children}
    </Text>
  );
};
export const TextBig = ({ children, addClass }) => {
  return (
    <Text
      className={`font-sans text-textPrimary dark:text-dark-textPrimary text-3xl font-bold ${addClass}`}
    >
      {children}
    </Text>
  );
};

export const MiInput = forwardRef<TextInput, MiInputProps>(
  (
    { placeholder, onChangeText, addClass, value, onBlur, onSubmitEditing },
    ref
  ) => {
    const { colorScheme } = useColorScheme();

    return (
      <TextInput
        ref={ref} // Ahora el ref se pasa al TextInput
        onSubmitEditing={onSubmitEditing}
        placeholder={placeholder}
        onBlur={onBlur}
        onChangeText={onChangeText}
        placeholderTextColor={colorScheme == "dark" ? "white" : "black"}
        className={`bg-inputBackground dark:bg-dark-inputBackground p-4 rounded-lg w-[80%] font-sans dark:text-white ${addClass}`}
        value={value}
      />
    );
  }
);
export const SeparadorH = ({ large = "w-[70%]" }) => {
  return <View className={`border dark:border-white mb-4 ${large}`}></View>;
};

export const ErroresInput = ({ touched, errors }) =>
  touched && errors && <Text className="font-sans text-red-500">{errors}</Text>;

export const PantallaLoading = ({ children }) => {
  const { userOnline, loadingPage } = useAuth();
  if (loadingPage == true) {
    return (
      <View className="w-full h-screen mb-20 justify-center items-center bg-background dark:bg-dark-background">
        <Box large={"w-[50%]"} addClass={"items-center"}>
          <ActivityIndicator size={"large"} />
          <TextSmall>Cargando</TextSmall>
        </Box>
      </View>
    );
  } else {
    return children;
  }
};
export const PantallaLoadingPage = () => {
  return (
    <View className="w-full h-screen mb-20 justify-center items-center bg-background dark:bg-dark-background">
      <Box large={"w-[50%]"} addClass={"items-center"}>
        <ActivityIndicator size={"large"} />
        <TextSmall>Cargando</TextSmall>
      </Box>
    </View>
  );
};

export const gestionarErroresLogin = (error) => {
  switch (error) {
    case "auth/invalid-email":
      return "El formato del correo electrónico no es válido.";
    case "auth/user-disabled":
      return "El usuario ha sido deshabilitado por un administrador.";
    case "auth/user-not-found":
      return "No se encontró un usuario con ese correo electrónico.";
    case "auth/wrong-password":
      return "La contraseña proporcionada no es correcta.";
    case "auth/email-already-in-use":
      return "Ya existe una cuenta registrada con ese correo electrónico.";
    case "auth/weak-password":
      return "La contraseña es demasiado débil.";
    case "auth/invalid-credential":
      return "Las credenciales proporcionadas no son válidas.";
    default:
      return "Ha habido un error";
  }
};
