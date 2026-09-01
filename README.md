# 📱 Mini Sistema de Gestão - Tela de Cadastro de Produtos

Interface desenvolvida em **React Native** com **Expo** e **TypeScript** para registrar a entrada de novos itens no estoque de uma empresa.

---

## 📌 Requisitos Atendidos

- **Cabeçalho Corporativo:** Ícone temático (`archive-check-outline`) acompanhado do título "Novo Produto".
- **Formulário com Ícones:**
  - **Nome do Produto:** Ícone de etiqueta (`local-offer`).
  - **Preço de Venda:** Ícone de cifrão (`attach-money`).
  - **Quantidade de Entrada:** Ícone de caixas (`inventory`).
- **Botão de Ação:** Botão estilizado na cor primária com efeito de sombra.
- **Design System:** Padrão *Outlined Input* com rótulos flutuantes e paleta de cores centralizada na pasta de temas.

---

## 🛠️ Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [@expo/vector-icons](https://icons.expo.fyi/)

---

## 📁 Estrutura do Projeto

```text
Mini Sistema de Gestão/
├── App.tsx
├── package.json
├── babel.config.js
└── src/
    ├── theme/
    │   └── index.ts          # Configuração de cores e temas
    └── screens/
        └── CadastroProduto/
            ├── index.tsx     # Estrutura do formulário e componentes
            └── styles.ts     # Estilização com StyleSheet
