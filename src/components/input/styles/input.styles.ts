import { StyleSheet } from "react-native";
import { wp } from "../../../utilities/responsive";

export const styles = StyleSheet.create({
  input: {
    margin: 12,
    borderWidth: 1,
    borderColor: "#ccc", // Borde gris claro para mantener el estilo minimalista
    backgroundColor: "#fff", // Fondo blanco
    color: "#000", // Texto negro
    padding: 10,
    height: 50,
    width: wp(90),
    fontWeight: "bold",
    borderRadius: 5,
  },
});
