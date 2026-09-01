import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { CadastroProduto } from './src/screens/CadastroProduto';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <CadastroProduto />
    </>
  );
}