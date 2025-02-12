import { StyleSheet } from "react-native";

export const colors = {
  primary: "#3498db",
  secondary: "#2ecc71",
  background: "#f4f6f8",
  text: "#2c3e50",
  white: "#ffffff",
  lightGray: "#ecf0f1",
  danger: "#e74c3c",
  warning: "#f39c12",
};

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 20,
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    padding: 15,
    alignItems: "center",
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});
