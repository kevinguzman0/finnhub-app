import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";

export const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  placeholderStyle: {
    fontSize: 14,
    color: colors("grayDarker2"),
    fontWeight: "bold",
  },
  textStyle: {
    fontSize: 14,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
  },
});
