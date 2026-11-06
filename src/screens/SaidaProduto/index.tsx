import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { CustomInput } from "../../components/CustomInput";
import { styles } from "../CadastroProduto/styles"; // Reaproveitando os estilos base
import { theme } from "../../theme";

export function SaidaProduto() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons
          name="archive-arrow-up-outline"
          size={40}
          color={theme.colors.primary}
        />
        <Text style={styles.title}>Saída de Produto</Text>
      </View>

      <CustomInput label="Nome do Produto" placeholder="Buscar produto..." iconName="search" />
      <CustomInput label="Quantidade de Saída" placeholder="0" iconName="outbox" keyboardType="numeric" />
      
      {/* Campo simulando uma lista suspensa (estático) */}
      <CustomInput label="Motivo da Retirada" placeholder="Venda" iconName="arrow-drop-down-circle" editable={false} />

      <TouchableOpacity style={[styles.button, { backgroundColor: '#D32F2F' }]} activeOpacity={0.8}>
        <Text style={styles.buttonText}>REGISTRAR SAÍDA</Text>
      </TouchableOpacity>
    </View>
  );
}