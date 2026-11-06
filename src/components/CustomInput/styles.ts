import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 24,
  },
  inputBorder: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: theme.colors.border,
    borderRadius: 8,
    paddingHorizontal: 16,
    height: 56,
  },
  label: {
    position: "absolute",
    top: -10,
    left: 16,
    backgroundColor: theme.colors.background,
    paddingHorizontal: 4,
    color: theme.colors.primary,
    fontSize: 12,
    zIndex: 1,
  },
  icon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: theme.colors.text,
  },
});