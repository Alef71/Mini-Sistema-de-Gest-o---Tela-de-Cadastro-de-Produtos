import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: 24,
    paddingTop: 80,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: theme.colors.text,
    marginLeft: 12,
  },
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
  button: {
    backgroundColor: theme.colors.primary,
    height: 56,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});
