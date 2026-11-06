import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../theme';

import { ControleEstoque } from '../screens/ControleEstoque';
import { CadastroProduto } from '../screens/CadastroProduto';
import { SaidaProduto } from '../screens/SaidaProduto';

const Tab = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Remove o cabeçalho genérico superior
        tabBarActiveTintColor: theme.colors.primary, // Cor quando ativo
        tabBarInactiveTintColor: theme.colors.placeholder, // Cor quando inativo
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
          backgroundColor: theme.colors.white,
        },
      }}
    >
      <Tab.Screen 
        name="Estoque" 
        component={ControleEstoque} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="warehouse" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen 
        name="Entrada" 
        component={CadastroProduto} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="archive-arrow-down" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen 
        name="Saída" 
        component={SaidaProduto} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="archive-arrow-up" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
}