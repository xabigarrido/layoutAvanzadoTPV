import { Text, View, TextInput } from "react-native";
import { useColorScheme } from "nativewind";
import React, { Children, forwardRef } from "react";

export const Box = ({ children, addClass }) => {
  return (
    <View
      className={`bg-cardBackground w-[95%] p-5 dark:bg-dark-cardBackground rounded-lg mb-4 ${addClass}`}
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

// export const MiInput = ({
//   placeholder,
//   onChangeText,
//   addClass,
//   value,
//   onBlur,
//   ref,
//   onSubmitEditing,
// }) => {
//   const { colorScheme } = useColorScheme();

//   return (
//     <TextInput
//       placeholder={placeholder}
//       onBlur={onBlur}
//       onChangeText={onChangeText}
//       placeholderTextColor={colorScheme == "dark" ? "white" : "black"}
//       className={`bg-inputBackground dark:bg-dark-inputBackground p-4 rounded-lg w-[80%] font-sans dark:text-white ${addClass}`}
//       value={value}
//       ref={ref}
//       onSubmitEditing={onSubmitEditing}
//     />
//   );
// };

// export const MiInput = forwardRef(
//   (
//     { placeholder, onChangeText, addClass, value, onBlur, onSubmitEditing },
//     ref
//   ) => {
//     const { colorScheme } = useColorScheme();

//     return (
//       <TextInput
//         ref={ref} // Ahora el ref se pasa al TextInput
//         onSubmitEditing={onSubmitEditing}
//         placeholder={placeholder}
//         onBlur={onBlur}
//         onChangeText={onChangeText}
//         placeholderTextColor={colorScheme == "dark" ? "white" : "black"}
//         className={`bg-inputBackground dark:bg-dark-inputBackground p-4 rounded-lg w-[80%] font-sans dark:text-white ${addClass}`}
//         value={value}
//       />
//     );
//   }
// );

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
