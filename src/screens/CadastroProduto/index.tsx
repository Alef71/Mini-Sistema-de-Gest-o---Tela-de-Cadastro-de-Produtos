import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardTypeOptions,
} from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { theme } from "../../theme";

interface InputProps {
  label: string;
  placeholder: string;
  iconName: React.ComponentProps<typeof MaterialIcons>["name"];
  keyboardType?: KeyboardTypeOptions;
}

const CustomInput = ({
  label,
  placeholder,
  iconName,
  keyboardType = "default",
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
      />
    </View>
  </View>
);

export function CadastroProduto() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons
          name="archive-check-outline"
          size={40}
          color={theme.colors.primary}
        />
        <Text style={styles.title}>Novo Produto</Text>
      </View>

      <CustomInput
        label="Nome"
        placeholder="Nome do Produto"
        iconName="local-offer"
      />
      <CustomInput
        label="Preço"
        placeholder="R$ 0,00"
        iconName="attach-money"
        keyboardType="numeric"
      />
      <CustomInput
        label="Quantidade de Entrada"
        placeholder="0"
        iconName="inventory"
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text style={styles.buttonText}>CADASTRAR PRODUTO</Text>
      </TouchableOpacity>
    </View>
  );
}
