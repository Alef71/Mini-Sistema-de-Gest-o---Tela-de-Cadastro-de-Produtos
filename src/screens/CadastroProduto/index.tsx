import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { CustomInput } from "../../components/CustomInput";
import { styles } from "./styles";
import { theme } from "../../theme";

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

      <CustomInput label="Nome" placeholder="Nome do Produto" iconName="local-offer" />
      <CustomInput label="Preço" placeholder="R$ 0,00" iconName="attach-money" keyboardType="numeric" />
      <CustomInput label="Quantidade de Entrada" placeholder="0" iconName="inventory" keyboardType="numeric" />

      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text style={styles.buttonText}>CADASTRAR PRODUTO</Text>
      </TouchableOpacity>
    </View>
  );
}