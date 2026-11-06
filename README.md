# 📱 Mini Sistema de Gestão de Estoque

Interface desenvolvida em **React Native** com **Expo** e **TypeScript**, utilizando navegação por abas (**Bottom Tab Navigator**) e arquitetura **MVC** para controle completo de estoque (Entrada, Saída e Listagem de Itens).

---

## 📌 Requisitos Atendidos

- **Navegação Multi-telas (Bottom Tab Navigator):**
  - Transição fluida entre as telas do sistema sem cabeçalhos genéricos nativos.
  - Ícones personalizados (`@expo/vector-icons`) com destaque visual e alteração de cor para a aba ativa.

- **Entrada / Cadastro de Produto:**
  - Formulário para registrar novos itens com padrão _Outlined Input_ e rótulos flutuantes.
  - Ícones temáticos para Nome do Produto (`local-offer`), Preço (`attach-money`) e Quantidade (`inventory`).

- **Saída de Produto:**
  - Formulário para registrar baixas de estoque com campos de identificação, quantidade e seletor de motivos da retirada.

- **Controle de Estoque:**
  - Tela de consulta e monitoramento contendo a listagem de itens armazenados e seus respetivos status de estoque.

- **Arquitetura e Design System:**
  - Componentização e estrutura organizada no padrão **MVC**.
  - Paleta de cores e temas centralizados na pasta `src/theme`.

---

## 🛠️ Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo (SDK 57)](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Navigation](https://reactnavigation.org/) (Bottom Tabs)
- [@expo/vector-icons](https://icons.expo.fyi/)

---

## 📁 Estrutura do Projeto

```text
src/
├── components/
│   └── CustomInput/          # Componente reutilizável de campo de texto
│       ├── index.tsx
│       └── styles.ts
├── routes/
│   └── app.routes.tsx        # Configuração das rotas e abas inferiores
├── screens/
│   ├── CadastroProduto/      # Tela de Entrada de Produtos
│   │   ├── index.tsx
│   │   └── styles.ts
│   ├── ControleEstoque/      # Tela de Consulta/Status do Estoque
│   │   ├── index.tsx
│   │   └── styles.ts
│   └── SaidaProduto/         # Tela de Registro de Saídas
│       ├── index.tsx
│       └── styles.ts
└── theme/
    └── index.ts              # Configuração global de cores e tipografia
App.tsx                       # Carregamento do contexto e navegação
```
