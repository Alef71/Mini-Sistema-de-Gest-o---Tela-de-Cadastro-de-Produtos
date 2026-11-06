import React from "react";
import { View, Text, TextInput, KeyboardTypeOptions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { theme } from "../../theme";

interface InputProps {
  label: string;
  placeholder: string;
  iconName: React.ComponentProps<typeof MaterialIcons>["name"];
  keyboardType?: KeyboardTypeOptions;
  editable?: boolean;
}

export const CustomInput = ({
  label,
  placeholder,
  iconName,
  keyboardType = "default",
  editable = true,
}: InputProps) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.inputBorder}>
      <MaterialIcons
        name={iconName}
        size={24}
        color={theme.colors.placeholder}
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.placeholder}
        keyboardType={keyboardType}
        editable={editable}
      />
    </View>
  </View>
);