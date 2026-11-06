import React from "react";
import { View, Text, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { theme } from "../../theme";

// Componente interno para o Card estático do produto
const ProductCard = ({ name, quantity, status }: { name: string, quantity: number, status: "Em Estoque" | "Estoque Baixo" }) => {
  const isLowStock = status === "Estoque Baixo";
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.productName}>{name}</Text>
        <View style={[styles.statusBadge, { backgroundColor: isLowStock ? '#FFEBEE' : '#E8F5E9' }]}>
          <Text style={[styles.statusText, { color: isLowStock ? '#D32F2F' : '#388E3C' }]}>{status}</Text>
        </View>
      </View>
      <Text style={styles.quantityText}>Disponível: <Text style={styles.quantityValue}>{quantity} un.</Text></Text>
    </View>
  );
};

export function ControleEstoque() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons name="warehouse" size={40} color={theme.colors.primary} />
        <Text style={styles.title}>Controle de Estoque</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <ProductCard name="Monitor Dell 27''" quantity={15} status="Em Estoque" />
        <ProductCard name="Teclado Mecânico" quantity={2} status="Estoque Baixo" />
        <ProductCard name="Mouse Sem Fio" quantity={34} status="Em Estoque" />
        <ProductCard name="Cadeira Ergônomica" quantity={0} status="Estoque Baixo" />
      </ScrollView>
    </View>
  );
}