import { Text, View, TextInput } from "react-native";
export const Box = ({ children, addClass }) => {
  return (
    <View
      className={`bg-cardBackground w-[90%] p-5 dark:bg-dark-cardBackground rounded-lg mb-4 ${addClass}`}
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

export const MiInput = ({ placeholder, onChangeText }) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      className="bg-inputBackground dark:bg-dark-inputBackground p-4 rounded-lg w-[80%] font-sans text-dark-inputText"
    />
  );
};
