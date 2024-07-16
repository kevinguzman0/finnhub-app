import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";

export const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: colors("greenNormal"),
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  text: {
    color: colors("whiteNormal"),
    fontWeight: "bold",
  },
});
