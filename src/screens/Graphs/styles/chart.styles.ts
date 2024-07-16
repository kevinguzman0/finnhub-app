import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";
import { wp } from "../../../utilities/responsive";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors("blackNormal"),
    alignItems: "center",
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
    width: wp(90),
  },
  text: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "800",
  },
});
